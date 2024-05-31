"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("three"),t=require("react"),n=require("@react-three/fiber"),r=require("suspend-react");function o(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var u,i,s=o(e);const c="undefined"!=typeof window&&"function"==typeof(null==(u=window.document)?void 0:u.createElement)&&"string"==typeof(null==(i=window.navigator)?void 0:i.userAgent);let a=null;exports.useVideoTexture=function(e,u){const{unsuspend:i,start:l,crossOrigin:d,muted:f,loop:p,hls:g,...m}={unsuspend:"loadedmetadata",crossOrigin:"Anonymous",muted:!0,loop:!0,start:!0,playsInline:!0,hls:{},...u},y=new URL("string"==typeof e?e:"",window.location.href),v=t.useRef(null),w=t.useRef(null),h=n.useThree((e=>e.gl)),O=r.suspend((()=>new Promise((async(t,n)=>{const r=Object.assign(document.createElement("video"),{src:"string"==typeof e&&e||void 0,srcObject:e instanceof MediaStream&&e||void 0,crossOrigin:d,loop:p,muted:f,...m});if(w.current=r,"string"==typeof e){const t=v.current=await async function(e,t){var n;return c&&e.pathname.endsWith(".m3u8")&&(null!==(n=a)&&void 0!==n||(a=await Promise.resolve().then((function(){return o(require("hls.js"))}))),a.default.isSupported())?new a.default({...t}):null}(y,g);t?(t.attachMedia(r),t.on("hlsMediaAttached",(()=>{t.loadSource(e)}))):r.src=e}else e instanceof MediaStream&&(r.srcObject=e);const u=new s.VideoTexture(r);"colorSpace"in u?u.colorSpace=h.outputColorSpace:u.encoding=h.outputEncoding,r.addEventListener(i,(()=>t(u)))}))),[e]);return t.useEffect((()=>(l&&O.image.play(),()=>{v.current&&(v.current.destroy(),v.current=null)})),[O,l]),O};
