module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "112a");
/******/ })
/************************************************************************/
/******/ ({

/***/ "112a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.12.1@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("e67d")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./src/packages/printarea.js
/* harmony default export */ var printarea = (class {
  constructor(option) {
    this.standards = {
      strict: 'strict',
      loose: 'loose',
      html5: 'html5'
    };
    this.selectArray = []; // 存储select的

    this.counter = 0;
    this.settings = {
      standard: this.standards.html5,
      extraHead: '',
      // 附加在head标签上的额外元素,使用逗号分隔
      extraCss: '',
      // 额外的css逗号分隔
      popTitle: '',
      // 标题
      endCallback: null,
      // 成功打开后的回调函数
      ids: '',
      // 局部打印的id
      noPrint: '.no-print' // 不打印的元素

    };
    Object.assign(this.settings, option);
    this.init();
  }

  init() {
    this.counter++;
    this.settings.id = `printArea_${this.counter}`;
    let PrintAreaWindow = this.getPrintWindow(); // 创建iframe

    this.write(PrintAreaWindow.doc); // 写入内容

    this.print(PrintAreaWindow);
    this.settings.endCallback();
  }

  print(PAWindow) {
    let paWindow = PAWindow.win;

    const _loaded = () => {
      paWindow.focus();
      paWindow.print();

      try {
        let box = document.getElementById(this.settings.id);
        let canvasList = this.elsdom.querySelectorAll('.canvasImg');
        console.log(this.elsdom);

        for (let i = 0; i < canvasList.length; i++) {
          let _parent = canvasList[i].parentNode;

          _parent.removeChild(canvasList[i]);
        }

        box.parentNode.removeChild(box);
      } catch (e) {
        console.log(e);
      }
    };

    if (window.ActiveXObject) {
      paWindow.onload = _loaded();
      return false;
    }

    paWindow.onload = () => {
      _loaded();
    };
  }

  write(PADocument, $ele) {
    PADocument.open();
    PADocument.write(`${this.docType()}<html>${this.getHead()}${this.getBody()}</html>`);
    PADocument.close();
  }

  docType() {
    if (this.settings.standard === this.standards.html5) {
      return '<!DOCTYPE html>';
    }

    var transitional = this.settings.standard === this.standards.loose ? ' Transitional' : '';
    var dtd = this.settings.standard === this.standards.loose ? 'loose' : 'strict';
    return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01${transitional}//EN" "http://www.w3.org/TR/html4/${dtd}.dtd">`;
  }

  getHead() {
    let extraHead = '';
    let links = '';
    let style = this.settings.noPrint + "{display:none;}";

    if (this.settings.extraHead) {
      this.settings.extraHead.replace(/([^,]+)/g, m => {
        extraHead += m;
      });
    } // 复制所有link标签


    [].forEach.call(document.querySelectorAll('link'), function (item, i) {
      if (item.href.indexOf('.css') >= 0) {
        links += `<link type="text/css" rel="stylesheet" href="${item.href}" >`;
      }
    }); // const _links = document.querySelectorAll('link');
    // if (typeof _links === 'object' || _links.length > 0) {
    //   // 复制所有link标签
    //   for (let i = 0; i < _links.length; i++) {
    //     let item = _links[i];
    //     if (item.href.indexOf('.css') >= 0) {
    //       links += `<link type="text/css" rel="stylesheet" href="${item.href}" >`;
    //     }
    //   }
    // }
    // 循环获取style标签的样式

    let domStyle = document.styleSheets;

    if (domStyle && domStyle.length > 0) {
      for (let i = 0; i < domStyle.length; i++) {
        try {
          if (domStyle[i].cssRules || domStyle[i].rules) {
            let rules = domStyle[i].cssRules || domStyle[i].rules;

            for (let b = 0; b < rules.length; b++) {
              style += rules[b].cssText;
            }
          }
        } catch (e) {
          console.log(domStyle[i].href + e);
        }
      }
    }

    if (this.settings.extraCss) {
      this.settings.extraCss.replace(/([^,\s]+)/g, m => {
        links += `<link type="text/css" rel="stylesheet" href="${m}">`;
      });
    }

    return `<head><title>${this.settings.popTitle}</title>${extraHead}${links}<style type="text/css">${style}</style></head>`;
  }

  getBody() {
    let ids = this.settings.ids;
    ids = ids.replace(new RegExp("#", "g"), '');
    this.elsdom = this.beforeHanler(document.getElementById(ids));
    let ele = this.getFormData(this.elsdom);
    let htm = ele.outerHTML;
    return '<body>' + htm + '</body>';
  } // 克隆节点之前做的操作


  beforeHanler(elsdom) {
    let canvasList = elsdom.querySelectorAll('canvas'); // canvas转换png图片

    for (let i = 0; i < canvasList.length; i++) {
      if (!canvasList[i].style.display) {
        let _parent = canvasList[i].parentNode;

        let _canvasUrl = canvasList[i].toDataURL('image/png');

        let _img = new Image();

        _img.className = 'canvasImg';
        _img.style.display = 'none';
        _img.src = _canvasUrl; // _parent.replaceChild(_img, canvasList[i])

        _parent.appendChild(_img);
      }
    }

    return elsdom;
  } // 根据type去处理form表单


  getFormData(ele) {
    let copy = ele.cloneNode(true);
    let copiedInputs = copy.querySelectorAll('input,select,textarea');
    let canvasImgList = copy.querySelectorAll('.canvasImg,canvas');
    let selectCount = -1; // 处理所有canvas

    for (let i = 0; i < canvasImgList.length; i++) {
      let _parent = canvasImgList[i].parentNode;
      let item = canvasImgList[i]; // 删除克隆后的canvas节点

      if (item.tagName.toLowerCase() === 'canvas') {
        _parent.removeChild(item);
      } else {
        item.style.display = 'block';
      }
    } // 处理所有输入框


    for (let i = 0; i < copiedInputs.length; i++) {
      let item = copiedInputs[i];
      let typeInput = item.getAttribute('type');
      let copiedInput = copiedInputs[i]; // 获取select标签

      if (!typeInput) {
        typeInput = item.tagName === 'SELECT' ? 'select' : item.tagName === 'TEXTAREA' ? 'textarea' : '';
      } // 处理input框


      if (item.tagName === 'INPUT') {
        // 除了单选框 多选框比较特别
        if (typeInput === 'radio' || typeInput === 'checkbox') {
          copiedInput.setAttribute('checked', item.checked); // 
        } else {
          copiedInput.value = item.value;
          copiedInput.setAttribute('value', item.value);
        } // 处理select

      } else if (typeInput === 'select') {
        selectCount++;

        for (let b = 0; b < ele.querySelectorAll('select').length; b++) {
          let select = ele.querySelectorAll('select')[b]; // 获取原始层每一个select

          !select.getAttribute('newbs') && select.setAttribute('newbs', b); // 添加标识

          if (select.getAttribute('newbs') == selectCount) {
            let opSelectedIndex = ele.querySelectorAll('select')[selectCount].selectedIndex;
            item.options[opSelectedIndex].setAttribute('selected', true);
          }
        } // 处理textarea

      } else {
        copiedInput.innerHTML = item.value;
        copiedInput.setAttribute('html', item.value);
      }
    }

    return copy;
  }

  getPrintWindow() {
    var f = this.Iframe();
    return {
      f: f,
      win: f.contentWindow || f,
      doc: f.doc
    };
  }

  Iframe() {
    let frameId = this.settings.id;
    let iframe;
    let that = this;

    try {
      iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      iframe.style.border = '0px';
      iframe.style.position = 'absolute';
      iframe.style.width = '0px';
      iframe.style.height = '0px';
      iframe.style.right = '0px';
      iframe.style.top = '0px';
      iframe.setAttribute('id', frameId);
      iframe.setAttribute('src', new Date().getTime());
      iframe.doc = null;
      iframe.doc = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow ? iframe.contentWindow.document : iframe.document;

      iframe.onload = function () {
        var win = iframe.contentWindow || iframe;
        that.print(win);
      };
    } catch (e) {
      throw new Error(e + '. iframes may not be supported in this browser.');
    }

    if (iframe.doc == null) {
      throw new Error('Cannot find document.');
    }

    return iframe;
  }

});
// CONCATENATED MODULE: ./src/packages/print.js

/**
 * @file 打印
 * 指令`v-print`,默认打印整个窗口
 * 传入参数`v-print="'#id'"` , 参数为需要打印局部的盒子标识.
 */

/* harmony default export */ var print = ({
  directiveName: 'print',

  bind(el, binding, vnode) {
    let vue = vnode.context;
    let closeBtn = true;
    let id = '';
    el.addEventListener('click', () => {
      vue.$nextTick(() => {
        if (typeof binding.value === 'string') {
          id = binding.value;
        } else if (typeof binding.value === 'object' && !!binding.value.id) {
          id = binding.value.id;
          let ids = id.replace(new RegExp("#", "g"), '');
          let elsdom = document.getElementById(ids);
          if (!elsdom) console.log("id in Error"), id = '';
        } // 局部打印


        if (id) {
          localPrint();
        } else {
          // 直接全局打印
          window.print();
        }
      });
    });

    const localPrint = () => {
      if (closeBtn) {
        closeBtn = false;
        new printarea({
          ids: id,
          // * 局部打印必传入id
          standard: '',
          // 文档类型，默认是html5，可选 html5，loose，strict
          extraHead: binding.value.extraHead,
          // 附加在head标签上的额外标签,使用逗号分隔
          extraCss: binding.value.extraCss,
          // 额外的css连接，多个逗号分开
          popTitle: binding.value.popTitle,

          // title的标题
          endCallback() {
            // 调用打印之后的回调事件
            closeBtn = true;
          }

        });
      }
    };
  }

});
// CONCATENATED MODULE: ./src/index.js


print.install = function (Vue) {
  Vue.directive('print', print);
};

/* harmony default export */ var src = (print);
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.12.1@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ }),

/***/ "e67d":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ })

/******/ });
//# sourceMappingURL=tag-textarea.common.js.map