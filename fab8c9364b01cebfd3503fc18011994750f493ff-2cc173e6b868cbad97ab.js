(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{CS7O:function(e,i,n){"use strict";var t=n("q1tI"),r=(n("5D9J"),n("qKvR")),o=(n("b6Qr"),n("JmBL")),s=function(e,i){console.log("WAFLASH> load from =>",i);e.ccall("reopenBuffer","int",["string","number","number"],[i,0,0])},a=function(e,i){if(i.size<104857600){var n=new FileReader;n.onload=function(n){console.log("WAFLASH> file loaded!");var t=n.target.result;if(t){console.log("WAFLASH> content length: "+t.byteLength);var r=new Uint8Array(t),o=e._malloc(r.length);e.HEAP8.set(r,o);var s=e.ccall("reopenBuffer","int",["string","number","number"],[i.name,o,r.length]);e._free(o),0==s&&console.warn("WAFLASH> load failed!")}else console.warn("WAFLASH> load result empty!")},n.readAsArrayBuffer(i)}else console.warn("WAFLASH> ignoring dropped file because it is too big")},l=function(e){var i=document;i.addEventListener("dragenter",(function(e){e.stopPropagation(),e.preventDefault()}),!1),i.addEventListener("dragleave",(function(e){e.stopPropagation(),e.preventDefault()}),!1),i.addEventListener("dragover",(function(e){e.stopPropagation(),e.preventDefault()}),!1),i.addEventListener("drop",(function(i){i.stopPropagation(),i.preventDefault(),function(e,i){var n=i.dataTransfer.getData("text");n&&/^https?:\/\/.*\.swf$/.test(n)?s(e,n):i.dataTransfer.files.length>0&&a(e,i.dataTransfer.files[0]),e.hideStatus()}(e,i)}),!1),e.setStatus(navigator.language&&navigator.language.startsWith("ko")?"SWF 파일을 재생하려면 드래그하여 여기에 놓으세요!":"Drop a SWF file here to play!")},d=o.a,c={name:"jwh8kt",styles:"position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:70%;color:white;margin:0px auto;padding:20px;font-size:1.2rem;text-align:center;background-color:rgba(0,0,0,0.1);display:none;"};i.a=function(e){if(e.disable)return Object(r.c)("div",null);Object(t.useEffect)((function(){var i,n=e.src&&e.src.publicURL?window.location.origin+e.src.publicURL:"",t={arguments:[n],preRun:[],postRun:[],locateFile:function(e,i){return"/wasm/"+e},print:function(e){console.log(e)},printErr:function(e){console.error(e)},canvas:(i=document.getElementById("canvas"),i.addEventListener("webglcontextlost",(function(e){alert("WebGL context lost. You will need to reload the page."),e.preventDefault()}),!1),i),statusElement:document.getElementById("waflashStatus"),setStatus:function(e){e&&(e=e.replace(/Downloading data\.\.\. \((\d+)\/(\d+)\)/,(function(e,i,n){return"Downloading player... "+Math.floor(parseInt(i)/parseInt(n)*100)+"%"})),console.log("WAFLASH> "+e),0==e.indexOf("Loading SWF...")&&(e='Loading SWF <svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="48px" height="20px" viewBox="0 0 64 16" xml:space="preserve"><path fill="#beb5f9" fill-opacity="0.42" d="M6.4,4.8A3.2,3.2,0,1,1,3.2,8,3.2,3.2,0,0,1,6.4,4.8Zm12.8,0A3.2,3.2,0,1,1,16,8,3.2,3.2,0,0,1,19.2,4.8ZM32,4.8A3.2,3.2,0,1,1,28.8,8,3.2,3.2,0,0,1,32,4.8Zm12.8,0A3.2,3.2,0,1,1,41.6,8,3.2,3.2,0,0,1,44.8,4.8Zm12.8,0A3.2,3.2,0,1,1,54.4,8,3.2,3.2,0,0,1,57.6,4.8Zm12.8,0A3.2,3.2,0,1,1,67.2,8,3.2,3.2,0,0,1,70.4,4.8Zm12.8,0A3.2,3.2,0,1,1,80,8,3.2,3.2,0,0,1,83.2,4.8ZM96,4.8A3.2,3.2,0,1,1,92.8,8,3.2,3.2,0,0,1,96,4.8Zm12.8,0A3.2,3.2,0,1,1,105.6,8,3.2,3.2,0,0,1,108.8,4.8Zm12.8,0A3.2,3.2,0,1,1,118.4,8,3.2,3.2,0,0,1,121.6,4.8Z"/><g><path fill="#654ff0" fill-opacity="1" d="M-42.7,3.84A4.16,4.16,0,0,1-38.54,8a4.16,4.16,0,0,1-4.16,4.16A4.16,4.16,0,0,1-46.86,8,4.16,4.16,0,0,1-42.7,3.84Zm12.8-.64A4.8,4.8,0,0,1-25.1,8a4.8,4.8,0,0,1-4.8,4.8A4.8,4.8,0,0,1-34.7,8,4.8,4.8,0,0,1-29.9,3.2Zm12.8-.64A5.44,5.44,0,0,1-11.66,8a5.44,5.44,0,0,1-5.44,5.44A5.44,5.44,0,0,1-22.54,8,5.44,5.44,0,0,1-17.1,2.56Z"/><animateTransform attributeName="transform" type="translate" values="23 0;36 0;49 0;62 0;74.5 0;87.5 0;100 0;113 0;125.5 0;138.5 0;151.5 0;164.5 0;178 0" calcMode="discrete" dur="1170ms" repeatCount="indefinite"/></g></svg>'),t.statusElement.innerHTML=e,t.showStatus())},showStatus:function(){t.statusElement.style.display="block"},hideStatus:function(){t.statusElement.style.display="none"},unload:function(){}};window.waflash=t;return t.setStatus("Prepairing..."),d(t).then((function(e){console.log("WAFLASH> Waflash module created!"),n||l(t)})),function(){console.log("WAFLASH> Waflash component will unmount!"),t.unload(),t=null,window.waflash=null}}));var i=Object(r.b)("padding-right:0;margin-left:auto;margin-right:auto;display:block;border:0px none;background-color:black;width:",e.width||"100%",";height:",e.height||"480px",";@media (max-width:640px){width:100%;height:75vw;}@media (max-width:319px){width:240px;height:180px;}@media (orientation:landscape) and (max-height:480px){width:100%;height:75vh;}"),n=c;return Object(r.c)("div",{id:"waflashContainer",style:{position:"relative",border:"1px solid black"}},Object(r.c)("canvas",{id:"canvas",css:i,onContextMenu:function(e){return e.preventDefault()},tabIndex:-1}),Object(r.c)("div",{id:"waflashStatus",css:n}))}},URgk:function(e,i,n){(function(e){var t=void 0!==e&&e||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function o(e,i){this._id=e,this._clearFn=i}i.setTimeout=function(){return new o(r.call(setTimeout,t,arguments),clearTimeout)},i.setInterval=function(){return new o(r.call(setInterval,t,arguments),clearInterval)},i.clearTimeout=i.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(t,this._id)},i.enroll=function(e,i){clearTimeout(e._idleTimeoutId),e._idleTimeout=i},i.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},i._unrefActive=i.active=function(e){clearTimeout(e._idleTimeoutId);var i=e._idleTimeout;i>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),i))},n("YBdB"),i.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,i.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("yLpj"))},YBdB:function(e,i,n){(function(e,i){!function(e,n){"use strict";if(!e.setImmediate){var t,r,o,s,a,l=1,d={},c=!1,u=e.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(e);m=m&&m.setTimeout?m:e,"[object process]"==={}.toString.call(e.process)?t=function(e){i.nextTick((function(){f(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var i=!0,n=e.onmessage;return e.onmessage=function(){i=!1},e.postMessage("","*"),e.onmessage=n,i}}()?e.MessageChannel?((o=new MessageChannel).port1.onmessage=function(e){f(e.data)},t=function(e){o.port2.postMessage(e)}):u&&"onreadystatechange"in u.createElement("script")?(r=u.documentElement,t=function(e){var i=u.createElement("script");i.onreadystatechange=function(){f(e),i.onreadystatechange=null,r.removeChild(i),i=null},r.appendChild(i)}):t=function(e){setTimeout(f,0,e)}:(s="setImmediate$"+Math.random()+"$",a=function(i){i.source===e&&"string"==typeof i.data&&0===i.data.indexOf(s)&&f(+i.data.slice(s.length))},e.addEventListener?e.addEventListener("message",a,!1):e.attachEvent("onmessage",a),t=function(i){e.postMessage(s+i,"*")}),m.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var i=new Array(arguments.length-1),n=0;n<i.length;n++)i[n]=arguments[n+1];var r={callback:e,args:i};return d[l]=r,t(l),l++},m.clearImmediate=w}function w(e){delete d[e]}function f(e){if(c)setTimeout(f,0,e);else{var i=d[e];if(i){c=!0;try{!function(e){var i=e.callback,n=e.args;switch(n.length){case 0:i();break;case 1:i(n[0]);break;case 2:i(n[0],n[1]);break;case 3:i(n[0],n[1],n[2]);break;default:i.apply(void 0,n)}}(i)}finally{w(e),c=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n("yLpj"),n("8oxB"))},b6Qr:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t,r=n("q1tI"),o=(t=r)&&"object"==typeof t&&"default"in t?t.default:t,s=new(n("peHP")),a=s.getBrowser(),l=(s.getCPU(),s.getDevice()),d=s.getEngine(),c=s.getOS(),u=s.getUA(),m=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||i},w=function(){return!("undefined"==typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},f=function(e){var i=w();return i&&i.platform&&(-1!==i.platform.indexOf(e)||"MacIntel"===i.platform&&i.maxTouchPoints>1&&!window.MSStream)};function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,i){for(var n=0;n<i.length;n++){var t=i[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function h(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function v(){return(v=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function b(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,i){return(x=Object.setPrototypeOf||function(e,i){return e.__proto__=i,e})(e,i)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var S="mobile",A="tablet",k="smarttv",O="console",T="wearable",N=void 0,C="Chrome",L="Firefox",P="Opera",M="Yandex",F="Safari",V="Internet Explorer",_="Edge",j="Chromium",I="IE",W="Mobile Safari",B="iOS",z="Android",D="Windows Phone",R="Windows",H="Mac OS",U={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},q=function(e,i,n,t){return function(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?b(n,!0).forEach((function(i){h(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}({},e,{vendor:m(i.vendor),model:m(i.model),os:m(n.name),osVersion:m(n.version),ua:m(t)})},Z=function(e){switch(e){case S:return{isMobile:!0};case A:return{isTablet:!0};case k:return{isSmartTV:!0};case O:return{isConsole:!0};case T:return{isWearable:!0};case N:return{isBrowser:!0};default:return U}}(l.type);var G,Y=function(){return c.name===R&&"10"===c.version&&("string"==typeof u&&-1!==u.indexOf("Edg/"))},$=function(){return a.name===_},Q=function(){return f("iPad")},X=l.type===k,J=l.type===O,K=l.type===T,ee=a.name===W||Q(),ie=a.name===j,ne=function(){switch(l.type){case S:case A:return!0;default:return!1}}()||Q(),te=l.type===S,re=l.type===A||Q(),oe=l.type===N,se=c.name===z,ae=c.name===D,le=c.name===B||Q(),de=a.name===C,ce=a.name===L,ue=a.name===F||a.name===W,me=a.name===P,we=a.name===V||a.name===I,fe=m(c.version),pe=m(c.name),ge=m(a.version),he=m(a.major),ve=m(a.name),be=m(l.vendor),ye=m(l.model),xe=m(d.name),Ee=m(d.version),Se=m(u),Ae=$()||Y(),ke=a.name===M,Oe=m(l.type,"browser"),Te=(G=w())&&(/iPad|iPhone|iPod/.test(G.platform)||"MacIntel"===G.platform&&G.maxTouchPoints>1)&&!window.MSStream,Ne=Q(),Ce=f("iPhone"),Le=f("iPod"),Pe=function(){var e=w(),i=e&&e.userAgent.toLowerCase();return"string"==typeof i&&/electron/.test(i)}(),Me=Y(),Fe=$(),Ve=c.name===R,_e=c.name===H;i.AndroidView=function(e){var i=e.renderWithFragment,n=e.children,t=e.viewClassName,s=e.style;return se?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:t,style:s},n):null},i.BrowserView=function(e){var i=e.renderWithFragment,n=e.children,t=e.viewClassName,s=e.style;return oe?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:t,style:s},n):null},i.ConsoleView=function(e){var i=e.renderWithFragment,n=e.children,t=e.viewClassName,s=e.style;return J?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:t,style:s},n):null},i.CustomView=function(e){var i=e.renderWithFragment,n=e.children,t=e.viewClassName,s=e.style;return e.condition?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:t,style:s},n):null},i.IEView=function(e){var i=e.renderWithFragment,n=e.children,t=e.viewClassName,s=e.style;return we?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:t,style:s},n):null},i.IOSView=function(e){var i=e.renderWithFragment,n=e.children,t=e.viewClassName,s=e.style;return le?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:t,style:s},n):null},i.MobileOnlyView=function(e){var i=e.renderWithFragment,n=e.children,t=e.viewClassName,s=e.style;return te?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:t,style:s},n):null},i.MobileView=function(e){var i=e.renderWithFragment,n=e.children,t=e.viewClassName,s=e.style;return ne?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:t,style:s},n):null},i.SmartTVView=function(e){var i=e.renderWithFragment,n=e.children,t=e.viewClassName,s=e.style;return X?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:t,style:s},n):null},i.TabletView=function(e){var i=e.renderWithFragment,n=e.children,t=e.viewClassName,s=e.style;return re?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:t,style:s},n):null},i.WearableView=function(e){var i=e.renderWithFragment,n=e.children,t=e.viewClassName,s=e.style;return K?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:t,style:s},n):null},i.WinPhoneView=function(e){var i=e.renderWithFragment,n=e.children,t=e.viewClassName,s=e.style;return ae?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:t,style:s},n):null},i.browserName=ve,i.browserVersion=he,i.deviceDetect=function(){var e=Z.isBrowser,i=Z.isMobile,n=Z.isTablet,t=Z.isSmartTV,r=Z.isConsole,o=Z.isWearable;return e?function(e,i,n,t,r){return{isBrowser:e,browserMajorVersion:m(i.major),browserFullVersion:m(i.version),browserName:m(i.name),engineName:m(n.name),engineVersion:m(n.version),osName:m(t.name),osVersion:m(t.version),userAgent:m(r)}}(e,a,d,c,u):t?function(e,i,n,t){return{isSmartTV:e,engineName:m(i.name),engineVersion:m(i.version),osName:m(n.name),osVersion:m(n.version),userAgent:m(t)}}(t,d,c,u):r?function(e,i,n,t){return{isConsole:e,engineName:m(i.name),engineVersion:m(i.version),osName:m(n.name),osVersion:m(n.version),userAgent:m(t)}}(r,d,c,u):i||n?q(Z,l,c,u):o?function(e,i,n,t){return{isWearable:e,engineName:m(i.name),engineVersion:m(i.version),osName:m(n.name),osVersion:m(n.version),userAgent:m(t)}}(o,d,c,u):void 0},i.deviceType=Oe,i.engineName=xe,i.engineVersion=Ee,i.fullBrowserVersion=ge,i.getUA=Se,i.isAndroid=se,i.isBrowser=oe,i.isChrome=de,i.isChromium=ie,i.isConsole=J,i.isEdge=Ae,i.isEdgeChromium=Me,i.isElectron=Pe,i.isFirefox=ce,i.isIE=we,i.isIOS=le,i.isIOS13=Te,i.isIPad13=Ne,i.isIPhone13=Ce,i.isIPod13=Le,i.isLegacyEdge=Fe,i.isMacOs=_e,i.isMobile=ne,i.isMobileOnly=te,i.isMobileSafari=ee,i.isOpera=me,i.isSafari=ue,i.isSmartTV=X,i.isTablet=re,i.isWearable=K,i.isWinPhone=ae,i.isWindows=Ve,i.isYandex=ke,i.mobileModel=ye,i.mobileVendor=be,i.osName=pe,i.osVersion=fe,i.withOrientationChange=function(e){return function(i){function n(e){var i;return function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,n),(i=function(e,i){return!i||"object"!=typeof i&&"function"!=typeof i?E(e):i}(this,y(n).call(this,e))).isEventListenerAdded=!1,i.handleOrientationChange=i.handleOrientationChange.bind(E(i)),i.onOrientationChange=i.onOrientationChange.bind(E(i)),i.onPageLoad=i.onPageLoad.bind(E(i)),i.state={isLandscape:!1,isPortrait:!1},i}var t,r,s;return function(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i&&x(e,i)}(n,i),t=n,(r=[{key:"handleOrientationChange",value:function(){this.isEventListenerAdded||(this.isEventListenerAdded=!0);var e=window.innerWidth>window.innerHeight?90:0;this.setState({isPortrait:0===e,isLandscape:90===e})}},{key:"onOrientationChange",value:function(){this.handleOrientationChange()}},{key:"onPageLoad",value:function(){this.handleOrientationChange()}},{key:"componentDidMount",value:function(){void 0!==("undefined"==typeof window?"undefined":p(window))&&ne&&(this.isEventListenerAdded?window.removeEventListener("load",this.onPageLoad,!1):(this.handleOrientationChange(),window.addEventListener("load",this.onPageLoad,!1)),window.addEventListener("resize",this.onOrientationChange,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onOrientationChange,!1)}},{key:"render",value:function(){return o.createElement(e,v({},this.props,{isLandscape:this.state.isLandscape,isPortrait:this.state.isPortrait}))}}])&&g(t.prototype,r),s&&g(t,s),n}(o.Component)}},peHP:function(e,i,n){var t;!function(r,o){"use strict";var s="model",a="name",l="type",d="vendor",c="version",u="mobile",m="tablet",w="smarttv",f={extend:function(e,i){var n={};for(var t in e)i[t]&&i[t].length%2==0?n[t]=i[t].concat(e[t]):n[t]=e[t];return n},has:function(e,i){return"string"==typeof e&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"==typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},p={rgx:function(e,i){for(var n,t,r,o,s,a,l=0;l<i.length&&!s;){var d=i[l],c=i[l+1];for(n=t=0;n<d.length&&!s;)if(s=d[n++].exec(e))for(r=0;r<c.length;r++)a=s[++t],"object"==typeof(o=c[r])&&o.length>0?2==o.length?"function"==typeof o[1]?this[o[0]]=o[1].call(this,a):this[o[0]]=o[1]:3==o.length?"function"!=typeof o[1]||o[1].exec&&o[1].test?this[o[0]]=a?a.replace(o[1],o[2]):void 0:this[o[0]]=a?o[1].call(this,a,o[2]):void 0:4==o.length&&(this[o[0]]=a?o[3].call(this,a.replace(o[1],o[2])):void 0):this[o]=a||void 0;l+=2}},str:function(e,i){for(var n in i)if("object"==typeof i[n]&&i[n].length>0){for(var t=0;t<i[n].length;t++)if(f.has(i[n][t],e))return"?"===n?void 0:n}else if(f.has(i[n],e))return"?"===n?void 0:n;return e}},g={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},h={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[a,c],[/(opios)[\/\s]+([\w\.]+)/i],[[a,"Opera Mini"],c],[/\s(opr)\/([\w\.]+)/i],[[a,"Opera"],c],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[a,c],[/(konqueror)\/([\w\.]+)/i],[[a,"Konqueror"],c],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[a,"IE"],c],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[a,"Edge"],c],[/(yabrowser)\/([\w\.]+)/i],[[a,"Yandex"],c],[/(Avast)\/([\w\.]+)/i],[[a,"Avast Secure Browser"],c],[/(AVG)\/([\w\.]+)/i],[[a,"AVG Secure Browser"],c],[/(puffin)\/([\w\.]+)/i],[[a,"Puffin"],c],[/(focus)\/([\w\.]+)/i],[[a,"Firefox Focus"],c],[/(opt)\/([\w\.]+)/i],[[a,"Opera Touch"],c],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[a,"UCBrowser"],c],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],c],[/(windowswechat qbcore)\/([\w\.]+)/i],[[a,"WeChat(Win) Desktop"],c],[/(micromessenger)\/([\w\.]+)/i],[[a,"WeChat"],c],[/(brave)\/([\w\.]+)/i],[[a,"Brave"],c],[/(qqbrowserlite)\/([\w\.]+)/i],[a,c],[/(QQ)\/([\d\.]+)/i],[a,c],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[a,c],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[a,c],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[a,c],[/(MetaSr)[\/\s]?([\w\.]+)/i],[a],[/(LBBROWSER)/i],[a],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[c,[a,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[c,[a,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[a,c],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[c,[a,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[a,/(.+)/,"$1 WebView"],c],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[a,/(.+(?:g|us))(.+)/,"$1 $2"],c],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[c,[a,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[a,"Sailfish Browser"],c],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[a,c],[/(dolfin)\/([\w\.]+)/i],[[a,"Dolphin"],c],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[a,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[a,"Chrome"],c],[/(coast)\/([\w\.]+)/i],[[a,"Opera Coast"],c],[/fxios\/([\w\.-]+)/i],[c,[a,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[c,[a,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[c,a],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[a,"GSA"],c],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[a,[c,p.str,g.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[a,c],[/(navigator|netscape)\/([\w\.-]+)/i],[[a,"Netscape"],c],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[a,c]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",f.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",f.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",f.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[s,d,[l,m]],[/applecoremedia\/[\w\.]+ \((ipad)/],[s,[d,"Apple"],[l,m]],[/(apple\s{0,1}tv)/i],[[s,"Apple TV"],[d,"Apple"],[l,w]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[d,s,[l,m]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[s,[d,"Amazon"],[l,m]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[s,p.str,g.device.amazon.model],[d,"Amazon"],[l,u]],[/android.+aft([bms])\sbuild/i],[s,[d,"Amazon"],[l,w]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[s,d,[l,u]],[/\((ip[honed|\s\w*]+);/i],[s,[d,"Apple"],[l,u]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[d,s,[l,u]],[/\(bb10;\s(\w+)/i],[s,[d,"BlackBerry"],[l,u]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[s,[d,"Asus"],[l,m]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[d,"Sony"],[s,"Xperia Tablet"],[l,m]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[s,[d,"Sony"],[l,u]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[d,s,[l,"console"]],[/android.+;\s(shield)\sbuild/i],[s,[d,"Nvidia"],[l,"console"]],[/(playstation\s[34portablevi]+)/i],[s,[d,"Sony"],[l,"console"]],[/(sprint\s(\w+))/i],[[d,p.str,g.device.sprint.vendor],[s,p.str,g.device.sprint.model],[l,u]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[d,[s,/_/g," "],[l,u]],[/(nexus\s9)/i],[s,[d,"HTC"],[l,m]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],[s,[d,"Huawei"],[l,u]],[/android.+(bah2?-a?[lw]\d{2})/i],[s,[d,"Huawei"],[l,m]],[/(microsoft);\s(lumia[\s\w]+)/i],[d,s,[l,u]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[s,[d,"Microsoft"],[l,"console"]],[/(kin\.[onetw]{3})/i],[[s,/\./g," "],[d,"Microsoft"],[l,u]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[s,[d,"Motorola"],[l,u]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[s,[d,"Motorola"],[l,m]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[d,f.trim],[s,f.trim],[l,w]],[/hbbtv.+maple;(\d+)/i],[[s,/^/,"SmartTV"],[d,"Samsung"],[l,w]],[/\(dtv[\);].+(aquos)/i],[s,[d,"Sharp"],[l,w]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[d,"Samsung"],s,[l,m]],[/smart-tv.+(samsung)/i],[d,[l,w],s],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[d,"Samsung"],s,[l,u]],[/sie-(\w*)/i],[s,[d,"Siemens"],[l,u]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[d,"Nokia"],s,[l,u]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[s,[d,"Acer"],[l,m]],[/android.+([vl]k\-?\d{3})\s+build/i],[s,[d,"LG"],[l,m]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[d,"LG"],s,[l,m]],[/(lg) netcast\.tv/i],[d,s,[l,w]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[s,[d,"LG"],[l,u]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[d,s,[l,m]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[s,[d,"Lenovo"],[l,m]],[/(lenovo)[_\s-]?([\w-]+)/i],[d,s,[l,u]],[/linux;.+((jolla));/i],[d,s,[l,u]],[/((pebble))app\/[\d\.]+\s/i],[d,s,[l,"wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[d,s,[l,u]],[/crkey/i],[[s,"Chromecast"],[d,"Google"],[l,w]],[/android.+;\s(glass)\s\d/i],[s,[d,"Google"],[l,"wearable"]],[/android.+;\s(pixel c)[\s)]/i],[s,[d,"Google"],[l,m]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],[s,[d,"Google"],[l,u]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[s,/_/g," "],[d,"Xiaomi"],[l,u]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[s,/_/g," "],[d,"Xiaomi"],[l,m]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[s,[d,"Meizu"],[l,u]],[/(mz)-([\w-]{2,})/i],[[d,"Meizu"],s,[l,u]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[s,[d,"OnePlus"],[l,u]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[s,[d,"RCA"],[l,m]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[s,[d,"Dell"],[l,m]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[s,[d,"Verizon"],[l,m]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[d,"Barnes & Noble"],s,[l,m]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[s,[d,"NuVision"],[l,m]],[/android.+;\s(k88)\sbuild/i],[s,[d,"ZTE"],[l,m]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[s,[d,"Swiss"],[l,u]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[s,[d,"Swiss"],[l,m]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[s,[d,"Zeki"],[l,m]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[d,"Dragon Touch"],s,[l,m]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[s,[d,"Insignia"],[l,m]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[s,[d,"NextBook"],[l,m]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[d,"Voice"],s,[l,u]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[d,"LvTel"],s,[l,u]],[/android.+;\s(PH-1)\s/i],[s,[d,"Essential"],[l,u]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[s,[d,"Envizen"],[l,m]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[d,s,[l,m]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[s,[d,"MachSpeed"],[l,m]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[d,s,[l,m]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[s,[d,"Rotor"],[l,m]],[/android.+(KS(.+))\s+build/i],[s,[d,"Amazon"],[l,m]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[d,s,[l,m]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[l,f.lowerize],d,s],[/[\s\/\(](smart-?tv)[;\)]/i],[[l,w]],[/(android[\w\.\s\-]{0,9});.+build/i],[s,[d,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[c,[a,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[c,[a,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[a,c],[/rv\:([\w\.]{1,9}).+(gecko)/i],[c,a]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[a,c],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[a,[c,p.str,g.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[a,"Windows"],[c,p.str,g.os.windows.version]],[/\((bb)(10);/i],[[a,"BlackBerry"],c],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[a,c],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[a,"Symbian"],c],[/\((series40);/i],[a],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[a,"Firefox OS"],c],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[a,c],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[a,"Chromium OS"],c],[/(sunos)\s?([\w\.\d]*)/i],[[a,"Solaris"],c],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[a,c],[/(haiku)\s(\w+)/i],[a,c],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[c,/_/g,"."],[a,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[a,"Mac OS"],[c,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[a,c]]},v=function e(i,n){if("object"==typeof i&&(n=i,i=void 0),!(this instanceof e))return new e(i,n).getResult();var t=i||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),o=n?f.extend(h,n):h;return this.getBrowser=function(){var e={name:void 0,version:void 0};return p.rgx.call(e,t,o.browser),e.major=f.major(e.version),e},this.getCPU=function(){var e={architecture:void 0};return p.rgx.call(e,t,o.cpu),e},this.getDevice=function(){var e={vendor:void 0,model:void 0,type:void 0};return p.rgx.call(e,t,o.device),e},this.getEngine=function(){var e={name:void 0,version:void 0};return p.rgx.call(e,t,o.engine),e},this.getOS=function(){var e={name:void 0,version:void 0};return p.rgx.call(e,t,o.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return t},this.setUA=function(e){return t=e,this},this};v.VERSION="0.7.21",v.BROWSER={NAME:a,MAJOR:"major",VERSION:c},v.CPU={ARCHITECTURE:"architecture"},v.DEVICE={MODEL:s,VENDOR:d,TYPE:l,CONSOLE:"console",MOBILE:u,SMARTTV:w,TABLET:m,WEARABLE:"wearable",EMBEDDED:"embedded"},v.ENGINE={NAME:a,VERSION:c},v.OS={NAME:a,VERSION:c},void 0!==i?(void 0!==e&&e.exports&&(i=e.exports=v),i.UAParser=v):void 0===(t=function(){return v}.call(i,n,i,e))||(e.exports=t);var b=r&&(r.jQuery||r.Zepto);if(b&&!b.ua){var y=new v;b.ua=y.getResult(),b.ua.get=function(){return y.getUA()},b.ua.set=function(e){y.setUA(e);var i=y.getResult();for(var n in i)b.ua[n]=i[n]}}}("object"==typeof window?window:this)}}]);
//# sourceMappingURL=fab8c9364b01cebfd3503fc18011994750f493ff-2cc173e6b868cbad97ab.js.map