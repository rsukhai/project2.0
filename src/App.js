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
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"
import { RGBELoader } from "three/addons/loaders/RGBELoader.js"
import { GroundedSkybox } from 'three/addons/objects/GroundedSkybox.js';



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
    controls.minDistance = 4
    controls.maxDistance = 12
    controls.target.set(0, 0.9, 0)

    const renderer = new THREE.WebGLRenderer({ canvas })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.render(scene, camera)

    
  



    const pmremGenerator = new THREE.PMREMGenerator( renderer );

    const loader2 = new RGBELoader();
    const params = {
      height: 2,
      radius: 25,
      enabled: true, 
  };


    loader2.load("Base/wide_street_02_4k.hdr", function(texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = texture;
      scene.environment.intensity = 0.1;
    
      const skybox = new GroundedSkybox(texture, params.height, params.radius);
      skybox.position.y = params.height - 0.01;
      scene.add(skybox);
    
    });

    
  
    const shadowTextureLoader = new THREE.TextureLoader();

    shadowTextureLoader.load('Base/car-shadow-v2.png', (texture) => {
      const shadowGeometry = new THREE.PlaneGeometry(12, 12); 
      const shadowMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true, 
        depthWrite: false, 
      });
      const shadowMesh = new THREE.Mesh(shadowGeometry, shadowMaterial);
      shadowMesh.rotation.x = -Math.PI / 2; 
      shadowMesh.position.y = 0.01; 
      scene.add(shadowMesh);
    });




    const cromeMaterial = new THREE.MeshPhysicalMaterial( {
      color: 0x000000, metalness: 0.1, roughness: 0.0004, transmission: 0.9
    } );
    const car = new THREE.MeshPhysicalMaterial( {
      color: 0x000000, metalness: 0.9, roughness: 0.04, transmission: 0.9
    } );
    const cromeMaterial2 = new THREE.MeshPhysicalMaterial( {
      color: 0xC0C0C0, metalness: 1.0, roughness: 0.001, transmission: 0.2
    } );
    const black = new THREE.MeshPhysicalMaterial( {
      color: 0x000000, metalness: 0.6, roughness: 0.25, transmission: 0.2
    } );



    
    const glassMaterial = new THREE.MeshPhysicalMaterial( {
      color: 0x000000, metalness: 0.25, roughness: 0, transmission: 0
    } );
    


  loader.load("Base/стокмашина.glb", (gltf) => {
    const model = gltf.scene;
    model.getObjectByName( 'car' ).material = car;
    model.getObjectByName( 'black' ).material = black;
    model.getObjectByName( 'windows' ).material = glassMaterial;
    model.getObjectByName( 'chrome' ).material = cromeMaterial2;
    scene.add(model)
  })


    const handleMouseWheel = (event) => {
      const delta = event.deltaY
      controls.zoom += delta * 0.001
    }
    window.addEventListener("wheel", handleMouseWheel)

    renderCar(camera, scene, controls, renderer)
  }, [loader, scene])

  useEffect(() => {

    
    const cromeMaterial = new THREE.MeshPhysicalMaterial( {
      color: 0xC0C0C0, metalness: 1.0, roughness: 0.001, transmission: 0.2
    } ); 
    const car = new THREE.MeshPhysicalMaterial( {
      color: 0x000000, metalness: 0.9, roughness: 0.04, transmission: 0.9
    } );

    function loadSplitrModel() {
      
      splitrModel.forEach((model) => {
        scene.remove(model)
      })
      switch (selectedOptionSplitr) {
        case "Stok":
          loader.load("Splitr/юбкасток.glb", (gltf) => {
            const model = gltf.scene;
            model.getObjectByName( 'chrome' ).material = cromeMaterial;
            model.getObjectByName( 'car' ).material = car;
            scene.add(model)
            splitrModel.push(model) 
          })
          break
        case "2016":
          loader.load("Splitr/юбка2016.glb", (gltf) => {
            const model = gltf.scene;
            model.getObjectByName( 'car' ).material = car;
            model.getObjectByName( 'chrome' ).material = cromeMaterial;
            scene.add(model)
            splitrModel.push(model)
          })
          break
        case "2019":
          loader.load("Splitr/юбка2019.glb", (gltf) => {
            const model = gltf.scene;
            model.getObjectByName( 'car' ).material = car;
            model.getObjectByName( 'chrome' ).material = cromeMaterial;
            scene.add(model)
            splitrModel.push(model)
          })
          break
        case "2021":
          loader.load("Splitr/юбка2021.glb", (gltf) => {
            const model = gltf.scene;
            model.getObjectByName( 'chrome' ).material = cromeMaterial;
            model.getObjectByName( 'car' ).material = car;

            scene.add(model)
            splitrModel.push(model)
          })
          break
        case "WALD":
          loader.load("Splitr/юбкаwald.glb", (gltf) => {
            const model = gltf.scene;
            const carObject = model.getObjectByName('car');
            car.side = THREE.DoubleSide;
            carObject.material = car;
            model.getObjectByName( 'chrome' ).material = cromeMaterial;
            
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
    const  darkChromeMaterial= new THREE.MeshPhysicalMaterial( {
      color:  0xd1d1d1,  metalness: 1.0, roughness: 0.001, transmission: 0.2
    } );
    const  cromeMaterial  = new THREE.MeshPhysicalMaterial( {
      color: 0x616161, metalness: 0.7, roughness: 0.2, transmission: 0.2
    } );
    const black = new THREE.MeshPhysicalMaterial( {
      color: 0x000000, metalness: 0.2, roughness: 0.8, transmission: 0.2
    } );
    const black2 = new THREE.MeshPhysicalMaterial( {
      color: 0x000000, metalness: 1 , roughness: 0.25, transmission: 0.2
    } );
    const  cromeMaterial2  = new THREE.MeshPhysicalMaterial( {
      color: 0x8c8c8c, metalness: 1 , roughness: 0.002, transmission: 0.2
    } );



    function loadGrillModel() {
      grillModel.forEach((model) => {
        
        scene.remove(model)
      })
      switch (selectedOptionGrill) {
        case "Stok":
          loader.load("Grill/решіткасток.glb", (gltf) => {
            const model = gltf.scene;
            model.getObjectByName( 'chrome' ).material = cromeMaterial;
            model.getObjectByName( 'dark_chrome' ).material = darkChromeMaterial;
            model.getObjectByName( 'black' ).material = black;
            scene.add(model)
            grillModel.push(model)
          })
          break
        case "2016":
          loader.load("Grill/решітка2016.glb", (gltf) => {
            const model = gltf.scene;
            model.getObjectByName( 'chrome' ).material = cromeMaterial;
            model.getObjectByName( 'dark_chrome' ).material = darkChromeMaterial;
            scene.add(model)
            grillModel.push(model)
          })
          break
        case "2019":
          loader.load("Grill/решітка2019.glb", (gltf) => {
            const model = gltf.scene;
            model.getObjectByName( 'chrome' ).material = cromeMaterial2;
            model.getObjectByName( 'dark_chrome' ).material = darkChromeMaterial;
            model.getObjectByName( 'black' ).material = black;
            scene.add(model)
            grillModel.push(model)
          })
          break
        case "2021":
          loader.load("Grill/решітка2021.glb", (gltf) => {
            console.log("Model loaded.");
            const model = gltf.scene;
            model.getObjectByName( 'chrome' ).material = cromeMaterial2;
            model.getObjectByName( 'dark_chrome' ).material = darkChromeMaterial;
            scene.add(model)
            grillModel.push(model)
          })
          break
          case "TRD":
            loader.load("Grill/решіткаТРД.glb", (gltf) => {
              console.log("Model loaded.");
              const model = gltf.scene;
              model.getObjectByName( 'chrome' ).material = cromeMaterial2;
              model.getObjectByName( 'black' ).material = black2;
              scene.add(model);
              grillModel.push(model);
            });
            break;
        default:
          console.log("Невідома опція")
      }
    }
    loadGrillModel()
    // Зміна решітки
  }, [selectedOptionGrill, loader, scene, grillModel])

  useEffect(() => {
    const glassMaterial = new THREE.MeshPhysicalMaterial( {
      color: 0xadadad,reflectivity: 0 , metalness: 0.1, roughness: 0, transmission: 1
    } );
    const glassMaterial4 = new THREE.MeshPhysicalMaterial( {
      color: 0xffffff, metalness: 0.1,reflectivity: 0 , roughness: 0, transmission: 1.0
    } );
    const glassMaterial2 = new THREE.MeshPhysicalMaterial( {
      color: 0x4d4d4d, metalness: 0.1, roughness: 0
    } );
    const glassMaterial20 = new THREE.MeshPhysicalMaterial( {
      color: 0x363535, metalness: 0.1, roughness: 0.2
    } );
    const cromeMaterial = new THREE.MeshPhysicalMaterial( {
      color: 0xe3e3e3, metalness: 1.0, roughness: 0.001
    } );
    const light = new THREE.MeshPhysicalMaterial( {
      color: 0xf5f5f5, metalness: 0.2, roughness: 0.001
    } );
    const cromeMaterial2 = new THREE.MeshPhysicalMaterial( {
      color: 0x4f4f4f, metalness: 1.0, roughness: 0.001
    } )
    const glassMaterial3 = new THREE.MeshPhysicalMaterial( {
      color: 0xbdbbbb, metalness: 0.8, roughness: 0,
    } );
    const light2 = new THREE.MeshPhysicalMaterial( {
      color: 0xffffff, metalness: 0.2, roughness: 0.001,
    } );

    function loadLightModel() {
      lightModel.forEach((model) => {
        scene.remove(model)
      })
      switch (selectedOptionLights) {
        case "Stok":
          loader.load("Lights/фаристок.glb", (gltf) => {
            const model = gltf.scene;
            model.getObjectByName( 'light' ).material = light;
            model.getObjectByName( 'chrome' ).material = cromeMaterial;
            const carObject = model.getObjectByName('window');
            glassMaterial.side = THREE.DoubleSide; 
            carObject.material = glassMaterial;

            model.getObjectByName( 'dark_chrome' ).material = glassMaterial2;
            scene.add(model)
            lightModel.push(model)
          })
          break
        case "Black":
          loader.load("Lights/фаричорні2019.glb", (gltf) => {
            const model = gltf.scene;
            model.getObjectByName( 'light' ).material = light;
            model.getObjectByName( 'dark_chrome' ).material = glassMaterial3;//  лінзи
            const carObject = model.getObjectByName('window');
            glassMaterial.side = THREE.DoubleSide; 
            carObject.material = glassMaterial;
            model.getObjectByName( 'chrome' ).material = cromeMaterial2;
            scene.add(model)
            lightModel.push(model)
          })

          break
        case "Lx":
          loader.load("Lights/фарилхдизайн.glb", (gltf) => {
            const model = gltf.scene;
            model.getObjectByName( 'window' ).material = glassMaterial4;
            
            model.getObjectByName( 'black' ).material = cromeMaterial2;
            model.getObjectByName( 'dark_chrome' ).material = glassMaterial2;

            model.getObjectByName( 'light' ).material = light2;
            scene.add(model)
            lightModel.push(model)
          })
          break
        case "Bugatti":
          loader.load("Lights/фарибугатті.glb", (gltf) => {
            const model = gltf.scene;
            model.getObjectByName( 'window' ).material = glassMaterial4;
            model.getObjectByName( 'chrome' ).material = glassMaterial3;
            model.getObjectByName( 'dark_chrome' ).material = glassMaterial20;
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
    const glassMaterial = new THREE.MeshPhysicalMaterial( {
      color: 0xbfbfbf, metalness: 0.1,reflectivity: 0 , roughness: 0, transmission: 1.0
    } );
    const darkglassMaterial = new THREE.MeshPhysicalMaterial( {
      color: 0x575757, metalness: 0.1, roughness: 0, transmission: 1.0
    } );
    const black = new THREE.MeshPhysicalMaterial( {
      color: 0x000000
    } );
    function loadStopModel() {
      stopModel.forEach((model) => {
        scene.remove(model)
      })
      switch (selectedOptionStop) {
        case "Stok":
          loader.load("Stop/стописток.glb", (gltf) => {
            const model = gltf.scene;
            model.getObjectByName( 'window' ).material = glassMaterial;
            scene.add(model)
            stopModel.push(model)
          })
          break
        case "Dark-white":
          loader.load("Stop/стопитемнобілі.glb", (gltf) => {
            const model = gltf.scene;
            model.getObjectByName( 'window' ).material = glassMaterial;
            scene.add(model)
            stopModel.push(model)
          })
          break
        case "Light":
          loader.load("Stop/стописвітлі.glb", (gltf) => {
            const model = gltf.scene;
            // model.getObjectByName( 'red' ).material = red;
            model.getObjectByName( 'window' ).material = glassMaterial;
            model.getObjectByName( 'black' ).material = black;
            scene.add(model)
            stopModel.push(model)
          })
          break
        case "Dark":
          loader.load("Stop/стописвітлі.glb", (gltf) => {
            const model = gltf.scene;
            model.getObjectByName( 'window' ).material = darkglassMaterial;
            model.getObjectByName( 'black' ).material = black;
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
            const model = gltf.scene;
            scene.add(model)
            catafotModel.push(model)
          })
          break
        case "White":
          loader.load("Catafot/катафотбілий.glb", (gltf) => {
            const model = gltf.scene;
            scene.add(model)
            catafotModel.push(model)
          })
          break
        case "Led":
          loader.load("Catafot/катафотлед.glb", (gltf) => {
            const model = gltf.scene;
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
