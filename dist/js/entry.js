/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _leftBox = __webpack_require__(1);

	var _leftBox2 = _interopRequireDefault(_leftBox);

	var _rightBox = __webpack_require__(10);

	var _rightBox2 = _interopRequireDefault(_rightBox);

	var _drag = __webpack_require__(14);

	var _drag2 = _interopRequireDefault(_drag);

	var _input = __webpack_require__(15);

	var _input2 = _interopRequireDefault(_input);

	var _text = __webpack_require__(16);

	var _text2 = _interopRequireDefault(_text);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Vue.config.debug = true;

	var vm = new Vue({
		el: '#wrapper',
		components: {
			"construct": {
				template: '<p>证明在此也能写组件</p>'
			},
			leftBox: _leftBox2.default,
			rightBox: _rightBox2.default
		},
		data: {},
		methods: {}
	});

	_drag2.default.init();
	_input2.default.init();
	_text2.default.init();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(4)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\leftBox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(9)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5b407a1a/leftBox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _text = __webpack_require__(5);

	var _text2 = _interopRequireDefault(_text);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: { textVue: _text2.default },
		data: function data() {
			return {
				lists: [{ msg: "文本框" }, { msg: "数字框" }, { msg: "电子邮件框" }, { msg: "密码框" }]
			};
		}
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(6)
	__vue_script__ = __webpack_require__(7)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\text.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(8)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-b6764672/text.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {
				content: "输入文本"
			};
		},

		methods: {}
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "\n<li class=\"j-left-item\">\n\t<div class=\"item-child-txt item-child\">\n\t\t{{content}}\n\t</div>\n</li>\n";

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"left-box\">\n\t<ul class=\"j-left-list\">\n\t\t<li class=\"j-left-item\">\n\t\t\t<div class=\"item-child-text item-child\"></div>\n\t\t</li>\n\t\t<li class=\"j-left-item\" style=\"height:30px;\">\n\t\t\t<div class=\"item-child-input item-child\">\n\t\t\t\t\n\t\t\t</div>\n\t\t</li>\n\t\t<text-vue></text-vue>\n\t</ul>\n</div>\n";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(11)
	__vue_script__ = __webpack_require__(12)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\rightBox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(13)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-fc8ef8ae/rightBox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {};
		}
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"right-box\">\n\t\n</div>\n\n";

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		init: function init() {
			var lockDrag = false;
			$(".item-child").draggable({ //左项 拖动元素
				scroll: true,
				helper: "clone",
				revert: "invalid",
				appendTo: "body",
				start: function start(event, ui) {
					lockDrag = true;
				},
				stop: function stop(event, ui) {
					lockDrag = false;
				}
			});

			$(".right-box").droppable({
				accept: ":not(.ui-sortable-helper)",
				drop: function drop(event, ui) {

					if (!lockDrag) {
						return false;
					}

					var _this = $(this);

					var style = {
						left: ui.offset.left + "px",
						top: ui.offset.top + "px",
						position: "absolute"
					};
					var resultELe = ui.draggable[0].outerHTML.replace("ui-draggable ui-draggable-handle", "");
					if (/item-child-input/.test(resultELe)) {
						//如果是输入框
						resultELe = '<input type="text" class="item-child-input item-child" style="width:180px;height:30px;">';

						$(resultELe).css(style).draggable({
							helper: "original",
							containment: ".right-box"
						}).resizable().appendTo(this);
					} else {
						$(resultELe).css(style).draggable({
							helper: "original",
							containment: ".right-box"
						}).resizable().appendTo(this);
					}
				}
			});
		}
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		init: function init() {
			$(".right-box").on("click", ".item-child-input", function () {
				//点击输入框
				var _this = $(this);
				var left = _this.css("left");
				var top = _this.css("top");
				var width = _this.css("width");
				var height = _this.css("height");
				$(".creatInput").remove();
				_this.after("\n\t\t\t\t<div class=\"creatInput\" style=\"left:" + left + ";top:" + top + ";width:" + width + ";height:" + height + "\"></div>\n\t\t\t");
				$(".creatInput").draggable({
					helper: "original",
					containment: ".right-box",
					drag: function drag(event, ui) {
						//拖动跟随
						var left = ui.offset.left;
						var top = ui.offset.top;
						$(this).prev().css({
							left: left,
							top: top
						});
					}
				}).resizable({
					resize: function resize(event, ui) {
						console.log(ui);
						$(this).prev().css({
							width: ui.size.width + "px",
							height: ui.size.height + "px"
						});
					}
				}).dblclick(function () {
					$(this).prev().focus();
					$(this).remove();
				});
			});
		}
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		init: function init() {
			$(".right-box").on("dblclick", ".item-child-txt", function () {
				alert("双击了");
			});
		}
	};

/***/ }
/******/ ]);