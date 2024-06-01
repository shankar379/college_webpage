import { Loader } from 'three/src/loaders/Loader.js';
import { LoadingManager } from 'three/src/loaders/LoadingManager.js';

export class AudioLoader extends Loader<AudioBuffer> {
    constructor(manager?: LoadingManager);
}
