const gameloop = (renderer, scene, camera) =>
{
    const tick = () => {
        window.requestAnimationFrame(tick);
        renderer.render(scene, camera);
    }
    tick();
};

export default gameloop;