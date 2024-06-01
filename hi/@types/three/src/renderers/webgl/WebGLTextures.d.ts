import { WebGLExtensions } from 'three/src/renderers/webgl/WebGLExtensions.js';
import { WebGLState } from 'three/src/renderers/webgl/WebGLState.js';
import { WebGLProperties } from 'three/src/renderers/webgl/WebGLProperties.js';
import { WebGLCapabilities } from 'three/src/renderers/webgl/WebGLCapabilities.js';
import { WebGLUtils } from 'three/src/renderers/webgl/WebGLUtils.js';
import { WebGLInfo } from 'three/src/renderers/webgl/WebGLInfo.js';

export class WebGLTextures {
    constructor(
        gl: WebGLRenderingContext,
        extensions: WebGLExtensions,
        state: WebGLState,
        properties: WebGLProperties,
        capabilities: WebGLCapabilities,
        utils: WebGLUtils,
        info: WebGLInfo,
    );

    allocateTextureUnit(): void;
    resetTextureUnits(): void;
    setTexture2D(texture: any, slot: number): void;
    setTexture2DArray(texture: any, slot: number): void;
    setTexture3D(texture: any, slot: number): void;
    setTextureCube(texture: any, slot: number): void;
    setupRenderTarget(renderTarget: any): void;
    updateRenderTargetMipmap(renderTarget: any): void;
    updateMultisampleRenderTarget(renderTarget: any): void;
    safeSetTexture2D(texture: any, slot: number): void;
    safeSetTextureCube(texture: any, slot: number): void;
}
