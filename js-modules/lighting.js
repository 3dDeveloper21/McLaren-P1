import { AmbientLight, DirectionalLight } from "three";

const lighting = () =>
{
    const lights = {
        ambientLight: ()=> 
        {
            const ambientLight = new AmbientLight(0xffffff, 1);
            return ambientLight;
        },

        directionalLight: ()=> 
        {
            const directionalLight = new DirectionalLight(0x00fffc, 0.9);
            return directionalLight;
        }
    }

    return lights;
}

export default lighting;
