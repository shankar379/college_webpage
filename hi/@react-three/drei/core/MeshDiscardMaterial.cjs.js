"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@babel/runtime/helpers/extends"),r=require("react"),t=require("@react-three/fiber"),a=require("../materials/DiscardMaterial.cjs.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function c(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var a=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,a.get?a:{enumerable:!0,get:function(){return e[t]}})}})),r.default=e,Object.freeze(r)}require("./shaderMaterial.cjs.js"),require("three");var u=i(e),l=c(r);const n=l.forwardRef(((e,r)=>(t.extend({DiscardMaterialImpl:a.DiscardMaterial}),l.createElement("discardMaterialImpl",u.default({ref:r},e)))));exports.MeshDiscardMaterial=n;
