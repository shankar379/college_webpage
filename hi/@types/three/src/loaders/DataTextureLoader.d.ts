import { Loader } from 'three/src/loaders/Loader.js';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';
import { DataTexture } from 'three/src/textures/DataTexture.js';

export class DataTextureLoader extends Loader<DataTexture> {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (data: DataTexture, texData: object) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (err: unknown) => void,
    ): DataTexture;
}
