import { PerspectiveCamera } from 'three';

const camera = (sizes) =>
{
    const perspectiveCamera = new PerspectiveCamera(
        75,
        sizes.width / sizes.height,
        1, 
        1000
    );

    perspectiveCamera.position.z = 5;

    return perspectiveCamera;
};

export default camera;