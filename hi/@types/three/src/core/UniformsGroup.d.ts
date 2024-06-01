import { EventDispatcher } from 'three/src/core/EventDispatcher.js';
import { Uniform } from 'three/src/core/Uniform.js';
import { Usage } from 'three/src/constants.js';

/**
 * @see Example: {@link https://threejs.org/examples/#webgl2_ubo | WebGL2 / UBO}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/UniformsGroup.js | Source}
 */
export class UniformsGroup extends EventDispatcher<{ dispose: {} }> {
    constructor();

    readonly isUniformsGroup: true;

    id: number;

    usage: Usage;

    uniforms: Array<Uniform | Uniform[]>;

    add(uniform: Uniform | Uniform[]): this;

    remove(uniform: Uniform | Uniform[]): this;

    setName(name: string): this;

    setUsage(value: Usage): this;

    dispose(): this;

    copy(source: UniformsGroup): this;

    clone(): UniformsGroup;
}
