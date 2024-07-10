import * as BABYLON from 'babylonjs';

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;
  const engine = new BABYLON.Engine(canvas, true);

  const createScene = () => {
    const scene = new BABYLON.Scene(engine);
    const camera = new BABYLON.ArcRotateCamera('camera', Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(1, 1, 0), scene);
    light.intensity = 0.7;

    const box = BABYLON.MeshBuilder.CreateBox('box', {}, scene);
    box.rotation.x = Math.PI / 4;

    return scene;
  };

  const scene = createScene();

  engine.runRenderLoop(() => {
    scene.render();
  });

  window.addEventListener('resize', () => {
    engine.resize();
  });
});

(window as any).showSlide = (slideIndex: number) => {
  const slides = document.querySelectorAll('.hud-slide');
  slides.forEach((slide, index) => {
    if (index === slideIndex - 1) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
};
