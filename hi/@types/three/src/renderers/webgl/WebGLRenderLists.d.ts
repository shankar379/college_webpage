import { Object3D } from 'three/src/core/Object3D.js';
import { Material } from 'three/src/materials/Material.js';
import { WebGLProgram } from 'three/src/renderers/webgl/WebGLProgram.js';
import { Group } from 'three/src/objects/Group.js';
import { Scene } from 'three/src/scenes/Scene.js';
import { Camera } from 'three/src/cameras/Camera.js';
import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
import { WebGLProperties } from 'three/src/renderers/webgl/WebGLProperties.js';

export interface RenderItem {
    id: number;
    object: Object3D;
    geometry: BufferGeometry | null;
    material: Material;
    program: WebGLProgram;
    groupOrder: number;
    renderOrder: number;
    z: number;
    group: Group | null;
}

export class WebGLRenderList {
    constructor(properties: WebGLProperties);

    /**
     * @default []
     */
    opaque: RenderItem[];

    /**
     * @default []
     */
    transparent: RenderItem[];

    /**
     * @default []
     */
    transmissive: RenderItem[];

    init(): void;
    push(
        object: Object3D,
        geometry: BufferGeometry | null,
        material: Material,
        groupOrder: number,
        z: number,
        group: Group | null,
    ): void;
    unshift(
        object: Object3D,
        geometry: BufferGeometry | null,
        material: Material,
        groupOrder: number,
        z: number,
        group: Group | null,
    ): void;
    sort(opaqueSort: (a: any, b: any) => number, transparentSort: (a: any, b: any) => number): void;
    finish(): void;
}

export class WebGLRenderLists {
    constructor(properties: WebGLProperties);

    dispose(): void;
    get(scene: Scene, renderCallDepth: number): WebGLRenderList;
}
