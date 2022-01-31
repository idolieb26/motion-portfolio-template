import { Loader, PresentationControls, ContactShadows } from "@react-three/drei";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Mobile from "./Mobile";

const HeroContent = () => (
    <div className="">
        <h1 className='text-4xl text-white'>
            Bienvenue sur<br />
            mon portfolio
        </h1>
        <div className='text-white'>
            Mon objectif est de vous rendre inoubliable !
        </div>
        <div className="my-8">
            <a href="https://www.google.com" className="btngrad text-white px-8 py-4 my-4 rounded-full shadow-lg">
                Bouton
            </a>
        </div>
    </div>
)

const Phone = () => (
    <Canvas style={{touchAction: 'none'}}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
            <PresentationControls
                global={false} 
                zoom={1}
                rotation={[0, -Math.PI / 4, 0]}
                polar={[0, Math.PI / 4]}
                azimuth={[-Math.PI / 4, Math.PI / 4]}
            >
                <Mobile />
                <ContactShadows frames={10} position={[0, -1.05, 0]} scale={10} blur={2} far={10} />
            </PresentationControls>
        </Suspense>
    </Canvas>
)

const Hero = () => {
    return (
        <section className='flex flex-row items-center justify-center my-10 h-[75vh] sm:h-screen'>
            <div className="hidden sm:grid grid-cols-2 h-full w-[100vw] md:w-[90vw] lg:w-[75vw]">
                <HeroContent />
                <Phone />
            </div>
            <div className="grid sm:hidden grid-cols-1 h-full">
                <Phone />
                <HeroContent />
            </div>
            <Loader />
        </section>
    )
}

export default Hero
