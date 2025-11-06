import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Stars } from '@react-three/drei'
import * as THREE from 'three'

// 행성 컴포넌트
function Planet({ 
  position, 
  size, 
  color, 
  speed,
  name 
}: { 
  position: [number, number, number]
  size: number
  color: string
  speed: number
  name: string
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const initialX = position[0]

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime()
      meshRef.current.position.x = Math.cos(time * speed) * initialX
      meshRef.current.position.z = Math.sin(time * speed) * initialX
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <group>
      <Sphere ref={meshRef} args={[size, 32, 32]} position={position}>
        <meshStandardMaterial color={color} />
      </Sphere>
    </group>
  )
}

// 태양 컴포넌트
function Sun() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
    }
  })

  return (
    <Sphere ref={meshRef} args={[2, 32, 32]} position={[0, 0, 0]}>
      <meshStandardMaterial
        color="#FDB813"
        emissive="#FDB813"
        emissiveIntensity={0.5}
      />
    </Sphere>
  )
}

export default function SolarSystemSimulator() {
  const planets = [
    { name: '수성', position: [5, 0, 0] as [number, number, number], size: 0.4, color: '#8C7853', speed: 0.4 },
    { name: '금성', position: [7, 0, 0] as [number, number, number], size: 0.9, color: '#FFC649', speed: 0.3 },
    { name: '지구', position: [10, 0, 0] as [number, number, number], size: 1, color: '#4A90E2', speed: 0.2 },
    { name: '화성', position: [13, 0, 0] as [number, number, number], size: 0.5, color: '#E27B58', speed: 0.15 },
    { name: '목성', position: [20, 0, 0] as [number, number, number], size: 2, color: '#C88B3A', speed: 0.08 },
    { name: '토성', position: [28, 0, 0] as [number, number, number], size: 1.8, color: '#FAD5A5', speed: 0.06 },
  ]

  return (
    <div className="w-full h-[600px] bg-black rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 30, 40], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 0, 0]} intensity={2} />
        <Stars radius={300} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <Sun />
        {planets.map((planet) => (
          <Planet key={planet.name} {...planet} />
        ))}

        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          minDistance={10}
          maxDistance={100}
        />
      </Canvas>
    </div>
  )
}

