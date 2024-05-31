"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@babel/runtime/helpers/extends"),t=require("three"),r=require("react"),a=require("@react-three/fiber"),i=require("./shaderMaterial.cjs.js"),s=require("../materials/DiscardMaterial.cjs.js"),n=require("../helpers/constants.cjs.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function l(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var a=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var h=o(e),c=l(t),u=l(r);const d=u.createContext(null),p=i.shaderMaterial({color:new c.Color,blend:2,alphaTest:.75,opacity:0,map:null},"varying vec2 vUv;\n   void main() {\n     gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.);\n     vUv = uv;\n   }",`varying vec2 vUv;\n   uniform sampler2D map;\n   uniform vec3 color;\n   uniform float opacity;\n   uniform float alphaTest;\n   uniform float blend;\n   void main() {\n     vec4 sampledDiffuseColor = texture2D(map, vUv);\n     gl_FragColor = vec4(color * sampledDiffuseColor.r * blend, max(0.0, (1.0 - (sampledDiffuseColor.r + sampledDiffuseColor.g + sampledDiffuseColor.b) / alphaTest)) * opacity);\n     #include <tonemapping_fragment>\n     #include <${n.version>=154?"colorspace_fragment":"encodings_fragment"}>\n   }`),f=u.forwardRef((({children:e,temporal:t,frames:r=40,limit:i=1/0,blend:s=20,scale:n=10,opacity:o=1,alphaTest:l=.75,color:h="black",colorBlend:c=2,resolution:f=1024,toneMapped:g=!0,...v},M)=>{a.extend({SoftShadowMaterial:p});const b=a.useThree((e=>e.gl)),w=a.useThree((e=>e.scene)),y=a.useThree((e=>e.camera)),x=a.useThree((e=>e.invalidate)),C=u.useRef(null),S=u.useRef(null),[j]=u.useState((()=>new m(b,w,f)));u.useLayoutEffect((()=>{j.configure(C.current)}),[]);const T=u.useMemo((()=>({lights:new Map,temporal:!!t,frames:Math.max(2,r),blend:Math.max(2,r===1/0?s:r),count:0,getMesh:()=>C.current,reset:()=>{j.clear();const e=C.current.material;e.opacity=0,e.alphaTest=0,T.count=0},update:(e=1)=>{const t=C.current.material;T.temporal?(t.opacity=Math.min(o,t.opacity+o/T.blend),t.alphaTest=Math.min(l,t.alphaTest+l/T.blend)):(t.opacity=o,t.alphaTest=l),S.current.visible=!0,j.prepare();for(let t=0;t<e;t++)T.lights.forEach((e=>e.update())),j.update(y,T.blend);S.current.visible=!1,j.finish()}})),[j,y,w,t,r,s,o,l]);return u.useLayoutEffect((()=>{T.reset(),T.temporal||T.frames===1/0||T.update(T.blend)})),u.useImperativeHandle(M,(()=>T),[T]),a.useFrame((()=>{(T.temporal||T.frames===1/0)&&T.count<T.frames&&T.count<i&&(x(),T.update(),T.count++)})),u.createElement("group",v,u.createElement("group",{traverse:()=>null,ref:S},u.createElement(d.Provider,{value:T},e)),u.createElement("mesh",{receiveShadow:!0,ref:C,scale:n,rotation:[-Math.PI/2,0,0]},u.createElement("planeGeometry",null),u.createElement("softShadowMaterial",{transparent:!0,depthWrite:!1,toneMapped:g,color:h,blend:c,map:j.progressiveLightMap2.texture})))})),g=u.forwardRef((({castShadow:e=!0,bias:t=.001,mapSize:r=512,size:a=5,near:i=.5,far:s=500,frames:o=1,position:l=[0,0,0],radius:p=1,amount:f=8,intensity:g=(n.version>=155?Math.PI:1),ambient:m=.5,...v},M)=>{const b=u.useRef(null),w=new c.Vector3(...l).length(),y=u.useContext(d),x=u.useCallback((()=>{let e;if(b.current)for(let t=0;t<b.current.children.length;t++)if(e=b.current.children[t],Math.random()>m)e.position.set(l[0]+c.MathUtils.randFloatSpread(p),l[1]+c.MathUtils.randFloatSpread(p),l[2]+c.MathUtils.randFloatSpread(p));else{let t=Math.acos(2*Math.random()-1)-Math.PI/2,r=2*Math.PI*Math.random();e.position.set(Math.cos(t)*Math.cos(r)*w,Math.abs(Math.cos(t)*Math.sin(r)*w),Math.sin(t)*w)}}),[p,m,w,...l]),C=u.useMemo((()=>({update:x})),[x]);return u.useImperativeHandle(M,(()=>C),[C]),u.useLayoutEffect((()=>{var e;const t=b.current;return y&&(null==(e=y.lights)||e.set(t.uuid,C)),()=>{var e;null==y||null==(e=y.lights)||e.delete(t.uuid)}}),[y,C]),u.createElement("group",h.default({ref:b},v),Array.from({length:f},((n,o)=>u.createElement("directionalLight",{key:o,castShadow:e,"shadow-bias":t,"shadow-mapSize":[r,r],intensity:g/f},u.createElement("orthographicCamera",{attach:"shadow-camera",args:[-a,a,a,-a,i,s]})))))}));class m{constructor(e,t,r=1024){this.renderer=e,this.res=r,this.scene=t,this.buffer1Active=!1,this.lights=[],this.meshes=[],this.object=null,this.clearColor=new c.Color,this.clearAlpha=0;const a={type:c.HalfFloatType,magFilter:c.NearestFilter,minFilter:c.NearestFilter};this.progressiveLightMap1=new c.WebGLRenderTarget(this.res,this.res,a),this.progressiveLightMap2=new c.WebGLRenderTarget(this.res,this.res,a),this.discardMat=new s.DiscardMaterial,this.targetMat=new c.MeshLambertMaterial({fog:!1}),this.previousShadowMap={value:this.progressiveLightMap1.texture},this.averagingWindow={value:100},this.targetMat.onBeforeCompile=e=>{e.vertexShader="varying vec2 vUv;\n"+e.vertexShader.slice(0,-1)+"vUv = uv; gl_Position = vec4((uv - 0.5) * 2.0, 1.0, 1.0); }";const t=e.fragmentShader.indexOf("void main() {");e.fragmentShader="varying vec2 vUv;\n"+e.fragmentShader.slice(0,t)+"uniform sampler2D previousShadowMap;\n\tuniform float averagingWindow;\n"+e.fragmentShader.slice(t-1,-1)+"\nvec3 texelOld = texture2D(previousShadowMap, vUv).rgb;\n        gl_FragColor.rgb = mix(texelOld, gl_FragColor.rgb, 1.0/ averagingWindow);\n      }",e.uniforms.previousShadowMap=this.previousShadowMap,e.uniforms.averagingWindow=this.averagingWindow}}clear(){this.renderer.getClearColor(this.clearColor),this.clearAlpha=this.renderer.getClearAlpha(),this.renderer.setClearColor("black",1),this.renderer.setRenderTarget(this.progressiveLightMap1),this.renderer.clear(),this.renderer.setRenderTarget(this.progressiveLightMap2),this.renderer.clear(),this.renderer.setRenderTarget(null),this.renderer.setClearColor(this.clearColor,this.clearAlpha),this.lights=[],this.meshes=[],this.scene.traverse((e=>{!function(e){return!!e.geometry}(e)?function(e){return e.isLight}(e)&&this.lights.push({object:e,intensity:e.intensity}):this.meshes.push({object:e,material:e.material})}))}prepare(){this.lights.forEach((e=>e.object.intensity=0)),this.meshes.forEach((e=>e.object.material=this.discardMat))}finish(){this.lights.forEach((e=>e.object.intensity=e.intensity)),this.meshes.forEach((e=>e.object.material=e.material))}configure(e){this.object=e}update(e,t=100){if(!this.object)return;this.averagingWindow.value=t,this.object.material=this.targetMat;const r=this.buffer1Active?this.progressiveLightMap1:this.progressiveLightMap2,a=this.buffer1Active?this.progressiveLightMap2:this.progressiveLightMap1,i=this.scene.background;this.scene.background=null,this.renderer.setRenderTarget(r),this.previousShadowMap.value=a.texture,this.buffer1Active=!this.buffer1Active,this.renderer.render(this.scene,e),this.renderer.setRenderTarget(null),this.scene.background=i}}exports.AccumulativeShadows=f,exports.RandomizedLight=g,exports.accumulativeContext=d;