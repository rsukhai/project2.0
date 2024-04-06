import * as THREE from "three"
import "./style.css"

export const renderCar = (camera, scene, controls, renderer) => {
  camera.position.set(3.617, 1.905, 7.836)
  const floor = new THREE.Mesh()
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
