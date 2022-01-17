import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export class ThreeData extends Component {
  componentDidMount() {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    this.mount.appendChild(renderer.domElement);

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);
    camera.position.setX(-3);

    renderer.render(scene, camera);

    // Torus

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
    const torus = new THREE.Mesh(geometry, material);

    // Lights

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);

    var animate = function () {
      requestAnimationFrame(animate);

      // controls.update();

      renderer.render(scene, camera);
      const loader = new GLTFLoader();

      loader.load(
        "./scene.gltf",
        function (gltf) {
          scene.add(gltf.scene);
        },
        undefined,
        function (error) {
          console.error(error);
        }
      );
    };

    animate();
  }
  render() {
    return <div ref={(ref) => (this.mount = ref)} />;
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<ThreeData />, rootElement);
