(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[31],{82:function(t,e,n){"use strict";n.r(e),n.d(e,"bds_counter_text",(function(){return c}));var i,o,r=n(7);(o=i||(i={})).Default="default",o.Warning="warning",o.Delete="delete";var c=function(){function t(t){Object(r.r)(this,t),this.active=!1,this.warning={max:20,min:2},this.delete={max:1,min:0}}return t.prototype.getState=function(){var t=this.getActualLength();return t>=this.warning.min&&t<=this.warning.max?i.Warning:t<=this.delete.max?i.Delete:i.Default},t.prototype.getActualLength=function(){return this.max-this.length},t.prototype.render=function(){var t,e=this.getState(),n=this.getActualLength();return Object(r.h)("div",{class:(t={"counter-text":!0,"counter-text--active":this.active},t["counter-text--".concat(e)]=!0,t)},Object(r.h)("bds-typo",{variant:"fs-10"},n))},t}();c.style=".counter-text{background:#f8fbfb;color:#8ca0b3;-webkit-box-sizing:content-box;box-sizing:content-box;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:11px;padding:0 8px;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.counter-text--active{background:#3f7de8;color:#f3f6fa}.counter-text--warning{background:#f6a721;color:#f3f6fa}.counter-text--delete{background:#ff4c4c;color:#f3f6fa}"}}]);