"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@babel/runtime/helpers/extends"),r=require("@react-three/fiber"),t=require("react"),i=require("three"),a=require("./AxisArrow.cjs.js"),n=require("./AxisRotator.cjs.js"),o=require("./PlaneSlider.cjs.js"),c=require("./ScalingSphere.cjs.js"),s=require("./context.cjs.js"),l=require("../../core/calculateScaleFactor.cjs.js");function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function d(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var i=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})}})),r.default=e,Object.freeze(r)}require("../../core/Line.cjs.js"),require("three-stdlib"),require("../Html.cjs.js"),require("react-dom/client");var x=u(e),m=d(t),p=d(i);const f=new p.Matrix4,y=new p.Matrix4,w=new p.Matrix4,g=new p.Matrix4,b=new p.Matrix4,j=new p.Matrix4,E=new p.Matrix4,S=new p.Matrix4,h=new p.Matrix4,v=new p.Box3,M=new p.Box3,A=new p.Vector3,q=new p.Vector3,R=new p.Vector3,V=new p.Vector3,P=new p.Vector3,W=new p.Vector3(1,0,0),D=new p.Vector3(0,1,0),C=new p.Vector3(0,0,1),L=m.forwardRef((({matrix:e,onDragStart:t,onDrag:i,onDragEnd:u,autoTransform:d=!0,anchor:L,disableAxes:O=!1,disableSliders:B=!1,disableRotations:F=!1,disableScaling:z=!1,activeAxes:T=[!0,!0,!0],offset:_=[0,0,0],rotation:k=[0,0,0],scale:H=1,lineWidth:I=4,fixed:U=!1,translationLimits:G,rotationLimits:J,scaleLimits:K,depthTest:N=!0,axisColors:Q=["#ff2060","#20df80","#2080ff"],hoveredColor:X="#ffff40",annotations:Y=!1,annotationsClass:Z,opacity:$=1,visible:ee=!0,userData:re,children:te,...ie},ae)=>{const ne=r.useThree((e=>e.invalidate)),oe=m.useRef(null),ce=m.useRef(null),se=m.useRef(null),le=m.useRef(null),ue=m.useRef([0,0,0]),de=m.useRef(new p.Vector3(1,1,1)),xe=m.useRef(new p.Vector3(1,1,1));m.useLayoutEffect((()=>{L&&(le.current.updateWorldMatrix(!0,!0),g.copy(le.current.matrixWorld).invert(),v.makeEmpty(),le.current.traverse((e=>{e.geometry&&(e.geometry.boundingBox||e.geometry.computeBoundingBox(),j.copy(e.matrixWorld).premultiply(g),M.copy(e.geometry.boundingBox),M.applyMatrix4(j),v.union(M))})),A.copy(v.max).add(v.min).multiplyScalar(.5),q.copy(v.max).sub(v.min).multiplyScalar(.5),R.copy(q).multiply(new p.Vector3(...L)).add(A),V.set(..._).add(R),se.current.position.copy(V),ne())}));const me=m.useMemo((()=>({onDragStart:e=>{f.copy(ce.current.matrix),y.copy(ce.current.matrixWorld),t&&t(e),ne()},onDrag:e=>{w.copy(oe.current.matrixWorld),g.copy(w).invert(),b.copy(y).premultiply(e),j.copy(b).premultiply(g),E.copy(f).invert(),S.copy(j).multiply(E),d&&ce.current.matrix.copy(j),i&&i(j,S,b,e),ne()},onDragEnd:()=>{u&&u(),ne()},translation:ue,translationLimits:G,rotationLimits:J,axisColors:Q,hoveredColor:X,opacity:$,scale:H,lineWidth:I,fixed:U,depthTest:N,userData:re,annotations:Y,annotationsClass:Z})),[t,i,u,ue,G,J,K,N,H,I,U,...Q,X,$,re,d,Y,Z]),pe=new p.Vector3;return r.useFrame((r=>{if(U){const e=l.calculateScaleFactor(se.current.getWorldPosition(pe),H,r.camera,r.size);de.current.setScalar(e)}e&&e instanceof p.Matrix4&&(ce.current.matrix=e),ce.current.updateWorldMatrix(!0,!0),h.makeRotationFromEuler(se.current.rotation).setPosition(se.current.position).premultiply(ce.current.matrixWorld),xe.current.setFromMatrixScale(h),P.copy(de.current).divide(xe.current),(Math.abs(se.current.scale.x-P.x)>1e-4||Math.abs(se.current.scale.y-P.y)>1e-4||Math.abs(se.current.scale.z-P.z)>1e-4)&&(se.current.scale.copy(P),r.invalidate())})),m.useImperativeHandle(ae,(()=>ce.current),[]),m.createElement(s.context.Provider,{value:me},m.createElement("group",{ref:oe},m.createElement("group",x.default({ref:ce,matrix:e,matrixAutoUpdate:!1},ie),m.createElement("group",{visible:ee,ref:se,position:_,rotation:k},!O&&T[0]&&m.createElement(a.AxisArrow,{axis:0,direction:W}),!O&&T[1]&&m.createElement(a.AxisArrow,{axis:1,direction:D}),!O&&T[2]&&m.createElement(a.AxisArrow,{axis:2,direction:C}),!B&&T[0]&&T[1]&&m.createElement(o.PlaneSlider,{axis:2,dir1:W,dir2:D}),!B&&T[0]&&T[2]&&m.createElement(o.PlaneSlider,{axis:1,dir1:C,dir2:W}),!B&&T[2]&&T[1]&&m.createElement(o.PlaneSlider,{axis:0,dir1:D,dir2:C}),!F&&T[0]&&T[1]&&m.createElement(n.AxisRotator,{axis:2,dir1:W,dir2:D}),!F&&T[0]&&T[2]&&m.createElement(n.AxisRotator,{axis:1,dir1:C,dir2:W}),!F&&T[2]&&T[1]&&m.createElement(n.AxisRotator,{axis:0,dir1:D,dir2:C}),!z&&T[0]&&m.createElement(c.ScalingSphere,{axis:0,direction:W}),!z&&T[1]&&m.createElement(c.ScalingSphere,{axis:1,direction:D}),!z&&T[2]&&m.createElement(c.ScalingSphere,{axis:2,direction:C})),m.createElement("group",{ref:le},te))))}));exports.PivotControls=L;