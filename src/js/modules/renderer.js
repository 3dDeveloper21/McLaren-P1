import {WebGLRenderer} from 'three';

const createRenderer = (canvas, sizes) => 
{
    const renderer = new WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(sizes.width, sizes.height);

    return renderer;
}

export default createRenderer;