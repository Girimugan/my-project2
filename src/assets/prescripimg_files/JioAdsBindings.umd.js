(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["JioAdsBindings"] = factory();
	else
		root["JioAdsBindings"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/banner.vue?vue&type=template&id=dd10f8ae&scoped=true
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.showPriceDrop)?_c('div',[_c('ins',{attrs:{"id":"uid1","data-adspot-key":"e43zb8a7","data-source":"com.jio.sample"}})]):_vm._e()])}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/banner.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var bannervue_type_script_lang_js = ({
  name: 'banner',

  data() {
    return {
      showPriceDrop: true
    }
  },

  async mounted() {
  }

});

;// CONCATENATED MODULE: ./src/banner.vue?vue&type=script&lang=js
 /* harmony default export */ var src_bannervue_type_script_lang_js = (bannervue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-51.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-51.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-51.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/banner.vue?vue&type=style&index=0&id=dd10f8ae&prod&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/banner.vue?vue&type=style&index=0&id=dd10f8ae&prod&scoped=true&lang=css

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/banner.vue



;


/* normalize component */

var component = normalizeComponent(
  src_bannervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "dd10f8ae",
  null
  
)

/* harmony default export */ var banner = (component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/billboard.vue?vue&type=template&id=c1b5e71e&scoped=true
var billboardvue_type_template_id_c1b5e71e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.showPriceDrop)?_c('div',[_c('ins',{attrs:{"id":"uid2","data-adspot-key":"7mrl1jpb","data-source":"com.jio.sample"}})]):_vm._e()])}
var billboardvue_type_template_id_c1b5e71e_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/billboard.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//

/* harmony default export */ var billboardvue_type_script_lang_js = ({
  name: 'billboard',

  data() {
    return {
      showPriceDrop: true
    }
  },

  async mounted() {
  }

});

;// CONCATENATED MODULE: ./src/billboard.vue?vue&type=script&lang=js
 /* harmony default export */ var src_billboardvue_type_script_lang_js = (billboardvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-51.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-51.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-51.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/billboard.vue?vue&type=style&index=0&id=c1b5e71e&prod&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/billboard.vue?vue&type=style&index=0&id=c1b5e71e&prod&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/billboard.vue



;


/* normalize component */

var billboard_component = normalizeComponent(
  src_billboardvue_type_script_lang_js,
  billboardvue_type_template_id_c1b5e71e_scoped_true_render,
  billboardvue_type_template_id_c1b5e71e_scoped_true_staticRenderFns,
  false,
  null,
  "c1b5e71e",
  null
  
)

/* harmony default export */ var billboard = (billboard_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/video.vue?vue&type=template&id=32640a79&scoped=true
var videovue_type_template_id_32640a79_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.showPriceDrop)?_c('div',[_c('ins',{attrs:{"id":"uid3","data-container-id":"instreamContainer","data-adspot-key":"1584c269","data-source":"com.jio.sample"}}),_c('div',{attrs:{"id":"instreamContainer"}})]):_vm._e()])}
var videovue_type_template_id_32640a79_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/video.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var videovue_type_script_lang_js = ({
  name: 'video',

  data() {
    return {
      showPriceDrop: true
    }
  },

  async mounted() {
  }

});

