import * as THREE from "three"
import "./style.css"



export const renderCar = ( camera, scene, controls, renderer) => {
  scene.background = new THREE.Color(0x505050)



  camera.position.set(5, 5, 5)
  
  const floor = new THREE.Mesh(
    // new THREE.PlaneGeometry(5, 5),
    // new THREE.MeshStandardMaterial({
    //   color: "#123123",
    //   metalness: 0.9,
    //   roughness: 0.5,
    // })
    // виставляння площадки на сцені
  )
  floor.receiveShadow = true
  floor.rotation.x = -Math.PI * 0.5
  scene.add(floor)





  var spotLight = new THREE.SpotLight(0xffffff, 250, 0, Math.PI / 2, 1)
  spotLight.position.set(9.878, 1.155, 5.052)
  spotLight.target.position.set(0, 0, 0)
  scene.add(spotLight)
  scene.add(spotLight.target)

  var spotLight2 = new THREE.SpotLight(0xffffff, 250, 0, Math.PI / 2, 1)
  spotLight2.position.set(-6.524, 4.954, -6.097)
  spotLight2.target.position.set(0, 0, 0)
  scene.add(spotLight2)
  scene.add(spotLight2.target)

  var spotLight3 = new THREE.SpotLight(0xffffff, 250, 0, Math.PI / 2, 1)
  spotLight3.position.set(-3.147, 4.217, 7.862)
  spotLight3.target.position.set(0, 0, 0)
  scene.add(spotLight3)
  scene.add(spotLight3.target)

  var spotLight4 = new THREE.SpotLight(0xffffff, 250, 0, Math.PI / 2, 1)
  spotLight4.position.set(4.576, 3.202, -6.088)
  spotLight4.target.position.set(0, 0, 0)
  scene.add(spotLight4)
  scene.add(spotLight4.target)










  const tick = () => {
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
  }
  tick()



}
