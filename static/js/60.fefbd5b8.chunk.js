(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[60],{117:function(e,t,i){"use strict";i.r(t),i.d(t,"bds_switch",(function(){return o}));var s=i(7),r=0,o=function(){function e(e){var t=this;Object(s.r)(this,e),this.bdsChange=Object(s.c)(this,"bdsChange",7),this.size="standard",this.checked=!1,this.disabled=!1,this.dataTest=null,this.onClick=function(){t.checked=!t.checked},this.refNativeInput=function(e){t.nativeInput=e},this.getStyleState=function(){return t.checked&&!t.disabled?"slider--selected":t.checked||t.disabled?t.checked&&t.disabled?"slider--selected-disabled":!t.checked&&t.disabled?"slider--deselected-disabled":"":"slider--deselected"}}return e.prototype.connectedCallback=function(){this.switchId=this.refer||"bds-switch-".concat(r++)},e.prototype.checkedChanged=function(e){this.bdsChange.emit({checked:e})},e.prototype.getInputElement=function(){return Promise.resolve(this.nativeInput)},e.prototype.getValue=function(){return Promise.resolve(this.nativeInput.checked)},e.prototype.getSizeClass=function(){return"switch switch--size-".concat(this.size," ")},e.prototype.getSizeSliderClass=function(){return"slider slider--size-".concat(this.size," round ")},e.prototype.render=function(){var e,t,i=this.getSizeClass(),r=this.getSizeSliderClass(),o=this.getStyleState();return Object(s.h)("label",{class:(e={},e[i]=!0,e)},Object(s.h)("input",{type:"checkbox",ref:this.refNativeInput,id:this.switchId,name:this.name,onClick:this.onClick,checked:this.checked,disabled:this.disabled,"data-test":this.dataTest}),Object(s.h)("span",{class:(t={},t[r]=!0,t[o]=!0,t)}))},Object.defineProperty(e,"watchers",{get:function(){return{checked:["checkedChanged"]}},enumerable:!1,configurable:!0}),e}();o.style='.switch{position:relative;display:inline-block}.switch--size-tall{width:56px;height:32px}.switch--size-standard{width:42px;height:24px}.switch--size-short{width:32px;height:18px}.switch input{opacity:100;width:0;height:0}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#b9cbd3;-webkit-transition:0.4s;transition:0.4s;border-radius:34px}.slider--size-tall::before{position:absolute;content:" ";left:4px;bottom:4px;top:4px;background-color:#ffffff;-webkit-transition:0.4s;transition:0.4s;border-radius:50%;width:24px;height:24px}.slider--size-standard::before{position:absolute;content:" ";left:3px;bottom:3px;top:3px;background-color:#ffffff;-webkit-transition:0.4s;transition:0.4s;border-radius:50%;width:18px;height:18px}.slider--size-short::before{position:absolute;content:" ";left:2.25px;bottom:2.25px;top:2.25px;background-color:#ffffff;-webkit-transition:0.4s;transition:0.4s;border-radius:50%;width:13.5px;height:13.5px}.slider--deselected-disabled{cursor:not-allowed;background-color:#d2dfe6}input:checked+.slider{background-color:#3f7de8}input:checked+.slider--selected-disabled{cursor:not-allowed;background-color:#b3d4ff}input:focus+.slider{-webkit-box-shadow:0 0 1px #3f7de8;box-shadow:0 0 1px #3f7de8}input:focus+.slider--selected-disabled{-webkit-box-shadow:0 0 1px #b9cbd3;box-shadow:0 0 1px #b9cbd3}input:focus+.slider--deselected-disabled{-webkit-box-shadow:0 0 1px #d2dfe6;box-shadow:0 0 1px #d2dfe6}input:checked+.slider--size-tall::before{-webkit-transform:translateX(24px);-ms-transform:translateX(24px);transform:translateX(24px)}input:checked+.slider--size-standard::before{-webkit-transform:translateX(18px);-ms-transform:translateX(18px);transform:translateX(18px)}input:checked+.slider--size-short::before{-webkit-transform:translateX(13.75px);-ms-transform:translateX(13.75px);transform:translateX(13.75px)}'}}]);
//# sourceMappingURL=60.fefbd5b8.chunk.js.map