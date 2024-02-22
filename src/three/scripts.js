import * as THREE from "three"
import "./style.css"

export const renderCar = (camera, scene, controls, renderer) => {
  scene.background = new THREE.Color(0xffffff)

  camera.position.set(4.25, 3.4, -4.5)

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
