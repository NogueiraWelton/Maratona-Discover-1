(()=>{"use strict";var e={315:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(81),n=r.n(a),o=r(645),i=r.n(o)()(n());i.push([e.id,':root{--white: #ffffff;--black: #121212;--green:#49aa26;--light-green:#3dd705;--expense:#e92929}@media(prefers-color-scheme: light){:root{--main-font-color:#363f5f;--main-color: var(--white);--table-color: var(--white);--header-bg-color:#2d4a22;--bg-color: #f0f2f5}}@media(prefers-color-scheme: dark){:root{--main-font-color:#f0f2f5;--main-color: var(--black);--table-color: var(--black);--header-bg-color:#30215c;--bg-color: #1f1b24}}*{margin:0;padding:0;box-sizing:border-box;font-family:"Poppins",sans-serif}html{font-size:93.75%}@media(min-width: 800px){html{font-size:87.5%}}body{background:var(--bg-color)}label,small{display:block}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.container{width:min(90vw,800px);margin:auto}h2{color:var(--main-font-color);font-weight:normal;margin:3.2rem 0 .8rem 0}a{color:var(--green);text-decoration:none;transition:color .3s}a:hover{color:var(--light-green)}.button{display:inline-block;margin-bottom:.8rem}button{width:100%;height:3.125rem;border:none;border-radius:.25rem;color:var(--main-font-color);cursor:pointer}header{background:var(--header-bg-color);padding:2rem 0 10rem;text-align:center}header #header-container{display:grid;grid-template-columns:1fr;grid-template-areas:"logo" "toggle";gap:1rem}@media(min-width: 800px){header #header-container{grid-template-columns:repeat(3, 1fr);grid-template-areas:"null logo toggle"}}header #header-container #logo{grid-area:logo;justify-self:center}header #header-container #toggle-theme-button{color:var(--white);grid-row:2;width:fit-content;height:fit-content;grid-area:toggle;justify-self:center;background:none;border:2px solid var(--white);padding:.25rem;border-radius:.25rem;transition:background-color .3s,color .3s;cursor:pointer}@media(min-width: 800px){header #header-container #toggle-theme-button{justify-self:end}}header #header-container #toggle-theme-button:hover{background:var(--main-color);color:var(--main-font-color)}#balance{margin-top:-8rem}#balance h2{color:var(--white);margin-top:0}@media(min-width: 800px){#balance{display:flex;gap:2rem}}.card{color:var(--main-font-color);background:var(--main-color);border-radius:.25rem;box-shadow:0 .5rem 1rem rgba(0,0,0,.1);padding:1.5rem 2rem;margin-bottom:2rem;flex-basis:100%}.card h3{font-weight:normal;font-size:1rem;display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem}.card p{font-size:2rem;line-height:3rem}.card.total{color:var(--white);background:var(--green)}#table-container{overflow-x:auto}#table-container #data-table{width:100%;border-spacing:0 .5rem;color:var(--main-font-color)}#table-container #data-table tbody tr{opacity:.7}#table-container #data-table tr:hover{opacity:1}#table-container #data-table th,#table-container #data-table td{background-color:var(--table-color);padding:1rem 2rem}#table-container #data-table th:first-child,#table-container #data-table td:first-child{border-radius:.25rem 0 0 .25rem}#table-container #data-table th:last-child,#table-container #data-table td:last-child{border-radius:0 .25rem .25rem 0}#table-container #data-table th{font-weight:normal;text-align:left}#table-container #data-table td.description{color:var(--main-font-color)}#table-container #data-table td.income{color:var(--green)}#table-container #data-table td.expense{color:var(--expense)}#table-container #data-table td img[data-remove]{cursor:pointer}.modal-overlay{width:100%;height:100%;background-color:rgba(0,0,0,.7);position:fixed;top:0;display:flex;align-items:center;justify-content:center;opacity:0;visibility:hidden}.modal-overlay.modal--active{opacity:1;visibility:visible;z-index:1}.modal-overlay.modal--active>.modal{transform:scale3d(1, 1, 1)}.modal-overlay .modal{width:min(90vw,500px);background-color:var(--bg-color);padding:2.4rem;position:relative;z-index:2;transform:scale3d(0.7, 0.7, 1);transition:all .3s}.modal-overlay #form{max-width:500px}.modal-overlay #form h2{margin-top:0}.modal-overlay #form .form-group{margin-top:.8rem}.modal-overlay #form .form-group input{width:100%;border:none;border-radius:.2rem;padding:.8rem}.modal-overlay #form .form-group input:focus{outline:1px solid rgba(0,0,0,.2)}.modal-overlay #form .form-group small{color:var(--main-font-color);margin-top:.8rem;opacity:.4}.modal-overlay #form .form-group.actions{display:flex;justify-content:space-between;align-items:center}.modal-overlay #form .form-group.actions button{width:48%;transition:.3s}.modal-overlay #form .form-group.actions button:hover{opacity:.8}.modal-overlay #form .form-group.actions button.cancel{background:var(--expense);color:var(--white)}.modal-overlay #form .form-group.actions button.submit{background:var(--green);color:var(--white)}footer{text-align:center;padding:4rem 0 2rem;color:var(--main-font-color);opacity:.6}',""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",a=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),a&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),a&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,a,n,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);a&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,a=0;a<t.length;a++)if(t[a].identifier===e){r=a;break}return r}function a(e,a){for(var o={},i=[],c=0;c<e.length;c++){var l=e[c],s=a.base?l[0]+a.base:l[0],d=o[s]||0,u="".concat(s," ").concat(d);o[s]=d+1;var m=r(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)t[m].references++,t[m].updater(f);else{var p=n(f,a);a.byIndex=c,t.splice(c,0,{identifier:u,updater:p,references:1})}i.push(u)}return i}function n(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,n){var o=a(e=e||[],n=n||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=r(o[i]);t[c].references--}for(var l=a(e,n),s=0;s<o.length;s++){var d=r(o[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=l}}},569:e=>{var t={};e.exports=function(e,r){var a=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var a="";r.supports&&(a+="@supports (".concat(r.supports,") {")),r.media&&(a+="@media ".concat(r.media," {"));var n=void 0!==r.layer;n&&(a+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),a+=r.css,n&&(a+="}"),r.media&&(a+="}"),r.supports&&(a+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=r(379),t=r.n(e),a=r(795),n=r.n(a),o=r(569),i=r.n(o),c=r(565),l=r.n(c),s=r(216),d=r.n(s),u=r(589),m=r.n(u),f=r(315),p={};function h(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}p.styleTagTransform=m(),p.setAttributes=l(),p.insert=i().bind(null,"head"),p.domAPI=n(),p.insertStyleElement=d(),t()(f.Z,p),f.Z&&f.Z.locals&&f.Z.locals;var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.modal=document.querySelector(t),this.opBtn=document.querySelector(".new-transaction"),this.clBtn=this.modal.querySelector(".cancel"),this.toggleModal=this.toggleModal.bind(this)}var t,r;return t=e,(r=[{key:"toggleModal",value:function(e){e&&e.preventDefault(),this.modal.classList.toggle("modal--active")}},{key:"addModalEvents",value:function(){this.opBtn.addEventListener("click",this.toggleModal),this.clBtn.addEventListener("click",this.toggleModal)}},{key:"init",value:function(){return this.modal&&this.opBtn&&this.clBtn&&this.addModalEvents(),this}}])&&h(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e,t,r){return t&&g(e.prototype,t),r&&g(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var y=b((function e(t,r,a,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.description=t,this.amount=r,this.date=a,this.type=n})),w=function(e){return(e/100).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})};function x(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var T=function(){function e(t,r,a,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var o=localStorage.transactions;this.transactions=o?JSON.parse(o):[],this.form=document.querySelector(t),this.container=document.querySelector(r),this.modal=a,this.balance=n,this.setTransaction=this.setTransaction.bind(this)}var t,r,a;return t=e,a=[{key:"getTransaction",value:function(e){var t=e.target.elements,r=t.description,a=t.amount,n=t.date;return new y(r.value,a.value.replace(/[.,]/g,""),n.value,a.value>0?"income":"expense")}},{key:"setTemplate",value:function(e,t,r,a,n){return'\n      <td class="description">'.concat(e,'</td>\n      <td class="').concat(a,'">').concat(w(t),'</td>\n      <td class="date">').concat(r,'</td>\n      <td><img data-remove data-id="').concat(n,'" src="./assets/minus.svg" alt="Remover Transação"></td>\n    ')}}],(r=[{key:"saveTransaction",value:function(){localStorage.transactions=JSON.stringify(this.transactions)}},{key:"endForm",value:function(){this.modal.toggleModal(),this.form.reset()}},{key:"createTransaction",value:function(t,r){var a=this,n=t.description,o=t.amount,i=t.date,c=t.type,l=i.split("-"),s="".concat(l[2],"/").concat(l[1],"/").concat(l[0]),d=document.createElement("tr");d.innerHTML=e.setTemplate(n,o,s,c,r),this.container.appendChild(d),d.querySelector("img[data-remove]").addEventListener("click",(function(){a.removeTransaction(r)}))}},{key:"removeTransaction",value:function(e){this.transactions.splice(e,1),this.saveTransaction(),this.reloadTransactions()}},{key:"getTransactions",value:function(){var e=this;this.transactions.forEach((function(t,r){e.createTransaction(t,r)}))}},{key:"reloadTransactions",value:function(){this.container.innerHTML="",this.getTransactions(),this.balance.setBalance()}},{key:"setTransaction",value:function(t){t.preventDefault(),this.transactions.push(e.getTransaction(t)),this.saveTransaction(),this.endForm(),this.reloadTransactions()}},{key:"setTransactionEvent",value:function(){this.form.addEventListener("submit",this.setTransaction)}},{key:"init",value:function(){this.setTransactionEvent(),this.getTransactions()}}])&&x(t.prototype,r),a&&x(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var S=function(){function e(t,r,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.income=document.querySelector(t),this.expense=document.querySelector(r),this.total=document.querySelector(a)}var t,r,a;return t=e,a=[{key:"getIncomes",value:function(){var e=localStorage.transactions;return JSON.parse(e).reduce((function(e,t){return"income"===t.type?e+ +t.amount:e}),0)}},{key:"getExpenses",value:function(){var e=localStorage.transactions;return JSON.parse(e).reduce((function(e,t){return"expense"===t.type?e+ +t.amount:e}),0)}}],(r=[{key:"setBalance",value:function(){var t=e.getIncomes(),r=e.getExpenses(),a=t+r;this.income.textContent=w(t),this.expense.textContent=w(r),this.total.textContent=w(a)}},{key:"init",value:function(){return localStorage.transactions&&this.setBalance(),this}}])&&k(t.prototype,r),a&&k(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function j(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var O=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var r=window.document.styleSheets[1].cssRules[2].media.mediaText;this.mediaText=r,this.toggler=document.querySelector(t),this.toggleTheme=this.toggleTheme.bind(this)}var t,r,a;return t=e,a=[{key:"themeReplace",value:function(e,t){var r,a,n=(a=2,function(e){if(Array.isArray(e))return e}(r=t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,o=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(a=r.next()).done)&&(o.push(a.value),!t||o.length!==t);i=!0);}catch(e){c=!0,n=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw n}}return o}}(r,a)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?E(e,t):void 0}}(r,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];window.document.styleSheets[1].cssRules[2].media.mediaText=e.replace(o,i)}}],(r=[{key:"toggleTheme",value:function(){var t=["dark","light"];this.mediaText.match(/(?<=:\s)dark+/)?e.themeReplace(this.mediaText,t):e.themeReplace(this.mediaText,t.reverse()),this.reload()}},{key:"addToggleEvent",value:function(){this.toggler.addEventListener("click",this.toggleTheme)}},{key:"reload",value:function(){var e=window.document.styleSheets[1].cssRules[2].media.mediaText;this.mediaText=e}},{key:"init",value:function(){this.toggler&&this.addToggleEvent()}}])&&j(t.prototype,r),a&&j(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}(),M=new v('[data-modal="overlay"]');M.init();var C=new S('[data-display="income"]','[data-display="expense"]','[data-display="total"]');C.init(),new T("[data-form]",'[data-transactions="container"]',M,C).init(),new O("#toggle-theme-button").init()})()})();