;// CONCATENATED MODULE: ./src/video.vue?vue&type=script&lang=js
 /* harmony default export */ var src_videovue_type_script_lang_js = (videovue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-51.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-51.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-51.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/video.vue?vue&type=style&index=0&id=32640a79&prod&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/video.vue?vue&type=style&index=0&id=32640a79&prod&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/video.vue



;


/* normalize component */

var video_component = normalizeComponent(
  src_videovue_type_script_lang_js,
  videovue_type_template_id_32640a79_scoped_true_render,
  videovue_type_template_id_32640a79_scoped_true_staticRenderFns,
  false,
  null,
  "32640a79",
  null
  
)

/* harmony default export */ var video = (video_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/customNative.vue?vue&type=template&id=3d5f3cdc&scoped=true
var customNativevue_type_template_id_3d5f3cdc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.msite)?_c('div',[_vm._m(0)]):_c('div',[_vm._m(1)])])}
var customNativevue_type_template_id_3d5f3cdc_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ins',{attrs:{"id":"uid4","data-adspot-key":"sg2joahn","data-ad-sizes":"320x45","data-source":"com.jio.sample","data-customization":"set-ad-data","click-element":"customimageuyev13p0","data-refresh-rate":"30"}},[_c('div',{staticStyle:{"display":"block","width":"100%","height":"100%"},attrs:{"id":"div_parent"}},[_c('img',{staticClass:"customimageuyev13p0",staticStyle:{"display":"block","width":"100%"},attrs:{"data-native-element":"customimage"}})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ins',{attrs:{"id":"uid4","data-adspot-key":"e43zb8a7","data-ad-sizes":"1680x320","data-source":"com.jio.sample","data-customization":"set-ad-data","click-element":"customimageuyev13p0","data-refresh-rate":"30"}},[_c('div',{staticStyle:{"display":"block","width":"100%","height":"100%"},attrs:{"id":"div_parent"}},[_c('img',{staticClass:"customimageuyev13p0",staticStyle:{"display":"block","width":"100%"},attrs:{"data-native-element":"customimage"}})])])}]


;// CONCATENATED MODULE: ./src/customNative.vue?vue&type=template&id=3d5f3cdc&scoped=true

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/customNative.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var customNativevue_type_script_lang_js = ({
  name: 'customNative',

  data() {
    var ua = navigator.userAgent;
    var msite = false;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        msite = true;
        console.log("in custom native detected as tablet msite");
    }
    if (
        /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
            ua
        )
    ) {
        console.log("in custom native detected as mobile msite");
        msite = true;
    } else {
        console.log("in custom native detected as desktop");
        msite = false;
    }
    return {
        msite: msite
    }
  },

  async mounted() {
  }

});

