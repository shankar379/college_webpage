"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@babel/runtime/helpers/extends"),r=require("three"),t=require("react"),n=require("@react-three/fiber"),o=require("./useFBO.cjs.js"),i=require("./useHelper.cjs.js"),a=require("./shaderMaterial.cjs.js"),l=require("./Edges.cjs.js"),c=require("three-stdlib"),s=require("../helpers/constants.cjs.js");function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function d(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})}})),r.default=e,Object.freeze(r)}require("./Line.cjs.js");var m=u(e),p=d(r),v=d(t);function f(e=p.FrontSide){const r={value:new p.Matrix4};return Object.assign(new p.MeshNormalMaterial({side:e}),{viewMatrix:r,onBeforeCompile:e=>{e.uniforms.viewMatrix=r,e.fragmentShader="vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n           return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n         }\n"+e.fragmentShader.replace("#include <normal_fragment_maps>","#include <normal_fragment_maps>\n           normal = inverseTransformDirection( normal, viewMatrix );\n")}})}const x=a.shaderMaterial({causticsTexture:null,causticsTextureB:null,color:new p.Color,lightProjMatrix:new p.Matrix4,lightViewMatrix:new p.Matrix4},"varying vec3 vWorldPosition;\n   void main() {\n     gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.);\n     vec4 worldPosition = modelMatrix * vec4(position, 1.);\n     vWorldPosition = worldPosition.xyz;\n   }",`varying vec3 vWorldPosition;\n  uniform vec3 color;\n  uniform sampler2D causticsTexture;\n  uniform sampler2D causticsTextureB;\n  uniform mat4 lightProjMatrix;\n  uniform mat4 lightViewMatrix;\n   void main() {\n    // Apply caustics\n    vec4 lightSpacePos = lightProjMatrix * lightViewMatrix * vec4(vWorldPosition, 1.0);\n    lightSpacePos.xyz /= lightSpacePos.w;\n    lightSpacePos.xyz = lightSpacePos.xyz * 0.5 + 0.5;\n    vec3 front = texture2D(causticsTexture, lightSpacePos.xy).rgb;\n    vec3 back = texture2D(causticsTextureB, lightSpacePos.xy).rgb;\n    gl_FragColor = vec4((front + back) * color, 1.0);\n    #include <tonemapping_fragment>\n    #include <${s.version>=154?"colorspace_fragment":"encodings_fragment"}>\n   }`),h=a.shaderMaterial({cameraMatrixWorld:new p.Matrix4,cameraProjectionMatrixInv:new p.Matrix4,normalTexture:null,depthTexture:null,lightDir:new p.Vector3(0,1,0),lightPlaneNormal:new p.Vector3(0,1,0),lightPlaneConstant:0,near:.1,far:100,modelMatrix:new p.Matrix4,worldRadius:1/40,ior:1.1,bounces:0,resolution:1024,size:10,intensity:.5},"\n  varying vec2 vUv;\n  void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  }","\n  uniform mat4 cameraMatrixWorld;\n  uniform mat4 cameraProjectionMatrixInv;\n  uniform vec3 lightDir;\n  uniform vec3 lightPlaneNormal;\n  uniform float lightPlaneConstant;\n  uniform float near;\n  uniform float far;\n  uniform float time;\n  uniform float worldRadius;\n  uniform float resolution;\n  uniform float size;\n  uniform float intensity;\n  uniform float ior;\n  precision highp isampler2D;\n  precision highp usampler2D;\n  uniform sampler2D normalTexture;\n  uniform sampler2D depthTexture;\n  uniform float bounces;\n  varying vec2 vUv;\n  vec3 WorldPosFromDepth(float depth, vec2 coord) {\n    float z = depth * 2.0 - 1.0;\n    vec4 clipSpacePosition = vec4(coord * 2.0 - 1.0, z, 1.0);\n    vec4 viewSpacePosition = cameraProjectionMatrixInv * clipSpacePosition;\n    // Perspective division\n    viewSpacePosition /= viewSpacePosition.w;\n    vec4 worldSpacePosition = cameraMatrixWorld * viewSpacePosition;\n    return worldSpacePosition.xyz;\n  }\n  float sdPlane( vec3 p, vec3 n, float h ) {\n    // n must be normalized\n    return dot(p,n) + h;\n  }\n  float planeIntersect( vec3 ro, vec3 rd, vec4 p ) {\n    return -(dot(ro,p.xyz)+p.w)/dot(rd,p.xyz);\n  }\n  vec3 totalInternalReflection(vec3 ro, vec3 rd, vec3 pos, vec3 normal, float ior, out vec3 rayOrigin, out vec3 rayDirection) {\n    rayOrigin = ro;\n    rayDirection = rd;\n    rayDirection = refract(rayDirection, normal, 1.0 / ior);\n    rayOrigin = pos + rayDirection * 0.1;\n    return rayDirection;\n  }\n  void main() {\n    // Each sample consists of random offset in the x and y direction\n    float caustic = 0.0;\n    float causticTexelSize = (1.0 / resolution) * size * 2.0;\n    float texelsNeeded = worldRadius / causticTexelSize;\n    float sampleRadius = texelsNeeded / resolution;\n    float sum = 0.0;\n    if (texture2D(depthTexture, vUv).x == 1.0) {\n      gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n      return;\n    }\n    vec2 offset1 = vec2(-0.5, -0.5);//vec2(rand() - 0.5, rand() - 0.5);\n    vec2 offset2 = vec2(-0.5, 0.5);//vec2(rand() - 0.5, rand() - 0.5);\n    vec2 offset3 = vec2(0.5, 0.5);//vec2(rand() - 0.5, rand() - 0.5);\n    vec2 offset4 = vec2(0.5, -0.5);//vec2(rand() - 0.5, rand() - 0.5);\n    vec2 uv1 = vUv + offset1 * sampleRadius;\n    vec2 uv2 = vUv + offset2 * sampleRadius;\n    vec2 uv3 = vUv + offset3 * sampleRadius;\n    vec2 uv4 = vUv + offset4 * sampleRadius;\n    vec3 normal1 = texture2D(normalTexture, uv1, -10.0).rgb * 2.0 - 1.0;\n    vec3 normal2 = texture2D(normalTexture, uv2, -10.0).rgb * 2.0 - 1.0;\n    vec3 normal3 = texture2D(normalTexture, uv3, -10.0).rgb * 2.0 - 1.0;\n    vec3 normal4 = texture2D(normalTexture, uv4, -10.0).rgb * 2.0 - 1.0;\n    float depth1 = texture2D(depthTexture, uv1, -10.0).x;\n    float depth2 = texture2D(depthTexture, uv2, -10.0).x;\n    float depth3 = texture2D(depthTexture, uv3, -10.0).x;\n    float depth4 = texture2D(depthTexture, uv4, -10.0).x;\n    // Sanity check the depths\n    if (depth1 == 1.0 || depth2 == 1.0 || depth3 == 1.0 || depth4 == 1.0) {\n      gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n      return;\n    }\n    vec3 pos1 = WorldPosFromDepth(depth1, uv1);\n    vec3 pos2 = WorldPosFromDepth(depth2, uv2);\n    vec3 pos3 = WorldPosFromDepth(depth3, uv3);\n    vec3 pos4 = WorldPosFromDepth(depth4, uv4);\n    vec3 originPos1 = WorldPosFromDepth(0.0, uv1);\n    vec3 originPos2 = WorldPosFromDepth(0.0, uv2);\n    vec3 originPos3 = WorldPosFromDepth(0.0, uv3);\n    vec3 originPos4 = WorldPosFromDepth(0.0, uv4);\n    vec3 endPos1, endPos2, endPos3, endPos4;\n    vec3 endDir1, endDir2, endDir3, endDir4;\n    totalInternalReflection(originPos1, lightDir, pos1, normal1, ior, endPos1, endDir1);\n    totalInternalReflection(originPos2, lightDir, pos2, normal2, ior, endPos2, endDir2);\n    totalInternalReflection(originPos3, lightDir, pos3, normal3, ior, endPos3, endDir3);\n    totalInternalReflection(originPos4, lightDir, pos4, normal4, ior, endPos4, endDir4);\n    float lightPosArea = length(cross(originPos2 - originPos1, originPos3 - originPos1)) + length(cross(originPos3 - originPos1, originPos4 - originPos1));\n    float t1 = planeIntersect(endPos1, endDir1, vec4(lightPlaneNormal, lightPlaneConstant));\n    float t2 = planeIntersect(endPos2, endDir2, vec4(lightPlaneNormal, lightPlaneConstant));\n    float t3 = planeIntersect(endPos3, endDir3, vec4(lightPlaneNormal, lightPlaneConstant));\n    float t4 = planeIntersect(endPos4, endDir4, vec4(lightPlaneNormal, lightPlaneConstant));\n    vec3 finalPos1 = endPos1 + endDir1 * t1;\n    vec3 finalPos2 = endPos2 + endDir2 * t2;\n    vec3 finalPos3 = endPos3 + endDir3 * t3;\n    vec3 finalPos4 = endPos4 + endDir4 * t4;\n    float finalArea = length(cross(finalPos2 - finalPos1, finalPos3 - finalPos1)) + length(cross(finalPos3 - finalPos1, finalPos4 - finalPos1));\n    caustic += intensity * (lightPosArea / finalArea);\n    // Calculate the area of the triangle in light spaces\n    gl_FragColor = vec4(vec3(max(caustic, 0.0)), 1.0);\n  }"),g={depth:!0,minFilter:p.LinearFilter,magFilter:p.LinearFilter,type:p.UnsignedByteType},P={minFilter:p.LinearMipmapLinearFilter,magFilter:p.LinearFilter,type:p.FloatType,generateMipmaps:!0},y=v.forwardRef((({debug:e,children:r,frames:t=1,ior:a=1.1,color:s="white",causticsOnly:u=!1,backside:d=!1,backsideIOR:y=1.1,worldRadius:M=.3125,intensity:D=.05,resolution:w=2024,lightSource:T=[5,5,5],...j},S)=>{n.extend({CausticsProjectionMaterial:x});const b=v.useRef(null),F=v.useRef(null),z=v.useRef(null),W=v.useRef(null),R=n.useThree((e=>e.gl)),I=i.useHelper(e&&F,p.CameraHelper),O=o.useFBO(w,w,g),C=o.useFBO(w,w,g),_=o.useFBO(w,w,P),V=o.useFBO(w,w,P),[B]=v.useState((()=>f())),[E]=v.useState((()=>f(p.BackSide))),[q]=v.useState((()=>new h)),[A]=v.useState((()=>new c.FullScreenQuad(q)));v.useLayoutEffect((()=>{b.current.updateWorldMatrix(!1,!0)}));let N=0;const k=new p.Vector3,U=new p.Frustum,L=new p.Matrix4,H=new p.Plane,G=new p.Vector3,Q=new p.Vector3,$=new p.Box3,J=new p.Vector3,K=[],X=[],Y=[],Z=[],ee=new p.Vector3;for(let e=0;e<8;e++)K.push(new p.Vector3),X.push(new p.Vector3),Y.push(new p.Vector3),Z.push(new p.Vector3);return n.useFrame((()=>{if(t===1/0||N++<t){var r,n;Array.isArray(T)?G.fromArray(T).normalize():G.copy(b.current.worldToLocal(T.current.getWorldPosition(k)).normalize()),Q.copy(G).multiplyScalar(-1),null==(r=z.current.parent)||r.matrixWorld.identity(),$.setFromObject(z.current,!0),K[0].set($.min.x,$.min.y,$.min.z),K[1].set($.min.x,$.min.y,$.max.z),K[2].set($.min.x,$.max.y,$.min.z),K[3].set($.min.x,$.max.y,$.max.z),K[4].set($.max.x,$.min.y,$.min.z),K[5].set($.max.x,$.min.y,$.max.z),K[6].set($.max.x,$.max.y,$.min.z),K[7].set($.max.x,$.max.y,$.max.z);for(let e=0;e<8;e++)X[e].copy(K[e]);$.getCenter(J),K.map((e=>e.sub(J)));const t=H.set(Q,0);K.map(((e,r)=>t.projectPoint(e,Y[r])));const o=Y.reduce(((e,r)=>e.add(r)),k.set(0,0,0)).divideScalar(Y.length),i=Y.map((e=>e.distanceTo(o))).reduce(((e,r)=>Math.max(e,r))),l=K.map((e=>e.dot(G))).reduce(((e,r)=>Math.max(e,r)));F.current.position.copy(ee.copy(G).multiplyScalar(l).add(J)),F.current.lookAt(z.current.localToWorld(J));const c=L.lookAt(F.current.position,J,k.set(0,1,0));F.current.left=-i,F.current.right=i,F.current.top=i,F.current.bottom=-i;const s=k.set(0,i,0).applyMatrix4(c),m=(F.current.position.y+s.y)/G.y;F.current.near=.1,F.current.far=m,F.current.updateProjectionMatrix(),F.current.updateMatrixWorld();const p=X.map(((e,r)=>e.add(Z[r].copy(G).multiplyScalar(-e.y/G.y)))),v=p.reduce(((e,r)=>e.add(r)),k.set(0,0,0)).divideScalar(p.length),f=2*p.map((e=>Math.hypot(e.x-v.x,e.z-v.z))).reduce(((e,r)=>Math.max(e,r)));W.current.scale.setScalar(f),W.current.position.copy(v),e&&(null==(n=I.current)||n.update()),E.viewMatrix.value=B.viewMatrix.value=F.current.matrixWorldInverse;const x=U.setFromProjectionMatrix(L.multiplyMatrices(F.current.projectionMatrix,F.current.matrixWorldInverse)).planes[4];q.cameraMatrixWorld=F.current.matrixWorld,q.cameraProjectionMatrixInv=F.current.projectionMatrixInverse,q.lightDir=Q,q.lightPlaneNormal=x.normal,q.lightPlaneConstant=x.constant,q.near=F.current.near,q.far=F.current.far,q.resolution=w,q.size=i,q.intensity=D,q.worldRadius=M,z.current.visible=!0,R.setRenderTarget(O),R.clear(),z.current.overrideMaterial=B,R.render(z.current,F.current),R.setRenderTarget(C),R.clear(),d&&(z.current.overrideMaterial=E,R.render(z.current,F.current)),z.current.overrideMaterial=null,q.ior=a,W.current.material.lightProjMatrix=F.current.projectionMatrix,W.current.material.lightViewMatrix=F.current.matrixWorldInverse,q.normalTexture=O.texture,q.depthTexture=O.depthTexture,R.setRenderTarget(_),R.clear(),A.render(R),q.ior=y,q.normalTexture=C.texture,q.depthTexture=C.depthTexture,R.setRenderTarget(V),R.clear(),d&&A.render(R),R.setRenderTarget(null),u&&(z.current.visible=!1)}})),v.useImperativeHandle(S,(()=>b.current),[]),v.createElement("group",m.default({ref:b},j),v.createElement("scene",{ref:z},v.createElement("orthographicCamera",{ref:F,up:[0,1,0]}),r),v.createElement("mesh",{renderOrder:2,ref:W,"rotation-x":-Math.PI/2},v.createElement("planeGeometry",null),v.createElement("causticsProjectionMaterial",{transparent:!0,color:s,causticsTexture:_.texture,causticsTextureB:V.texture,blending:p.CustomBlending,blendSrc:p.OneFactor,blendDst:p.SrcAlphaFactor,depthWrite:!1}),e&&v.createElement(l.Edges,null,v.createElement("lineBasicMaterial",{color:"#ffff00",toneMapped:!1}))))}));exports.Caustics=y;