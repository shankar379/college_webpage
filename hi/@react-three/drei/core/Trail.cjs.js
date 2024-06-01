"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@react-three/fiber"),t=require("react"),r=require("three"),n=require("meshline");function o(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var i=o(t);const s={width:.2,length:1,decay:1,local:!1,stride:0,interval:1},c=(e,t=1)=>(e.set(e.subarray(t)),e.fill(-1/0,-t),e);function u(t,n){const{length:o,local:u,decay:l,interval:a,stride:f}={...s,...n},h=i.useRef(),[d]=i.useState((()=>new r.Vector3));i.useLayoutEffect((()=>{t&&(h.current=Float32Array.from({length:10*o*3},((e,r)=>t.position.getComponent(r%3))))}),[o,t]);const p=i.useRef(new r.Vector3),y=i.useRef(0);return e.useFrame((()=>{if(t&&h.current){if(0===y.current){let e;u?e=t.position:(t.getWorldPosition(d),e=d);const r=1*l;for(let t=0;t<r;t++)e.distanceTo(p.current)<f||(c(h.current,3),h.current.set(e.toArray(),h.current.length-3));p.current.copy(e)}y.current++,y.current=y.current%a}})),h}const l=i.forwardRef(((t,o)=>{const{children:c}=t,{width:l,length:a,decay:f,local:h,stride:d,interval:p}={...s,...t},{color:y="hotpink",attenuation:g,target:m}=t,v=e.useThree((e=>e.size)),b=e.useThree((e=>e.scene)),w=i.useRef(null),[M,j]=i.useState(null),O=u(M,{length:a,decay:f,local:h,stride:d,interval:p});i.useEffect((()=>{const e=(null==m?void 0:m.current)||w.current.children.find((e=>e instanceof r.Object3D));e&&j(e)}),[O,m]);const E=i.useMemo((()=>new n.MeshLineGeometry),[]),P=i.useMemo((()=>{var e;const t=new n.MeshLineMaterial({lineWidth:.1*l,color:y,sizeAttenuation:1,resolution:new r.Vector2(v.width,v.height)});let o;if(c)if(Array.isArray(c))o=c.find((e=>{const t=e;return"string"==typeof t.type&&"meshLineMaterial"===t.type}));else{const e=c;"string"==typeof e.type&&"meshLineMaterial"===e.type&&(o=e)}return"object"==typeof(null==(e=o)?void 0:e.props)&&t.setValues(o.props),t}),[l,y,v,c]);return i.useEffect((()=>{P.uniforms.resolution.value.set(v.width,v.height)}),[v]),e.useFrame((()=>{O.current&&E.setPoints(O.current,g)})),i.createElement("group",null,e.createPortal(i.createElement("mesh",{ref:o,geometry:E,material:P}),b),i.createElement("group",{ref:w},c))}));exports.Trail=l,exports.useTrail=u;
