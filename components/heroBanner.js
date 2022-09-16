import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

export default function HeroBanner() {
  const mountRef = useRef();
  useEffect(() => {
    const modelGroup = new THREE.Group();

    const loader = new GLTFLoader();
    const compressed = new DRACOLoader();
    compressed.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
    loader.setDRACOLoader(compressed)

    loader.load
      (
        //Rescource url
        'models/melanieDraco.gltf',
        (gltf) => {
          gltf.scene.traverse((node) => {
            if (!node.isMesh) return;

            node.material.wireframe = true;
            node.material.color = new THREE.Color(0xf75c03)
          });
          gltf.scene.scale.set(3, 3, 3)
          modelGroup.add(gltf.scene)
          
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
      //hempisphere light
      const hlight=new THREE.HemisphereLight(0xd90368, 0x64a6bd, 2)
      modelGroup.add(hlight)

      //Camera


    const camera = new THREE.PerspectiveCamera(75, size.width / size.height)

    if(window.innerWidth<568)
    {
      camera.position.z = 25

    }
    else{
      camera.position.z=15
    }

    scene.add(camera)

    //Renderer

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true});
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

    //Make model follow finger on touch screens

    window.addEventListener('touchmove',(event)=>{
      modelGroup.rotation.y = (event.touches[0].clientX / window.innerWidth) - 0.5;
      modelGroup.rotation.x = (event.touches[0].clientY / window.innerHeight) - 0.5;

      modelGroup.position.x = ((event.touches[0].clientX / window.innerWidth) - 0.5) * 15;
      modelGroup.position.y = ((event.touches[0].clientY / window.innerHeight) - 0.5) * -15;
    })

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
