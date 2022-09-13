import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

export default function HeroBanner() {
  const mountRef = useRef();
  useEffect(() => {
    //Texture
    const loadingManager = new THREE.LoadingManager()
    loadingManager.onStart = () => {

    }
    const textureLoader = new THREE.TextureLoader(loadingManager)

    const matCapTexture = textureLoader.load('textures/matcaps/8.png')
    const gradientTextures = textureLoader.load('textures/gradients/3.jpg')
    gradientTextures.minFilter = THREE.NearestFilter
    gradientTextures.magFilter = THREE.NearestFilter
    const modelGroup = new THREE.Group();

    const loader = new GLTFLoader();

    loader.load
      (
        //Rescource url
        'models/melanieBot.gltf',
        (gltf) => {
          gltf.scene.traverse((node) => {
            if (!node.isMesh) return;

            node.material.wireframe = true;
            node.material.color = new THREE.Color(0x0000ff)
          });
          gltf.scene.scale.set(3, 3, 3)
          modelGroup.add(gltf.scene)
          var object = gltf.scene
          const model = gltf.scene.clone();
          model.applyMatrix4(new THREE.Matrix4().makeScale(-1, 1, 1));
          
          modelGroup.add(model)
          console.log(gltf.scene)

        }
      )


    //Font
    const fontLoader = new FontLoader()
    fontLoader.load(
      'fonts/helvetiker_regular.typeface.json',
      (font) => {

        const textGeometry = new TextGeometry
          (
            "HYPERFLEX CORE",

            {
              font,
              size: 1.5,
              height: 0.2,
              curveSegments: 1,
              bevelEnabled: false,
              bevelThickness: 0.03,
              bevelSize: 0.02,
              bevelOffset: 0,
              bevelSegments: 20

            }
          )

        const directionlLight = new THREE.DirectionalLight('white', 2)
        directionlLight.lookAt(modelGroup)
        scene.add(directionlLight)

        const light = new THREE.AmbientLight("white", 3)
        textGeometry.center()
        const material = new THREE.MeshStandardMaterial()
        material.wireframe = true
        material.color = new THREE.Color('blue')
        material.matcap = matCapTexture
        const text = new THREE.Mesh(textGeometry, material)
        modelGroup.add(light)

        scene.add(modelGroup)

      }
    )
    //scene
    const scene = new THREE.Scene()
    const size = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    //Camera
    const camera = new THREE.PerspectiveCamera(75, size.width / size.height)
    camera.position.z = 15

    scene.add(camera)

    //Renderer

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(size.width, size.height);
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio))
    renderer.setClearColor(0x000000)


    mountRef.current.appendChild(renderer.domElement);

    // const controls = new OrbitControls(camera, renderer.domElement)
    //controls.enableDamping = true;
    //controls.autoRotate = false;

    //Move model to look at cursor
    window.addEventListener('mousemove', (event) => {
      modelGroup.rotation.y = (event.clientX / window.innerWidth) - 0.5;
      modelGroup.rotation.x = (event.clientY / window.innerHeight) - 0.5;

      modelGroup.position.x = ((event.clientX / window.innerWidth) - 0.5) * 15;
      modelGroup.position.y = ((event.clientY / window.innerHeight) - 0.5) * -15;
    });

    window.addEventListener('resize', onWindowResize, false);

    function onWindowResize() {

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);

    }

    //Time
    const clock = new THREE.Clock()
    //Animation
    const tick = () => {
      //animate camera
      //Time
      const elapsedTime = clock.getElapsedTime()
      //Render
      // controls.update()
      renderer.render(scene, camera)
      window.requestAnimationFrame(tick)
    }

    tick()


    return () => mountRef.current.removeChild(renderer.domElement);


  }, [])

  return (
    <div className='fixed h-full w-full top-0 left-0' ref={mountRef} style={{ height: "100%" }}>

    </div>
  )
}
