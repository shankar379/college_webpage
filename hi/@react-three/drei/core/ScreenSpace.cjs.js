"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@babel/runtime/helpers/extends"),r=require("react"),t=require("@react-three/fiber");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function u(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})}})),r.default=e,Object.freeze(r)}var c=n(e),o=u(r);const a=o.forwardRef((({children:e,depth:r=-1,...n},u)=>{const a=o.useRef(null);return o.useImperativeHandle(u,(()=>a.current),[]),t.useFrame((({camera:e})=>{a.current.quaternion.copy(e.quaternion),a.current.position.copy(e.position)})),o.createElement("group",c.default({ref:a},n),o.createElement("group",{"position-z":-r},e))}));exports.ScreenSpace=a;