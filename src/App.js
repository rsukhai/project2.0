import React, { useEffect, useRef, useState, useMemo } from "react"
import "./App.css"
import { renderCar } from "./three/scripts"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import Splitr from "./questions/Splitr/Splitr"
import Lights from "./questions/Lights/Lights"
import Grill from "./questions/Grill/Grill"
import Stop from "./questions/Stop/Stop"
import Catafot from "./questions/Catafot/Catafot"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
// import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"
import { RGBELoader } from "three/addons/loaders/RGBELoader.js"

function App() {
  const [selectedOptionGrill, setSelectedOptionGrill] = useState("Stok")
  const [selectedOptionSplitr, setSelectedOptionSplitr] = useState("Stok")
  const [selectedOptionLights, setSelectedOptionLights] = useState("Stok")
  const [selectedOptionStop, setSelectedOptionStop] = useState("Stok")
  const [selectedOptionСatafot, setSelectedOptionСatafot] = useState("Stok")

  const canvasRef = useRef(null)
  const splitrModel = useMemo(() => [], [])
  const grillModel = useMemo(() => [], [])
  const lightModel = useMemo(() => [], [])
  const stopModel = useMemo(() => [], [])
  const catafotModel = useMemo(() => [], [])

  const loader = useMemo(() => new GLTFLoader(), [])
  const scene = useMemo(() => new THREE.Scene(), [])
  const dloader = new DRACOLoader()
  dloader.setDecoderPath(
    "https://www.gstatic.com/draco/versioned/decoders/1.5.7/"
  )
  dloader.setDecoderConfig({ type: "js" })
  loader.setDRACOLoader(dloader)

  useEffect(() => {
    const canvas = canvasRef.current

    const camera = new THREE.PerspectiveCamera(
      22,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    )
    scene.add(camera)
    camera.fov += 10
    camera.updateProjectionMatrix()

    const controls = new OrbitControls(camera, canvas)
    controls.maxPolarAngle = THREE.MathUtils.degToRad(87)
    controls.enableDamping = true
    controls.minDistance = 6.5
    controls.maxDistance = 12
    controls.target.set(0, 0.9, 0)

    const renderer = new THREE.WebGLRenderer({ canvas })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.render(scene, camera)

    // new RGBELoader().load("Base/venice_sunset_1k.hdr", function (texture) {
    //   if (texture) {
    //     texture.mapping = THREE.EquirectangularReflectionMapping
    //     scene.background = texture
    //     scene.environment = texture
    //     scene.environment.mapping = THREE.EquirectangularReflectionMapping
    //   } else {
    //     console.error("Помилка завантаження текстури")
    //   }
    // })
    scene.background = new THREE.Color(0x333333)
    scene.environment = new RGBELoader().load("Base/venice_sunset_1k.hdr")
    scene.environment.mapping = THREE.EquirectangularReflectionMapping
    scene.fog = new THREE.Fog(0x333333, 12, 17)

    let grid = new THREE.GridHelper(20, 40, 0xffffff, 0xffffff)
    grid.material.opacity = 0.2
    grid.material.depthWrite = false
    grid.material.transparent = true
    scene.add(grid)

    // const environment = new RoomEnvironment(renderer)
    // const pmremGenerator = new THREE.PMREMGenerator(renderer)

    // const envMap = pmremGenerator.fromScene(environment).texture

    // scene.environment = envMap
    loader.load(
      "Base/untitled.glb",
      (gltf) => {
        scene.add(gltf.scene)
      },
      () => {
        console.log("Завантаження...")
      },
      (error) => {
        console.error("Помилка завантаження GLB файлу:", error)
      }
    )
    // const envMap = pmremGenerator.fromScene(environment, 0.1, 12).texture
    // const spotLight = new THREE.SpotLight(0xffffff, 10000)
    // spotLight.position.set(-8.58, 4.328, -7.134)
    // scene.add(spotLight)

    const handleMouseWheel = (event) => {
      const delta = event.deltaY
      controls.zoom += delta * 0.001
    }
    window.addEventListener("wheel", handleMouseWheel)

    renderCar(camera, scene, controls, renderer)
  }, [loader, scene])

  useEffect(() => {
    function loadSplitrModel() {
      splitrModel.forEach((model) => {
        scene.remove(model)
      })
      switch (selectedOptionSplitr) {
        case "Stok":
          loader.load("Splitr/юбкасток.glb", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            splitrModel.push(model)
          })
          break
        case "2016":
          loader.load("Splitr/юбка2016.glb", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            splitrModel.push(model)
          })
          break
        case "2019":
          loader.load("Splitr/юбка2019.glb", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            splitrModel.push(model)
          })
          break
        case "2021":
          loader.load("Splitr/юбка2021.glb", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            splitrModel.push(model)
          })
          break
        case "WALD":
          loader.load("Splitr/юбкаwald.glb", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            splitrModel.push(model)
          })
          break
        default:
          console.log("Невідома опція")
      }
    }
    // Зміна юбки
    loadSplitrModel()
  }, [selectedOptionSplitr, loader, scene, splitrModel])

  useEffect(() => {
    function loadGrillModel() {
      grillModel.forEach((model) => {
        scene.remove(model)
      })
      switch (selectedOptionGrill) {
        case "Stok":
          loader.load("Grill/решіткасток.glb", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            grillModel.push(model)
          })
          break
        case "2016":
          loader.load("Grill/решітка2016.glb", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            grillModel.push(model)
          })
          break
        case "2019":
          loader.load("Grill/решітка2019.glb", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            grillModel.push(model)
          })
          break
        case "2021":
          loader.load("Grill/решітка2021.glb", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            grillModel.push(model)
          })
          break
        case "TRD":
          loader.load("Grill/решіткаТРД.glb", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            grillModel.push(model)
          })
          break
        default:
          console.log("Невідома опція")
      }
    }
    loadGrillModel()
    // Зміна решітки
  }, [selectedOptionGrill, loader, scene, grillModel])

  useEffect(() => {
    function loadLightModel() {
      lightModel.forEach((model) => {
        scene.remove(model)
      })
      switch (selectedOptionLights) {
        case "Stok":
          loader.load("Lights/фаристок.glb", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            lightModel.push(model)
          })
          break
        case "Black":
          loader.load("Lights/фаричорні2019.glb", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            lightModel.push(model)
          })

          break
        case "Lx":
          loader.load("Lights/фарилхдизайн.glb", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            lightModel.push(model)
          })
          break
        case "Bugatti":
          loader.load("Lights/фарибугатті.glb", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            lightModel.push(model)
          })
          break
        default:
          console.log("Невідома опція")
      }
    }
    // Зміна світла
    loadLightModel()
  }, [selectedOptionLights, loader, scene, lightModel])

  useEffect(() => {
    function loadStopModel() {
      stopModel.forEach((model) => {
        scene.remove(model)
      })
      switch (selectedOptionStop) {
        case "Stok":
          loader.load("Stop/стописток.glb", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            stopModel.push(model)
          })
          break
        case "Dark-white":
          loader.load("Stop/стопитемнобілі.glb", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            stopModel.push(model)
          })
          break
        case "Light":
          loader.load("Stop/стописвітлі.glb", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            stopModel.push(model)
          })
          break
        case "Dark":
          loader.load("Stop/стопитемні.glb", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            stopModel.push(model)
          })
          break
        default:
          console.log("Невідома опція")
      }
    }
    // Зміна стопів
    loadStopModel()
  }, [selectedOptionStop, loader, scene, stopModel])

  useEffect(() => {
    function loadCatafotModel() {
      catafotModel.forEach((model) => {
        scene.remove(model)
      })
      switch (selectedOptionСatafot) {
        case "Stok":
          loader.load("Catafot/катафотсток.glb", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            catafotModel.push(model)
          })
          break
        case "White":
          loader.load("Catafot/катафотбілий.glb", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            catafotModel.push(model)
          })
          break
        case "Led":
          loader.load("Catafot/катафотлед.glb", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            catafotModel.push(model)
          })
          break
        default:
          console.log("Невідома опція")
      }
    }
    // Зміна катафотів

    loadCatafotModel()
  }, [selectedOptionСatafot, loader, scene, catafotModel])

  return (
    <div className="center">
      <div className="top">
        <Splitr
          selectedOptionSplitr={selectedOptionSplitr}
          setSelectedOptionSplitr={setSelectedOptionSplitr}
        />
        <Grill
          selectedOptionGrill={selectedOptionGrill}
          setSelectedOptionGrill={setSelectedOptionGrill}
        />
      </div>
      <div className="bottom">
        <Lights
          selectedOptionLights={selectedOptionLights}
          setSelectedOptionLights={setSelectedOptionLights}
        />
        <Stop
          selectedOptionStop={selectedOptionStop}
          setSelectedOptionStop={setSelectedOptionStop}
        />
        <Catafot
          selectedOptionСatafot={selectedOptionСatafot}
          setSelectedOptionСatafot={setSelectedOptionСatafot}
        />
      </div>
      <div className="canvas-container">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  )
}

export default App
