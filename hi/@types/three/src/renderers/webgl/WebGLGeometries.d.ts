import { WebGLAttributes } from 'three/src/renderers/webgl/WebGLAttributes.js';
import { WebGLInfo } from 'three/src/renderers/webgl/WebGLInfo.js';
import { BufferAttribute } from 'three/src/core/BufferAttribute.js';
import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
import { Object3D } from 'three/src/core/Object3D.js';

export class WebGLGeometries {
    constructor(gl: WebGLRenderingContext, attributes: WebGLAttributes, info: WebGLInfo);

    get(object: Object3D, geometry: BufferGeometry): BufferGeometry;
    update(geometry: BufferGeometry): void;
    getWireframeAttribute(geometry: BufferGeometry): BufferAttribute;
}
