import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function HeroBanner() {
  const mountRef = useRef();
  useEffect(() => {
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

        }
      )

      
      
      
      
      //scene
      const scene = new THREE.Scene()
      const size = {
        width: window.innerWidth,
        height: window.innerHeight
      }


      //Lights
      const directionlLight = new THREE.DirectionalLight('white', 2)
      directionlLight.lookAt(modelGroup)
      scene.add(directionlLight,modelGroup)
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

  

    //Move model to look at cursor
    window.addEventListener('mousemove', (event) => {
      modelGroup.rotation.y = (event.clientX / window.innerWidth) - 0.5;
      modelGroup.rotation.x = (event.clientY / window.innerHeight) - 0.5;

      modelGroup.position.x = ((event.clientX / window.innerWidth) - 0.5) * 15;
      modelGroup.position.y = ((event.clientY / window.innerHeight) - 0.5) * -15;
    });

    //Resize reference on window size change

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
      //Time
      const elapsedTime = clock.getElapsedTime()
      //Render
      renderer.render(scene, camera)
      window.requestAnimationFrame(tick)
    }

    tick()


    return () => mountRef.current.removeChild(renderer.domElement);


  }, [])

  return (
    <div className='fixed h-full w-full top-0 left-0 -z-10' ref={mountRef} style={{ height: "100%" }}>

    </div>
  )
}
