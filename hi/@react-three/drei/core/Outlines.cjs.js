"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@babel/runtime/helpers/extends"),n=require("three"),t=require("react"),r=require("./shaderMaterial.cjs.js"),i=require("@react-three/fiber"),o=require("three-stdlib"),c=require("../helpers/constants.cjs.js");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var n=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}})),n.default=e,Object.freeze(n)}var l=s(e),u=a(n),d=a(t);const f=r.shaderMaterial({screenspace:!1,color:new u.Color("black"),opacity:1,thickness:.05,size:new u.Vector2},"#include <common>\n   #include <morphtarget_pars_vertex>\n   #include <skinning_pars_vertex>\n   uniform float thickness;\n   uniform float screenspace;\n   uniform vec2 size;\n   void main() {\n     #if defined (USE_SKINNING)\n\t     #include <beginnormal_vertex>\n       #include <morphnormal_vertex>\n       #include <skinbase_vertex>\n       #include <skinnormal_vertex>\n       #include <defaultnormal_vertex>\n     #endif\n     #include <begin_vertex>\n\t   #include <morphtarget_vertex>\n\t   #include <skinning_vertex>\n     #include <project_vertex>\n     vec4 tNormal = vec4(normal, 0.0);\n     vec4 tPosition = vec4(transformed, 1.0);\n     #ifdef USE_INSTANCING\n       tNormal = instanceMatrix * tNormal;\n       tPosition = instanceMatrix * tPosition;\n     #endif\n     if (screenspace == 0.0) {\n       vec3 newPosition = tPosition.xyz + tNormal.xyz * thickness;\n       gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0); \n     } else {\n       vec4 clipPosition = projectionMatrix * modelViewMatrix * tPosition;\n       vec4 clipNormal = projectionMatrix * modelViewMatrix * tNormal;\n       vec2 offset = normalize(clipNormal.xy) * thickness / size * clipPosition.w * 2.0;\n       clipPosition.xy += offset;\n       gl_Position = clipPosition;\n     }\n   }",`uniform vec3 color;\n   uniform float opacity;\n   void main(){\n     gl_FragColor = vec4(color, opacity);\n     #include <tonemapping_fragment>\n     #include <${c.version>=154?"colorspace_fragment":"encodings_fragment"}>\n   }`);exports.Outlines=function({color:e="black",opacity:n=1,transparent:t=!1,screenspace:r=!1,toneMapped:c=!0,polygonOffset:s=!1,polygonOffsetFactor:a=0,renderOrder:p=0,thickness:m=.05,angle:g=Math.PI,...v}){const x=d.useRef(),[y]=d.useState((()=>new f({side:u.BackSide}))),{gl:h}=i.useThree(),_=h.getDrawingBufferSize(new u.Vector2);d.useMemo((()=>i.extend({OutlinesMaterial:f})),[]);const M=d.useRef(0),b=d.useRef();return d.useLayoutEffect((()=>{const e=x.current;if(!e)return;const n=e.parent;if(n&&n.geometry&&(M.current!==g||b.current!==n.geometry)){var t;M.current=g,b.current=n.geometry;let r=null==(t=e.children)?void 0:t[0];r&&(g&&r.geometry.dispose(),e.remove(r)),n.skeleton?(r=new u.SkinnedMesh,r.material=y,r.bind(n.skeleton,n.bindMatrix),e.add(r)):n.isInstancedMesh?(r=new u.InstancedMesh(n.geometry,y,n.count),r.instanceMatrix=n.instanceMatrix,e.add(r)):(r=new u.Mesh,r.material=y,e.add(r)),r.geometry=g?o.toCreasedNormals(n.geometry,g):n.geometry}})),d.useLayoutEffect((()=>{const o=x.current;if(!o)return;const l=o.children[0];l&&(l.renderOrder=p,i.applyProps(l.material,{transparent:t,thickness:m,color:e,opacity:n,size:_,screenspace:r,toneMapped:c,polygonOffset:s,polygonOffsetFactor:a}))})),d.useEffect((()=>()=>{const e=x.current;if(!e)return;const n=e.children[0];n&&(g&&n.geometry.dispose(),e.remove(n))}),[]),d.createElement("group",l.default({ref:x},v))};
