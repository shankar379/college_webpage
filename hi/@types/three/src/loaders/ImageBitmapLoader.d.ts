import { Loader } from 'three/src/loaders/Loader.js';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';

export class ImageBitmapLoader extends Loader<ImageBitmap> {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (data: ImageBitmap) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (err: unknown) => void,
    ): void;

    /**
     * @default { premultiplyAlpha: 'none' }
     */
    options: undefined | object;

    readonly isImageBitmapLoader: true;

    setOptions(options: object): ImageBitmapLoader;
}