;// CONCATENATED MODULE: ./src/customNative.vue?vue&type=script&lang=js
 /* harmony default export */ var src_customNativevue_type_script_lang_js = (customNativevue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-51.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-51.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-51.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/customNative.vue?vue&type=style&index=0&id=3d5f3cdc&prod&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/customNative.vue?vue&type=style&index=0&id=3d5f3cdc&prod&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/customNative.vue



;


/* normalize component */

var customNative_component = normalizeComponent(
  src_customNativevue_type_script_lang_js,
  customNativevue_type_template_id_3d5f3cdc_scoped_true_render,
  customNativevue_type_template_id_3d5f3cdc_scoped_true_staticRenderFns,
  false,
  null,
  "3d5f3cdc",
  null
  
)

/* harmony default export */ var customNative = (customNative_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/carousel.vue?vue&type=template&id=c5bae1ac&scoped=true
var carouselvue_type_template_id_c5bae1ac_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.msite)?_c('div',[_vm._m(0)]):_c('div',[_vm._m(1)])])}
var carouselvue_type_template_id_c5bae1ac_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"swiper-container"},[_c('div',{staticClass:"swiper-wrapper"},[_c('div',{staticClass:"swiper-slide",staticStyle:{"width":"100%"},attrs:{"id":"ad-cont-1"}},[_c('ins',{attrs:{"id":"pid-1","data-adspot-key":"dz1ke3ma","data-ad-sizes":"320x45","data-source":"com.jio.sample","data-customization":"set-ad-data","click-element":"customClickButton_carousel_1"}},[_c('div',{staticStyle:{"display":"block","width":"100%","height":"100%"},attrs:{"id":"div_parent1"}},[_c('img',{staticClass:"customClickButton_carousel_1",staticStyle:{"width":"100%","height":"100%","margin":"0px","padding":"0px"},attrs:{"data-native-element":"customimage"}})])])]),_c('div',{staticClass:"swiper-slide",staticStyle:{"width":"100%"},attrs:{"id":"ad-cont-2"}},[_c('ins',{attrs:{"id":"pid-2","data-adspot-key":"ueci845r","data-ad-sizes":"320x45","data-source":"com.jio.sample","data-customization":"set-ad-data","click-element":"customClickButton_carousel_1"}},[_c('div',{staticStyle:{"display":"block","width":"100%","height":"100%"},attrs:{"id":"div_parent2"}},[_c('img',{staticClass:"customClickButton_carousel_1",staticStyle:{"width":"100%","height":"100%","margin":"0px","padding":"0px"},attrs:{"data-native-element":"customimage"}})])])]),_c('div',{staticClass:"swiper-slide",staticStyle:{"width":"100%"},attrs:{"id":"ad-cont-3"}},[_c('ins',{attrs:{"id":"pid-3","data-adspot-key":"okptmq1w","data-ad-sizes":"320x45","data-source":"com.jio.sample","data-customization":"set-ad-data","click-element":"customClickButton_carousel_1"}},[_c('div',{staticStyle:{"display":"block","width":"100%","height":"100%"},attrs:{"id":"div_parent3"}},[_c('img',{staticClass:"customClickButton_carousel_1",staticStyle:{"width":"100%","height":"100%","margin":"0px","padding":"0px"},attrs:{"data-native-element":"customimage"}})])])])]),_c('div',{staticClass:"swiper-pagination"}),_c('div',{staticClass:"swiper-button-prev coverButton"}),_c('div',{staticClass:"swiper-button-next coverButton"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"swiper-container"},[_c('div',{staticClass:"swiper-wrapper"},[_c('div',{staticClass:"swiper-slide",staticStyle:{"width":"100%"},attrs:{"id":"ad-cont-4"}},[_c('ins',{attrs:{"id":"pid-4","data-adspot-key":"z0dhjo1y","data-ad-sizes":"1680x320","data-source":"com.jio.sample","data-customization":"set-ad-data","click-element":"customClickButton_carousel_1"}},[_c('div',{staticStyle:{"display":"block","width":"100%","height":"100%"},attrs:{"id":"div_parent4"}},[_c('img',{staticClass:"customClickButton_carousel_1",staticStyle:{"margin":"0 auto","display":"list-item","min-width":"1030px","max-width":"100%","height":"320px"},attrs:{"data-native-element":"customimage"}})])])]),_c('div',{staticClass:"swiper-slide",staticStyle:{"width":"100%"},attrs:{"id":"ad-cont-5"}},[_c('ins',{attrs:{"id":"pid-5","data-adspot-key":"hu7gn5yz","data-ad-sizes":"1680x320","data-source":"com.jio.sample","data-customization":"set-ad-data","click-element":"customClickButton_carousel_1"}},[_c('div',{staticStyle:{"display":"block","width":"100%","height":"100%"},attrs:{"id":"div_parent5"}},[_c('img',{staticClass:"customClickButton_carousel_1",staticStyle:{"margin":"0 auto","display":"list-item","min-width":"1030px","max-width":"100%","height":"320px"},attrs:{"data-native-element":"customimage"}})])])]),_c('div',{staticClass:"swiper-slide",staticStyle:{"width":"100%"},attrs:{"id":"ad-cont-6"}},[_c('ins',{attrs:{"id":"pid-6","data-adspot-key":"sdl4qvzt","data-ad-sizes":"1680x320","data-source":"com.jio.sample","data-customization":"set-ad-data","click-element":"customClickButton_carousel_1"}},[_c('div',{staticStyle:{"display":"block","width":"100%","height":"100%"},attrs:{"id":"div_parent6"}},[_c('img',{staticClass:"customClickButton_carousel_1",staticStyle:{"margin":"0 auto","display":"list-item","min-width":"1030px","max-width":"100%","height":"320px"},attrs:{"data-native-element":"customimage"}})])])])]),_c('div',{staticClass:"swiper-pagination"}),_c('div',{staticClass:"swiper-button-prev coverButton"}),_c('div',{staticClass:"swiper-button-next coverButton"})])}]


