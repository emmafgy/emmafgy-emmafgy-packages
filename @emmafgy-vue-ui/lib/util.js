!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var t=r();for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}("undefined"!=typeof self?self:this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=161)}({161:function(e,r,t){"use strict";function n(e){if(e||(e={key:"aaa|bbb|ccc|ddd|fff",title:"工号|薪资1|薪资2|薪资3|总工资",fixed:"left|--|--|--|right",width:"150|200|-|150|-"}),!e)throw new Error("columnsConfig 不能为空");if(!e.key)throw new Error("columnsConfig.key 不能为空");var r={};for(var t in e){var n=e[t];if(n){var o=n.split("|");r[t]=o}}for(var f=r.key.length,i=[],u=0;u<f;u++){var c={};for(var a in r){var l=r[a],s=l[u].trim().replace(/-/g,"");s&&(c[a]=s,"key"==a&&(c.dataIndex=s||""))}i.push(c)}return i}Object.defineProperty(r,"__esModule",{value:!0}),r.genColumns=n}})});