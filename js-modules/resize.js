const resizeCanvas = (sizes, renderer, camera) => {

    window.addEventListener('resize', () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
  
      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix(); //! ERROR: camera.updateProjectionMatrix is not a function

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
};

export default resizeCanvas;