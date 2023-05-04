import * as THREE from "./node_modules/three";

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth * 0.7, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

const points = [];
// points.push(new THREE.Vector3(-20, 0, 0));
points.push(new THREE.Vector3(0, 0, 0));
points.push(new THREE.Vector3(15, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);

scene.add(line);
renderer.render(scene, camera);

document
  .querySelector(".add-vector")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var selectedObject = scene.getObjectByName("newLine");
    scene.remove(selectedObject);

    const x_cord = this.querySelector(".dot-x-cord").value;
    const y_cord = this.querySelector(".dot-y-cord").value;

    const material = new THREE.LineBasicMaterial({ color: 0xffffff });

    const new_line = [];
    new_line.push(new THREE.Vector3(0, 0, 0));
    new_line.push(new THREE.Vector3(x_cord, y_cord, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(new_line);

    const current_line = new THREE.Line(geometry, material);
    current_line.name = "newLine";

    scene.add(current_line);
    renderer.render(scene, camera);
  });
