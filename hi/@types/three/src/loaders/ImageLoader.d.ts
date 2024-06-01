import { Loader } from 'three/src/loaders/Loader.js';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';

/**
 * A loader for loading an image.
 * Unlike other loaders, this one emits events instead of using predefined callbacks. So if you're interested in getting notified when things happen, you need to add listeners to the object.
 */
export class ImageLoader extends Loader<HTMLImageElement> {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad?: (data: HTMLImageElement) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (err: unknown) => void,
    ): HTMLImageElement;
}
