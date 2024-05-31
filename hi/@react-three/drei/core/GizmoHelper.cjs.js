"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),r=require("@react-three/fiber"),t=require("three"),n=require("./OrthographicCamera.cjs.js"),u=require("./Hud.cjs.js");function o(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})}})),r.default=e,Object.freeze(r)}require("@babel/runtime/helpers/extends"),require("./useFBO.cjs.js");var i=o(e);const a=i.createContext({}),c=2*Math.PI,s=new t.Object3D,l=new t.Matrix4,[p,d]=[new t.Quaternion,new t.Quaternion],f=new t.Vector3,h=new t.Vector3;exports.GizmoHelper=({alignment:e="bottom-right",margin:o=[80,80],renderPriority:m=1,onUpdate:y,onTarget:g,children:b})=>{const j=r.useThree((e=>e.size)),w=r.useThree((e=>e.camera)),v=r.useThree((e=>e.controls)),q=r.useThree((e=>e.invalidate)),O=i.useRef(null),x=i.useRef(null),P=i.useRef(!1),T=i.useRef(0),C=i.useRef(new t.Vector3(0,0,0)),R=i.useRef(new t.Vector3(0,0,0));i.useEffect((()=>{R.current.copy(w.up)}),[w]);const E=i.useCallback((e=>{P.current=!0,(v||g)&&(C.current=(null==v?void 0:v.target)||(null==g?void 0:g())),T.current=w.position.distanceTo(f),p.copy(w.quaternion),h.copy(e).multiplyScalar(T.current).add(f),s.lookAt(h),s.up.copy(w.up),d.copy(s.quaternion),q()}),[v,w,g,q]);r.useFrame(((e,r)=>{if(x.current&&O.current){var t;if(P.current)if(p.angleTo(d)<.01)P.current=!1,"minPolarAngle"in v&&w.up.copy(R.current);else{const e=r*c;p.rotateTowards(d,e),w.position.set(0,0,1).applyQuaternion(p).multiplyScalar(T.current).add(C.current),w.up.set(0,1,0).applyQuaternion(p).normalize(),w.quaternion.copy(p),y?y():v&&v.update(),q()}l.copy(w.matrix).invert(),null==(t=O.current)||t.quaternion.setFromRotationMatrix(l)}}));const M=i.useMemo((()=>({tweenCamera:E})),[E]),[z,k]=o,Q=e.endsWith("-center")?0:e.endsWith("-left")?-j.width/2+z:j.width/2-z,V=e.startsWith("center-")?0:e.startsWith("top-")?j.height/2-k:-j.height/2+k;return i.createElement(u.Hud,{renderPriority:m},i.createElement(a.Provider,{value:M},i.createElement(n.OrthographicCamera,{makeDefault:!0,ref:x,position:[0,0,200]}),i.createElement("group",{ref:O,position:[Q,V,0]},b)))},exports.useGizmoContext=()=>i.useContext(a);
