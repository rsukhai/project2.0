import * as THREE from "three"
import "./style.css"

export const renderCar = (camera, scene, controls, renderer) => {
  camera.position.set(3.617, 1.905, 7.836)
  scene.background = new THREE.Color(0x333333)

  const floor = new THREE.Mesh()
  //   const floorGeometry = new THREE.PlaneGeometry(20, 20);
  // const floorMesh = new THREE.Mesh(floorGeometry, floorMat);
  // floorMesh.receiveShadow = true;
  // floorMesh.rotation.x = -Math.PI / 2.0;
  // scene.add(floorMesh);
  floor.receiveShadow = true
  floor.rotation.x = -Math.PI * 0.5
  scene.add(floor)
  const tick = () => {
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
  }
  tick()
}
