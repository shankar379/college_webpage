"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@babel/runtime/helpers/extends"),t=require("react"),r=require("three");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function n(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var s=o(e),u=n(t),a=n(r);function c(e,t){const r=e+"Geometry";return u.forwardRef((({args:e,children:o,...n},a)=>{const c=u.useRef(null);return u.useImperativeHandle(a,(()=>c.current)),u.useLayoutEffect((()=>{null==t||t(c.current)})),u.createElement("mesh",s.default({ref:c},n),u.createElement(r,{attach:"geometry",args:e}),o)}))}const p=c("box"),l=c("circle"),i=c("cone"),d=c("cylinder"),f=c("sphere"),x=c("plane"),h=c("tube"),b=c("torus"),y=c("torusKnot"),g=c("tetrahedron"),m=c("ring"),O=c("polyhedron"),j=c("icosahedron"),v=c("octahedron"),w=c("dodecahedron"),E=c("extrude"),P=c("lathe"),B=c("capsule"),C=c("shape",(({geometry:e})=>{const t=e.attributes.position,r=(new a.Box3).setFromBufferAttribute(t),o=new a.Vector3;r.getSize(o);const n=[];let s=0,u=0,c=0,p=0;for(let e=0;e<t.count;e++)s=t.getX(e),u=t.getY(e),c=(s-r.min.x)/o.x,p=(u-r.min.y)/o.y,n.push(c,p);e.setAttribute("uv",new a.Float32BufferAttribute(n,2))}));exports.Box=p,exports.Capsule=B,exports.Circle=l,exports.Cone=i,exports.Cylinder=d,exports.Dodecahedron=w,exports.Extrude=E,exports.Icosahedron=j,exports.Lathe=P,exports.Octahedron=v,exports.Plane=x,exports.Polyhedron=O,exports.Ring=m,exports.Shape=C,exports.Sphere=f,exports.Tetrahedron=g,exports.Torus=b,exports.TorusKnot=y,exports.Tube=h;
