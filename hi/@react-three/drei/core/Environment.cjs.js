"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@babel/runtime/helpers/extends"),n=require("react"),t=require("@react-three/fiber"),r=require("three"),o=require("three-stdlib"),u=require("./useEnvironment.cjs.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var n=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}})),n.default=e,Object.freeze(n)}require("@monogrid/gainmap-js"),require("../helpers/environment-assets.cjs.js"),require("../helpers/deprecated.cjs.js");var c=a(e),s=i(n);const l=e=>{return(n=e).current&&n.current.isScene?e.current:e;var n};function d(e,n,r,o,u={}){var a,i,c,s,d;u={backgroundBlurriness:null!==(a=u.blur)&&void 0!==a?a:0,backgroundIntensity:1,backgroundRotation:[0,0,0],environmentIntensity:1,environmentRotation:[0,0,0],...u};const m=l(n||r),b=m.background,g=m.environment,v={backgroundBlurriness:m.backgroundBlurriness,backgroundIntensity:m.backgroundIntensity,backgroundRotation:null!==(i=null==(c=m.backgroundRotation)||null==c.clone?void 0:c.clone())&&void 0!==i?i:[0,0,0],environmentIntensity:m.environmentIntensity,environmentRotation:null!==(s=null==(d=m.environmentRotation)||null==d.clone?void 0:d.clone())&&void 0!==s?s:[0,0,0]};return"only"!==e&&(m.environment=o),e&&(m.background=o),t.applyProps(m,u),()=>{"only"!==e&&(m.environment=g),e&&(m.background=b),t.applyProps(m,v)}}function m({scene:e,background:n=!1,map:r,...o}){const u=t.useThree((e=>e.scene));return s.useLayoutEffect((()=>{if(r)return d(n,e,u,r,o)})),null}function b({background:e=!1,scene:n,blur:r,backgroundBlurriness:o,backgroundIntensity:a,backgroundRotation:i,environmentIntensity:c,environmentRotation:l,...m}){const b=u.useEnvironment(m),g=t.useThree((e=>e.scene));return s.useLayoutEffect((()=>d(e,n,g,b,{blur:r,backgroundBlurriness:o,backgroundIntensity:a,backgroundRotation:i,environmentIntensity:c,environmentRotation:l}))),null}function g({children:e,near:n=1,far:o=1e3,resolution:u=256,frames:a=1,map:i,background:c=!1,blur:l,backgroundBlurriness:g,backgroundIntensity:v,backgroundRotation:p,environmentIntensity:f,environmentRotation:k,scene:y,files:E,path:h,preset:j,extensions:I}){const R=t.useThree((e=>e.gl)),x=t.useThree((e=>e.scene)),P=s.useRef(null),[q]=s.useState((()=>new r.Scene)),B=s.useMemo((()=>{const e=new r.WebGLCubeRenderTarget(u);return e.texture.type=r.HalfFloatType,e}),[u]);s.useLayoutEffect((()=>(1===a&&P.current.update(R,q),d(c,y,x,B.texture,{blur:l,backgroundBlurriness:g,backgroundIntensity:v,backgroundRotation:p,environmentIntensity:f,environmentRotation:k}))),[e,q,B.texture,y,x,c,a,R]);let O=1;return t.useFrame((()=>{(a===1/0||O<a)&&(P.current.update(R,q),O++)})),s.createElement(s.Fragment,null,t.createPortal(s.createElement(s.Fragment,null,e,s.createElement("cubeCamera",{ref:P,args:[n,o,B]}),E||j?s.createElement(b,{background:!0,files:E,preset:j,path:h,extensions:I}):i?s.createElement(m,{background:!0,map:i,extensions:I}):null),q))}function v(e){var n,r,a,i;const l=u.useEnvironment(e),d=e.map||l;s.useMemo((()=>t.extend({GroundProjectedEnvImpl:o.GroundProjectedEnv})),[]);const b=s.useMemo((()=>[d]),[d]),g=null==(n=e.ground)?void 0:n.height,v=null==(r=e.ground)?void 0:r.radius,p=null!==(a=null==(i=e.ground)?void 0:i.scale)&&void 0!==a?a:1e3;return s.createElement(s.Fragment,null,s.createElement(m,c.default({},e,{map:d})),s.createElement("groundProjectedEnvImpl",{args:b,scale:p,height:g,radius:v}))}exports.Environment=function(e){return e.ground?s.createElement(v,e):e.map?s.createElement(m,e):e.children?s.createElement(g,e):s.createElement(b,e)},exports.EnvironmentCube=b,exports.EnvironmentMap=m,exports.EnvironmentPortal=g;