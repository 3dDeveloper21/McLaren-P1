import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const model = {
    init: (scene) =>
    {
        let model;
        console.log('Init model');

        // set up model
        const gltfLoader = new GLTFLoader();

        gltfLoader.load('../models/cars/mclaren_p1/gltf/mclarenp1.glb',(gltf) =>
            {
                model = gltf.scene;
                scene.add(model);
                console.log('success')
            },
            (progress) =>
            {
                console.log('progress')
                console.log(progress)
            },
            (error) =>
            {
                console.log('error')
                console.log(error)
            }
        )

    },
    update: () => 
    {
        console.log('Update model')
    }
}

export default model;