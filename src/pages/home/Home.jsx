import "./Home.scss"

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Plant from '../../components/plant/Plant'

function Home() {

  return (
		<div className="home">
			<Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 6, 10] }} >
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<Suspense fallback={null}>
          <Plant />
        </Suspense>
			</Canvas>
		</div>
  )
}

export default Home