;// CONCATENATED MODULE: ./src/carousel.vue?vue&type=template&id=c5bae1ac&scoped=true

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/carousel.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var carouselvue_type_script_lang_js = ({
  name: 'carousel',

  data() {
    myInsMap : [];
    mySwiper : null;
    myErrAdspots : [];
    var ua = navigator.userAgent;
    var msite = false;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        msite = true;
        console.log("in custom native detected as tablet msite");
    }
    if (
        /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
            ua
        )
    ) {
        console.log("in custom native detected as mobile msite");
        msite = true;
    } else {
        console.log("in custom native detected as desktop");
        msite = false;
    }
    return {
        msite: msite
    }
  },

  mounted() {
    this.myInsMap = [];
    var that = this;
    JioAds.onAdFailedToLoad = function(placementId, options) {
        console.log('CB: onAdFailedToLoad', JSON.stringify(options));
        var placementNode = document.getElementById(placementId);
        //that.myErrAdspots.push(placementId);
        if (placementNode) {
            placementNode.parentElement.remove();
            placementNode.remove();
        }
    }
    setTimeout(() => {
        for (var ins = document.getElementsByTagName('ins'), c = 0; c < ins.length; c++) {
            if(ins[c].id.startsWith("pid-")){
                that.myInsMap.push({
                    id: ins[c].id,
                    activated: true
                });
            }
        }
        this.mySwiper = new Swiper('.swiper-container', {
            slidesPerView: "auto",
            spaceBetween: 0,
            autoplay: {
                delay: 3000,
                disableOnInteraction: 0,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: 1,
            },
            observer: !0,
            observeParents: !0,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                init: function() {
                },
                afterInit: function() {
                },
                slideChange: function() {
                    var myActiveIndex = this.activeIndex;
                    var currentSlide = this.realIndex + 1;
                }
            }
        });
    }, 1000);
  }

});

;// CONCATENATED MODULE: ./src/carousel.vue?vue&type=script&lang=js
 /* harmony default export */ var src_carouselvue_type_script_lang_js = (carouselvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-51.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-51.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-51.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/carousel.vue?vue&type=style&index=0&id=c5bae1ac&prod&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/carousel.vue?vue&type=style&index=0&id=c5bae1ac&prod&scoped=true&lang=css

;// CONCATENATED MODULE: ./src/carousel.vue



;


/* normalize component */

var carousel_component = normalizeComponent(
  src_carouselvue_type_script_lang_js,
  carouselvue_type_template_id_c5bae1ac_scoped_true_render,
  carouselvue_type_template_id_c5bae1ac_scoped_true_staticRenderFns,
  false,
  null,
  "c5bae1ac",
  null
  
)

/* harmony default export */ var carousel = (carousel_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/display.vue?vue&type=template&id=74026511&scoped=true
var displayvue_type_template_id_74026511_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.showPriceDrop)?_c('div',[_c('ins',{attrs:{"id":"uid6","data-adspot-key":"ls2xy7to","data-source":"com.jio.sample"}})]):_vm._e()])}
var displayvue_type_template_id_74026511_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/display.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var displayvue_type_script_lang_js = ({
  name: 'display',

  data() {
    return {
      showPriceDrop: true
    }
  },

  async mounted() {
  }

});

;// CONCATENATED MODULE: ./src/display.vue?vue&type=script&lang=js
 /* harmony default export */ var src_displayvue_type_script_lang_js = (displayvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./src/display.vue





/* normalize component */
;
var display_component = normalizeComponent(
  src_displayvue_type_script_lang_js,
  displayvue_type_template_id_74026511_scoped_true_render,
  displayvue_type_template_id_74026511_scoped_true_staticRenderFns,
  false,
  null,
  "74026511",
  null
  
)

/* harmony default export */ var display = (display_component.exports);
;// CONCATENATED MODULE: ./src/main.js








window.FPI.extension.register("#banner", {
  mounted(element) {
    window.FPI.extension.mountApp({
      element, 
      component: banner
    });
  }
})

window.FPI.extension.register("#billboard", {
  mounted(element) {
    window.FPI.extension.mountApp({
      element, 
      component: billboard
    });
  }
})

window.FPI.extension.register("#video", {
  mounted(element) {
    window.FPI.extension.mountApp({
      element, 
      component: video
    });
  }
})

window.FPI.extension.register("#customNative", {
  mounted(element) {
    window.FPI.extension.mountApp({
      element, 
      component: customNative
    });
  }
})

window.FPI.extension.register("#carousel", {
  mounted(element) {
    window.FPI.extension.mountApp({
      element, 
      component: carousel
    });
  }
})

window.FPI.extension.register("#display", {
  mounted(element) {
    window.FPI.extension.mountApp({
      element, 
      component: display
    });
  }
})
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js



/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=JioAdsBindings.umd.js.map