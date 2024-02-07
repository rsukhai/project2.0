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
  useEffect(() => {
    loader.load("Base/стокмашина.gltf", (gltf) => {
      scene.add(gltf.scene.children[0])
    })
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    const canvas = canvasRef.current

    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
    scene.add(camera)

    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    controls.minDistance = 4
    controls.maxDistance = 10

    const renderer = new THREE.WebGLRenderer({ canvas })
    renderer.setSize(sizes.width, sizes.height)
    renderer.render(scene, camera)

    const handleMouseWheel = (event) => {
      const delta = event.deltaY
      controls.zoom += delta * 0.001
    }
    window.addEventListener("wheel", handleMouseWheel)

    renderCar(camera, scene, controls, renderer)
  }, [loader,scene])

  useEffect(() => {
    function loadSplitrModel() {
      splitrModel.forEach((model) => {
        scene.remove(model)
      })
      switch (selectedOptionSplitr) {
        case "Stok":
          loader.load("Splitr/юбкасток.gltf", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            splitrModel.push(model)
          })
          break
        case "2016":
          loader.load("Splitr/юбка2016.gltf", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            splitrModel.push(model)
          })
          break
        case "2019":
          loader.load("Splitr/юбка2019.gltf", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            splitrModel.push(model)
          })
          break
        case "2021":
          loader.load("Splitr/юбка2021.gltf", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            splitrModel.push(model)
          })
          break
        case "WALD":
          loader.load("Splitr/юбкаwald.gltf", (gltf) => {
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
          loader.load("Grill/решіткасток.gltf", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            grillModel.push(model)
          })
          break
        case "2016":
          loader.load("Grill/решітка2016.gltf", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            grillModel.push(model)
          })
          break
        case "2019":
          loader.load("Grill/решітка2019.gltf", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            grillModel.push(model)
          })
          break
        case "2021":
          loader.load("Grill/решітка2021.gltf", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            grillModel.push(model)
          })
          break
        case "TRD":
          loader.load("Grill/решіткаТРД.gltf", (gltf) => {
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
          loader.load("Lights/фаристок.gltf", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            lightModel.push(model)
          })
          break
        case "Black":
          loader.load("Lights/фаричорні2019.gltf", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            lightModel.push(model)
          })
          break
        case "Lx":
          loader.load("Lights/фарилхдизайн.gltf", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            lightModel.push(model)
          })
          break
        case "Bugatti":
          loader.load("Lights/фарибугатті.gltf", (gltf) => {
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
          loader.load("Stop/стописток.gltf", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            stopModel.push(model)
          })
          break
        case "Dark-white":
          loader.load("Stop/стопитемнобілі.gltf", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            stopModel.push(model)
          })
          break
        case "Light":
          loader.load("Stop/стописвітлі.gltf", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            stopModel.push(model)
          })
          break
        case "Dark":
          loader.load("Stop/стопитемні.gltf", (gltf) => {
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
          loader.load("Catafot/катафотсток.gltf", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            catafotModel.push(model)
          })
          break
        case "Black":
          loader.load("Catafot/катафотчорний.gltf", (gltf) => {
            const model = gltf.scene.children[0]
            scene.add(model)
            catafotModel.push(model)
          })
          break
        case "Led":
          loader.load("Catafot/катафотлед.gltf", (gltf) => {
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
