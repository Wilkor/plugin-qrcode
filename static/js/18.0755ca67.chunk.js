(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[18],{69:function(t,e,i){"use strict";i.r(e),i.d(e,"bds_autocomplete",(function(){return s}));var n=i(7),o=function(t,e,i,n){function o(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,r){function s(t){try{l(n.next(t))}catch(e){r(e)}}function a(t){try{l(n.throw(t))}catch(e){r(e)}}function l(t){t.done?i(t.value):o(t.value).then(s,a)}l((n=n.apply(t,e||[])).next())}))},r=function(t,e){var i,n,o,r,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(t){return function(e){return l([t,e])}}function l(r){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,n&&(o=2&r[0]?n.return:r[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,r[1])).done)return o;switch(n=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,n=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){s.label=r[1];break}if(6===r[0]&&s.label<o[1]){s.label=o[1],o=r;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(r);break}o[2]&&s.ops.pop(),s.trys.pop();continue}r=e.call(t,s)}catch(a){r=[6,a],n=0}finally{i=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},s=function(){function t(t){var e=this;Object(n.r)(this,t),this.bdsChange=Object(n.c)(this,"bdsChange",7),this.bdsSelectedChange=Object(n.c)(this,"bdsSelectedChange",7),this.bdsInput=Object(n.c)(this,"bdsInput",7),this.bdsCancel=Object(n.c)(this,"bdsCancel",7),this.bdsFocus=Object(n.c)(this,"bdsFocus",7),this.bdsBlur=Object(n.c)(this,"bdsBlur",7),this.isPressed=!1,this.isOpen=!1,this.text="",this.isFocused=!1,this.danger=!1,this.disabled=!1,this.searchOnlyTitle=!0,this.label="",this.icon="",this.placeholder="",this.optionsPosition="bottom",this.clearIconOnFocus=!1,this.dataTest=null,this.onFocus=function(){e.isFocused=!0,e.isPressed=!0,e.bdsFocus.emit()},this.onFocusout=function(){e.isOpen||(e.nativeInput.value=e.getText())},this.onBlur=function(){e.bdsBlur.emit(),e.isPressed=!1,e.isOpen||(e.isFocused=!1,e.nativeInput.value=e.getText())},this.onClickWrapper=function(){e.onFocus(),e.toggle(),e.nativeInput&&e.nativeInput.focus()},this.toggle=function(){e.disabled||(e.isOpen=!e.isOpen)},this.getTextFromOption=function(t){var i,n;if((null===t||void 0===t?void 0:t.status)||(null===t||void 0===t?void 0:t.bulkOption)){if(e.internalOptions){var o=e.internalOptions.find((function(e){return e.value==t.value}));if(o)return o.label}return t.querySelector("#bds-typo-label-".concat(e.value)).textContent}return(null===t||void 0===t?void 0:t.titleText)?t.titleText:null!==(n=null===(i=null===t||void 0===t?void 0:t.textContent)||void 0===i?void 0:i.trim())&&void 0!==n?n:""},this.getText=function(){var t=e.childOptions.find((function(t){return t.value==e.value}));return e.getTextFromOption(t)},this.handler=function(t){var i=t.detail.value;e.value=i,e.toggle()},this.keyPressWrapper=function(t){var i,n;switch(e.isOpen=!0,t.key){case"Enter":e.toggle();break;case"Tab":var o=e.findFocusedElementIndex();e.sliceInvisible(o+1)[0]||e.toggle();break;case"ArrowDown":var r=e.findFocusedElementIndex(),s=e.sliceInvisible(r+1)[0];null===(i=null===s||void 0===s?void 0:s.firstElementChild)||void 0===i||i.focus();break;case"ArrowUp":var a=e.findFocusedElementIndex(),l=e.childOptions.find((function(t){return!t.hasAttribute("invisible")}));if(e.childOptions[a]!=l){a=a>0?a:e.childOptions.length;var c=e.sliceInvisible(0,a),p=c[c.length-1];null===(n=null===p||void 0===p?void 0:p.firstElementChild)||void 0===n||n.focus()}}},this.cleanInputSelection=function(){return o(e,void 0,void 0,(function(){return r(this,(function(t){switch(t.label){case 0:return this.disabled?[3,2]:(this.value="",this.nativeInput.value="",this.isOpen=!1,[4,this.resetFilterOptions()]);case 1:t.sent(),t.label=2;case 2:return[2]}}))}))},this.changedInputValue=function(t){return o(e,void 0,void 0,(function(){var e;return r(this,(function(i){switch(i.label){case 0:return(e=t.target)&&(this.value=e.value||""),this.bdsInput.emit(t),this.bdsChange.emit({value:this.nativeInput.value}),this.nativeInput.value?[4,this.filterOptions(this.nativeInput.value)]:[3,2];case 1:return i.sent(),[3,5];case 2:return this.value="",this.isOpen?[4,this.resetFilterOptions()]:[3,4];case 3:return i.sent(),[3,5];case 4:this.setTimeoutFilter(),i.label=5;case 5:return!1===this.isOpen&&(this.value=this.getSelectedValue(),this.setTimeoutFilter()),[2]}}))}))}}return t.prototype.itemSelectedChanged=function(){this.bdsSelectedChange.emit(this.selected)},t.prototype.valueChanged=function(){this.bdsChange.emit({value:null==this.value?this.value:this.value.toString()});for(var t=0,e=this.childOptions;t<e.length;t++){var i=e[t];i.selected=this.value===i.value}this.selected=this.childOptionSelected,this.text=this.getText()},t.prototype.handleWindow=function(t){this.el.contains(t.target)||(this.isOpen=!1)},t.prototype.parseOptions=function(){if(this.options){this.resetFilterOptions();try{this.internalOptions="string"===typeof this.options?JSON.parse(this.options):this.options}catch(t){this.internalOptions=[]}}},t.prototype.componentWillLoad=function(){this.options&&this.parseOptions()},t.prototype.componentDidLoad=function(){if(!this.options)for(var t=0,e=this.childOptions;t<e.length;t++){var i=e[t];i.selected=this.value===i.value,i.addEventListener("optionSelected",this.handler)}this.text=this.getText()},Object.defineProperty(t.prototype,"childOptions",{get:function(){return this.options?Array.from(this.el.shadowRoot.querySelectorAll("bds-select-option")):Array.from(this.el.querySelectorAll("bds-select-option"))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"childOptionSelected",{get:function(){return this.options?Array.from(this.el.shadowRoot.querySelectorAll("bds-select-option")).find((function(t){return t.selected})):Array.from(this.el.querySelectorAll("bds-select-option")).find((function(t){return t.selected}))},enumerable:!1,configurable:!0}),t.prototype.sliceInvisible=function(t,e){return void 0===e&&(e=this.childOptions.length),this.childOptions.slice(t,e).filter((function(t){return!t.hasAttribute("invisible")}))},t.prototype.findFocusedElementIndex=function(){return this.childOptions.findIndex((function(t){return t.firstElementChild.matches(":focus")}))},t.prototype.setTimeoutFilter=function(){var t=this;setTimeout((function(){t.resetFilterOptions()}),500)},t.prototype.filterOptions=function(t){return o(this,void 0,void 0,(function(){var e,i,n,o,s;return r(this,(function(r){switch(r.label){case 0:return t?[3,2]:[4,this.resetFilterOptions()];case 1:r.sent(),r.label=2;case 2:for(e=0,i=this.childOptions;e<i.length;e++)n=i[e],o=this.searchOnlyTitle?this.getTextFromOption(n).toLowerCase():n.textContent.toLowerCase(),s=t.toLowerCase(),o.includes(s)?n.removeAttribute("invisible"):n.setAttribute("invisible","invisible");return[2]}}))}))},t.prototype.resetFilterOptions=function(){return o(this,void 0,void 0,(function(){var t,e,i;return r(this,(function(n){for(t=this.childOptions,e=0,i=t;e<i.length;e++)i[e].removeAttribute("invisible");return[2]}))}))},t.prototype.getSelectedValue=function(){var t;return null===(t=this.childOptionSelected)||void 0===t?void 0:t.value},t.prototype.renderIcon=function(){return this.icon&&Object(n.h)("div",{class:{input__icon:!0,"input__icon--large":!!this.label}},Object(n.h)("bds-icon",{size:this.label?"medium":"small",name:this.icon,color:"inherit"}))},t.prototype.renderLabel=function(){return this.label&&Object(n.h)("label",{class:{input__container__label:!0,"input__container__label--pressed":this.isPressed&&!this.disabled}},Object(n.h)("bds-typo",{variant:"fs-12",bold:"bold"},this.label))},t.prototype.render=function(){var t=this,e=this.isOpen?"arrow-up":"arrow-down";return Object(n.h)(n.H,{"aria-disabled":this.disabled?"true":null},Object(n.h)("div",{class:{input:!0,select:!0,"input--state-primary":!this.danger,"input--state-danger":this.danger,"input--state-disabled":this.disabled,"input--label":!!this.label,"input--pressed":this.isPressed},onClick:this.onClickWrapper,onKeyDown:this.keyPressWrapper},this.renderIcon(),Object(n.h)("div",{class:"input__container",tabindex:"0",onFocusout:this.onFocusout,onKeyDown:this.keyPressWrapper},this.renderLabel(),Object(n.h)("input",{class:{input__container__text:!0},ref:function(e){return t.nativeInput=e},disabled:this.disabled,onBlur:this.onBlur,onFocus:this.onFocus,onInput:this.changedInputValue,placeholder:this.placeholder,type:"text",value:this.text,"data-test":this.dataTest})),Object(n.h)("div",{class:"select__icon"},Object(n.h)("bds-icon",{size:"small",name:"error",theme:"solid",onClick:this.cleanInputSelection,class:{"icon-hidden":this.clearIconOnFocus&&(!this.isFocused||!this.isOpen)||!this.value}}),Object(n.h)("bds-icon",{size:"small",name:e,color:"inherit"}))),Object(n.h)("div",{class:{select__options:!0,"select__options--position-top":"top"===this.optionsPosition,"select__options--open":this.isOpen}},this.internalOptions?this.internalOptions.map((function(e,i){return Object(n.h)("bds-select-option",{onOptionSelected:t.handler,selected:t.value===e.value,value:e.value,key:i,bulkOption:e.bulkOption,status:e.status},e.label)})):Object(n.h)("slot",null)))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{selected:["itemSelectedChanged"],value:["valueChanged"],options:["parseOptions"]}},enumerable:!1,configurable:!0}),t}();s.style=':host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}:host input,:host textarea{-webkit-box-shadow:inherit;box-shadow:inherit}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:#b9cbd3;opacity:1}:host input::-moz-placeholder,:host textarea::-moz-placeholder{color:#b9cbd3;opacity:1}:host input:-ms-input-placeholder,:host textarea:-ms-input-placeholder{color:#b9cbd3;opacity:1}:host input::-ms-input-placeholder,:host textarea::-ms-input-placeholder{color:#b9cbd3;opacity:1}:host input::placeholder,:host textarea::placeholder{color:#b9cbd3;opacity:1}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:#b9cbd3;opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;background:#ffffff}.input--state-primary{border:1px solid #d2dfe6;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary:hover{border:1px solid #3f7de8;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid #3f7de8;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px rgba(63, 125, 232, 0.4);box-shadow:0 0 0 2px rgba(63, 125, 232, 0.4)}.input--state-primary .input__icon{color:#3f7de8;background-color:#e8f2ff}.input--state-primary .input__container__label{color:#8ca0b3}.input--state-primary .input__container__label--pressed{color:#3f7de8}.input--state-primary .input__container__text{caret-color:#3f7de8;color:#202c44}.input--state-danger{border:1px solid #ff4c4c;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger:hover{border:1px solid #ff4c4c;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid #ff4c4c;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px #ffa5a5;box-shadow:0 0 0 2px #ffa5a5}.input--state-danger .input__icon{color:#ff4c4c;background-color:#ffa5a5}.input--state-danger .input__container__label{color:#8ca0b3}.input--state-danger .input__container__label--pressed{color:#ff4c4c}.input--state-danger .input__container__text{caret-color:#ff4c4c;color:#202c44}.input--state-disabled{cursor:not-allowed;border:1px solid #e7edf4;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;background:#f3f6fa}.input--state-disabled:hover{border:1px solid #b9cbd3;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;border:1px solid #e7edf4;box-sizing:border-box;border-radius:8px}.input--state-disabled.input--pressed{border:1px solid #b9cbd3;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px #e7edf4;box-shadow:0 0 0 2px #e7edf4}.input--state-disabled .input__icon{color:#b9cbd3;background-color:#f8fbfb}.input--state-disabled .input__container__label{color:#b9cbd3}.input--state-disabled .input__container__label--pressed{color:#b9cbd3}.input--state-disabled .input__container__text{caret-color:#b9cbd3;color:#b9cbd3}.input--label{padding:7px 4px 8px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large{padding:4px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:"Nunito Sans", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem;line-height:150%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:#8ca0b3;word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger{color:#ff4c4c}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:"Nunito Sans", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem;line-height:150%;width:100%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text__chips{width:auto;min-width:216px;max-width:216px}:host{display:block}.select{position:relative;outline:none}.select__icon{color:#8ca0b3;display:-ms-flexbox;display:flex}.select__icon bds-icon{margin-left:10px}.select .icon-hidden{visibility:hidden}.select__options{background:#f8fbfb;width:100%;max-height:250px;position:absolute;top:99%;left:0;border-radius:8px;-webkit-box-shadow:0px 2px 8px rgba(96, 123, 153, 0.3);box-shadow:0px 2px 8px rgba(96, 123, 153, 0.3);overflow-y:auto;z-index:2;margin-top:4px;-webkit-transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleY(0);transform:scaleY(0);visibility:hidden;opacity:0;-webkit-box-shadow:0px 2px 12px 0 2px 8px rgba(96, 123, 153, 0.4);box-shadow:0px 2px 12px 0 2px 8px rgba(96, 123, 153, 0.4)}.select__options::-webkit-scrollbar{width:16px;background-color:transparent}.select__options::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.select__options--open{visibility:visible;-webkit-transform:scale(1);transform:scale(1);opacity:1}.select__options--position-top{top:auto;bottom:100%;-webkit-transform-origin:bottom left;transform-origin:bottom left}'}}]);