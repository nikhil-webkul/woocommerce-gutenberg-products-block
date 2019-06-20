this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-on-sale"]=function(e){function t(t){for(var r,a,u=t[0],s=t[1],i=t[2],b=0,d=[];b<u.length;b++)a=u[b],n[a]&&d.push(n[a][0]),n[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(l&&l(t);d.length;)d.shift()();return c.push.apply(c,i||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],r=!0,u=1;u<o.length;u++){var s=o[u];0!==n[s]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=o[0]))}return e}var r={},n={9:0},c=[];function a(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=r,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(o,r,function(t){return e[t]}.bind(null,r));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var l=s;return c.push([517,0,2,1]),o()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t){!function(){e.exports=this.wp.apiFetch}()},11:function(e,t){!function(){e.exports=this.wp.editor}()},14:function(e,t){!function(){e.exports=this.wp.compose}()},15:function(e,t){!function(){e.exports=this.wp.blocks}()},23:function(e,t){!function(){e.exports=this.wp.url}()},24:function(e,t,o){"use strict";o.d(t,"b",function(){return r});var r=["woocommerce/product-best-sellers","woocommerce/product-category","woocommerce/product-new","woocommerce/product-on-sale","woocommerce/product-top-rated"];t.a={columns:{type:"number",default:wc_product_block_data.default_columns},rows:{type:"number",default:wc_product_block_data.default_rows},categories:{type:"array",default:[]},catOperator:{type:"string",default:"any"},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}}}},29:function(e,t,o){"use strict";var r=o(9),n=o.n(r),c=o(0),a=o(1),u=o(5),s=o.n(u),i=o(3),l=function(e){var t=e.onChange,o=e.settings,r=o.button,u=o.price,s=o.rating,l=o.title;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(i.ToggleControl,{label:Object(a.__)("Product title","woo-gutenberg-products-block"),help:l?Object(a.__)("Product title is visible.","woo-gutenberg-products-block"):Object(a.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return t(n()({},o,{title:!l}))}}),Object(c.createElement)(i.ToggleControl,{label:Object(a.__)("Product price","woo-gutenberg-products-block"),help:u?Object(a.__)("Product price is visible.","woo-gutenberg-products-block"):Object(a.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:u,onChange:function(){return t(n()({},o,{price:!u}))}}),Object(c.createElement)(i.ToggleControl,{label:Object(a.__)("Product rating","woo-gutenberg-products-block"),help:s?Object(a.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(a.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:s,onChange:function(){return t(n()({},o,{rating:!s}))}}),Object(c.createElement)(i.ToggleControl,{label:Object(a.__)("Add to Cart button","woo-gutenberg-products-block"),help:r?Object(a.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(a.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:r,onChange:function(){return t(n()({},o,{button:!r}))}}))};l.propTypes={settings:s.a.shape({button:s.a.bool.isRequired,price:s.a.bool.isRequired,title:s.a.bool.isRequired}).isRequired,onChange:s.a.func.isRequired},t.a=l},3:function(e,t){!function(){e.exports=this.wp.components}()},30:function(e,t,o){"use strict";var r=o(0),n=o(6),c=o.n(n),a=o(40),u=o.n(a);o.d(t,"a",function(){return s});var s=function(e){return function(t){var o=t.attributes,n=o.align,a=o.contentVisibility,s=c()(n?"align".concat(n):"",{"is-hidden-title":!a.title,"is-hidden-price":!a.price,"is-hidden-rating":!a.rating,"is-hidden-button":!a.button});return Object(r.createElement)(r.RawHTML,{className:s},function(e,t){var o=e.attributes,r=o.attributes,n=o.attrOperator,c=o.categories,a=o.catOperator,s=o.orderby,i=o.products,l=o.columns||wc_product_block_data.default_columns,b=o.rows||wc_product_block_data.default_rows,d=new Map;switch(d.set("limit",b*l),d.set("columns",l),c&&c.length&&(d.set("category",c.join(",")),a&&"all"===a&&d.set("cat_operator","AND")),r&&r.length&&(d.set("terms",r.map(function(e){return e.id}).join(",")),d.set("attribute",r[0].attr_slug),n&&"all"===n&&d.set("terms_operator","AND")),s&&("price_desc"===s?(d.set("orderby","price"),d.set("order","DESC")):"price_asc"===s?(d.set("orderby","price"),d.set("order","ASC")):"date"===s?(d.set("orderby","date"),d.set("order","DESC")):d.set("orderby",s)),t){case"woocommerce/product-best-sellers":d.set("best_selling","1");break;case"woocommerce/product-top-rated":d.set("orderby","rating");break;case"woocommerce/product-on-sale":d.set("on_sale","1");break;case"woocommerce/product-new":d.set("orderby","date"),d.set("order","DESC");break;case"woocommerce/handpicked-products":if(!i.length)return"";d.set("ids",i.join(",")),d.set("limit",i.length);break;case"woocommerce/product-category":if(!c||!c.length)return"";break;case"woocommerce/products-by-attribute":if(!r||!r.length)return""}var p="[products",g=!0,m=!1,f=void 0;try{for(var _,w=d[Symbol.iterator]();!(g=(_=w.next()).done);g=!0){var h=u()(_.value,2);p+=" "+h[0]+'="'+h[1]+'"'}}catch(e){m=!0,f=e}finally{try{g||null==w.return||w.return()}finally{if(m)throw f}}return p+="]"}(t,e))}}},32:function(e,t,o){"use strict";var r=o(0),n=o(1),c=o(4),a=o(5),u=o.n(a),s=o(3),i=function(e){var t=e.columns,o=e.rows,a=e.setAttributes;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(s.RangeControl,{label:Object(n.__)("Columns","woo-gutenberg-products-block"),value:t,onChange:function(e){var t=Object(c.clamp)(e,wc_product_block_data.min_columns,wc_product_block_data.max_columns);a({columns:Object(c.isNaN)(t)?"":t})},min:wc_product_block_data.min_columns,max:wc_product_block_data.max_columns}),Object(r.createElement)(s.RangeControl,{label:Object(n.__)("Rows","woo-gutenberg-products-block"),value:o,onChange:function(e){var t=Object(c.clamp)(e,wc_product_block_data.min_rows,wc_product_block_data.max_rows);a({rows:Object(c.isNaN)(t)?"":t})},min:wc_product_block_data.min_rows,max:wc_product_block_data.max_rows}))};i.propTypes={columns:u.a.oneOfType([u.a.number,u.a.string]).isRequired,rows:u.a.oneOfType([u.a.number,u.a.string]).isRequired,setAttributes:u.a.func.isRequired},t.a=i},36:function(e,t,o){"use strict";var r=o(43),n=o.n(r),c=o(16),a=o.n(c),u=o(17),s=o.n(u),i=o(18),l=o.n(i),b=o(19),d=o.n(b),p=o(27),g=o.n(p),m=o(20),f=o.n(m),_=o(0),w=o(1),h=o(23),O=o(10),j=o.n(O),y=o(4),k=o(5),v=o.n(k),C=o(25),E=o(3),x=(o(87),function(e){function t(){var e;return a()(this,t),(e=l()(this,d()(t).apply(this,arguments))).state={list:[],loading:!0},e.renderItem=e.renderItem.bind(g()(e)),e}return f()(t,e),s()(t,[{key:"componentDidMount",value:function(){var e=this;j()({path:Object(h.addQueryArgs)("/wc/blocks/products/categories",{per_page:-1})}).then(function(t){e.setState({list:t,loading:!1})}).catch(function(){e.setState({list:[],loading:!1})})}},{key:"renderItem",value:function(e){var t=e.item,o=e.search,r=e.depth,c=void 0===r?0:r,a=["woocommerce-product-categories__item"];o.length&&a.push("is-searching"),0===c&&0!==t.parent&&a.push("is-skip-level");var u=t.breadcrumbs.length?"".concat(t.breadcrumbs.join(", "),", ").concat(t.name):t.name;return Object(_.createElement)(C.b,n()({className:a.join(" ")},e,{showCount:!0,"aria-label":Object(w.sprintf)(Object(w._n)("%s, has %d product","%s, has %d products",t.count,"woo-gutenberg-products-block"),u,t.count)}))}},{key:"render",value:function(){var e=this.state,t=e.list,o=e.loading,r=this.props,n=r.onChange,c=r.onOperatorChange,a=r.operator,u=r.selected,s={clear:Object(w.__)("Clear all product categories","woo-gutenberg-products-block"),list:Object(w.__)("Product Categories","woo-gutenberg-products-block"),noItems:Object(w.__)("Your store doesn't have any product categories.","woo-gutenberg-products-block"),search:Object(w.__)("Search for product categories","woo-gutenberg-products-block"),selected:function(e){return Object(w.sprintf)(Object(w._n)("%d category selected","%d categories selected",e,"woo-gutenberg-products-block"),e)},updated:Object(w.__)("Category search results updated.","woo-gutenberg-products-block")};return Object(_.createElement)(_.Fragment,null,Object(_.createElement)(C.a,{className:"woocommerce-product-categories",list:t,isLoading:o,selected:u.map(function(e){return Object(y.find)(t,{id:e})}).filter(Boolean),onChange:n,renderItem:this.renderItem,messages:s,isHierarchical:!0}),!!c&&Object(_.createElement)("div",{className:u.length<2?"screen-reader-text":""},Object(_.createElement)(E.SelectControl,{className:"woocommerce-product-categories__operator",label:Object(w.__)("Display products matching","woo-gutenberg-products-block"),help:Object(w.__)("Pick at least two categories to use this setting.","woo-gutenberg-products-block"),value:a,onChange:c,options:[{label:Object(w.__)("Any selected categories","woo-gutenberg-products-block"),value:"any"},{label:Object(w.__)("All selected categories","woo-gutenberg-products-block"),value:"all"}]})))}}]),t}(_.Component));x.propTypes={onChange:v.a.func.isRequired,onOperatorChange:v.a.func,operator:v.a.oneOf(["all","any"]),selected:v.a.array.isRequired},x.defaultProps={operator:"any"},t.a=x},4:function(e,t){!function(){e.exports=this.lodash}()},42:function(e,t){!function(){e.exports=this.wp.data}()},45:function(e,t){!function(){e.exports=this.wp.hooks}()},46:function(e,t,o){"use strict";var r=o(0),n=o(1),c=o(3),a=o(5),u=o.n(a),s=function(e){var t=e.value,o=e.setAttributes;return Object(r.createElement)(c.SelectControl,{label:Object(n.__)("Order products by","woo-gutenberg-products-block"),value:t,options:[{label:Object(n.__)("Newness - newest first","woo-gutenberg-products-block"),value:"date"},{label:Object(n.__)("Price - low to high","woo-gutenberg-products-block"),value:"price_asc"},{label:Object(n.__)("Price - high to low","woo-gutenberg-products-block"),value:"price_desc"},{label:Object(n.__)("Rating - highest first","woo-gutenberg-products-block"),value:"rating"},{label:Object(n.__)("Sales - most first","woo-gutenberg-products-block"),value:"popularity"},{label:Object(n.__)("Title - alphabetical","woo-gutenberg-products-block"),value:"title"},{label:Object(n.__)("Menu Order","woo-gutenberg-products-block"),value:"menu_order"}],onChange:function(e){return o({orderby:e})}})};s.propTypes={setAttributes:u.a.func.isRequired,value:u.a.string.isRequired},t.a=s},517:function(e,t,o){"use strict";o.r(t);var r=o(9),n=o.n(r),c=o(0),a=o(1),u=o(15),s=o(4),i=o(49),l=o.n(i),b=o(16),d=o.n(b),p=o(17),g=o.n(p),m=o(18),f=o.n(m),_=o(19),w=o.n(_),h=o(20),O=o.n(h),j=o(3),y=o(11),k=o(5),v=o.n(k),C=o(29),E=o(32),x=o(36),P=o(46),R=function(e){function t(){return d()(this,t),f()(this,w()(t).apply(this,arguments))}return O()(t,e),g()(t,[{key:"getInspectorControls",value:function(){var e=this.props,t=e.attributes,o=e.setAttributes,r=t.categories,n=t.catOperator,u=t.columns,s=t.contentVisibility,i=t.rows,l=t.orderby;return Object(c.createElement)(y.InspectorControls,{key:"inspector"},Object(c.createElement)(j.PanelBody,{title:Object(a.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(E.a,{columns:u,rows:i,setAttributes:o})),Object(c.createElement)(j.PanelBody,{title:Object(a.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(C.a,{settings:s,onChange:function(e){return o({contentVisibility:e})}})),Object(c.createElement)(j.PanelBody,{title:Object(a.__)("Order By","woo-gutenberg-products-block"),initialOpen:!1},Object(c.createElement)(P.a,{setAttributes:o,value:l})),Object(c.createElement)(j.PanelBody,{title:Object(a.__)("Filter by Product Category","woo-gutenberg-products-block"),initialOpen:!1},Object(c.createElement)(x.a,{selected:r,onChange:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map(function(e){return e.id});o({categories:e})},operator:n,onOperatorChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return o({catOperator:e})}})))}},{key:"render",value:function(){var e=this.props.attributes;return Object(c.createElement)(c.Fragment,null,this.getInspectorControls(),Object(c.createElement)(j.Disabled,null,Object(c.createElement)(y.ServerSideRender,{block:"woocommerce/product-on-sale",attributes:e})))}}]),t}(c.Component);R.propTypes={attributes:v.a.object.isRequired,name:v.a.string.isRequired,setAttributes:v.a.func.isRequired};var S=R,A=o(30),T=o(24);Object(u.registerBlockType)("woocommerce/product-on-sale",{title:Object(a.__)("On Sale Products","woo-gutenberg-products-block"),icon:{src:Object(c.createElement)(l.a,{icon:"tag"}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(a.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(a.__)("Display a grid of on sale products.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},attributes:n()({},T.a,{orderby:{type:"string",default:"date"}}),transforms:{from:[{type:"block",blocks:Object(s.without)(T.b,"woocommerce/product-on-sale"),transform:function(e){return Object(u.createBlock)("woocommerce/product-on-sale",e)}}]},deprecated:[{attributes:n()({},T.a,{orderby:{type:"string",default:"date"}}),save:Object(A.a)("woocommerce/product-on-sale")}],edit:function(e){return Object(c.createElement)(S,e)},save:function(){return null}})},52:function(e,t){!function(){e.exports=this.wp.dom}()},56:function(e,t){},57:function(e,t){},59:function(e,t){},60:function(e,t){},7:function(e,t){!function(){e.exports=this.moment}()}});