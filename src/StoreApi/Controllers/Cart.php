<?php
/**
 * Cart controller.
 *
 * @internal This API is used internally by Blocks--it is still in flux and may be subject to revisions.
 * @package WooCommerce/Blocks
 */

namespace Automattic\WooCommerce\Blocks\StoreApi\Controllers;

defined( 'ABSPATH' ) || exit;

use \WP_Error as RestError;
use \WP_REST_Server as RestServer;
use \WP_REST_Controller as RestContoller;
use Automattic\WooCommerce\Blocks\StoreApi\Schemas\CartItemSchema;
use Automattic\WooCommerce\Blocks\StoreApi\Utilities\CartController;

/**
 * Cart API.
 */
class Cart extends RestContoller {
	/**
	 * Endpoint namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'wc/store';

	/**
	 * Route base.
	 *
	 * @var string
	 */
	protected $rest_base = 'cart';

	/**
	 * Schema class instance.
	 *
	 * @var CartItemSchema
	 */
	protected $item_schema;

	/**
	 * Setup API class.
	 */
	public function __construct() {
		$this->item_schema = new CartItemSchema();
	}

	/**
	 * Register routes.
	 */
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base,
			[
				[
					'methods'  => RestServer::READABLE,
					'callback' => [ $this, 'get_items' ],
					'args'     => [
						'context' => $this->get_context_param( [ 'default' => 'view' ] ),
					],
				],
				'schema' => [ $this, 'get_public_item_schema' ],
			]
		);
		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/(?P<key>[\w-]{32})',
			[
				'args'   => [
					'key' => [
						'description' => __( 'Unique identifier for the item within the cart.', 'woo-gutenberg-products-block' ),
						'type'        => 'string',
					],
				],
				[
					'methods'  => RestServer::READABLE,
					'callback' => [ $this, 'get_item' ],
					'args'     => [
						'context' => $this->get_context_param( [ 'default' => 'view' ] ),
					],
				],
				'schema' => [ $this, 'get_public_item_schema' ],
			]
		);
		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/add',
			[
				[
					'methods'  => RestServer::CREATABLE,
					'callback' => array( $this, 'create_item' ),
					'args'     => $this->get_endpoint_args_for_item_schema( RestServer::CREATABLE ),
				],
				'schema' => array( $this, 'get_public_item_schema' ),
			]
		);
		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/empty',
			[
				[
					'methods'  => RestServer::DELETABLE,
					'callback' => array( $this, 'delete_items' ),
				],
				'schema' => array( $this, 'get_public_item_schema' ),
			]
		);
	}

	/**
	 * Get a collection of cart items.
	 *
	 * @param \WP_REST_Request $request Full details about the request.
	 * @return \WP_Error|\WP_REST_Response
	 */
	public function get_items( $request ) {
		$controller = new CartController();
		$cart       = $controller->get_items();
		$items      = [];

		foreach ( $cart as $cart_item ) {
			$data    = $this->prepare_item_for_response( $cart_item, $request );
			$items[] = $this->prepare_response_for_collection( $data );
		}

		$response = rest_ensure_response( $items );

		return $response;
	}

	/**
	 * Get a single cart items.
	 *
	 * @param \WP_REST_Request $request Full details about the request.
	 * @return \WP_Error|\WP_REST_Response
	 */
	public function get_item( $request ) {
		$controller = new CartController();
		$cart_item  = $controller->get_item( $request['key'] );

		if ( ! $cart_item ) {
			return new RestError( 'woocommerce_rest_cart_invalid_key', __( 'Invalid cart item key.', 'woo-gutenberg-products-block' ), array( 'status' => 404 ) );
		}

		$data     = $this->prepare_item_for_response( $cart_item, $request );
		$response = rest_ensure_response( $data );

		return $response;
	}

	/**
	 * Creates one item from the collection.
	 *
	 * @param \WP_REST_Request $request Full data about the request.
	 * @return \WP_Error|\WP_REST_Response Response object on success, or WP_Error object on failure.
	 */
	public function create_item( $request ) {
		if ( ! empty( $request['key'] ) ) {
			return new RestError( 'woocommerce_rest_cart_item_exists', __( 'Cannot create existing cart item.', 'woo-gutenberg-products-block' ), array( 'status' => 400 ) );
		}

		$controller = new CartController();
		$result     = $controller->add_to_cart(
			[
				'id'       => $request['id'],
				'quantity' => $request['quantity'],
			]
		);

		if ( is_wp_error( $result ) ) {
			return $result;
		}

		return rest_ensure_response( $this->prepare_item_for_response( $controller->get_item( $result ), $request ) );
	}

	/**
	 * Deletes all items in the cart.
	 *
	 * @param \WP_Rest_Request $request Full data about the request.
	 * @return \WP_Error|\WP_REST_Response Response object on success, or WP_Error object on failure.
	 */
	public function delete_items( $request ) {
		$controller = new CartController();
		$cart_items = $controller->get_items();

		if ( 0 === count( $cart_items ) ) {
			return new RestError(
				'woocommerce_rest_cart_already_empty',
				__( 'The cart is already empty.', 'woo-gutenberg-products-block' ),
				array(
					'status' => 400,
				)
			);
		}

		$previous = $this->get_items( $request );
		$response = new RestResponse();
		$response->set_data(
			array(
				'deleted'  => true,
				'previous' => $previous->get_data(),
			)
		);

		$controller->empty_cart();

		return $response;
	}

	/**
	 * Cart item schema.
	 *
	 * @return array
	 */
	public function get_item_schema() {
		return $this->item_schema->get_item_schema();
	}

	/**
	 * Prepares a single item output for response.
	 *
	 * @param array            $cart_item    Cart item array.
	 * @param \WP_REST_Request $request Request object.
	 * @return \WP_REST_Response Response object.
	 */
	public function prepare_item_for_response( $cart_item, $request ) {
		$data = $this->item_schema->get_item_response( $cart_item );

		return rest_ensure_response( $data );
	}
}