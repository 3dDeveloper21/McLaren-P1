import camera from './modules/camera';
import sceneCreation from './modules/scene';
import createRenderer from './modules/renderer';
import gameloop from './modules/gameloop';
import resize from './modules/resize';
import model from './modules/model';
import lighting from './modules/lighting';
import { BoxGeometry, MeshBasicMaterial, MeshStandardMaterial, Mesh } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const webgl = (sizes, canvas) =>{

  const scene = sceneCreation();
  const perspectiveCamera = camera(sizes);
  const renderer = createRenderer(canvas, sizes);
  const orbitControls = new OrbitControls(perspectiveCamera, renderer.domElement);
  orbitControls.enableDamping = true;

  gameloop(renderer, scene, perspectiveCamera);
  resize(sizes, renderer, perspectiveCamera);

  model.init(scene);

  const ambientLight = lighting().ambientLight();
  const directionalLight = lighting().directionalLight();
  scene.add(ambientLight, directionalLight);
}

export default webgl;