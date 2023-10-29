import './style.css';
import webgl from './js/webgl';

const init = () => {

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  const canvas = document.getElementById('webglCanvas');

  webgl(sizes, canvas);
}


window.onload = () =>
{
  init();
}