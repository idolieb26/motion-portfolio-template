import { AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Timeline from './components/Timeline';
import ProjectItem from "./components/ProjectItem";
import Projects from "./components/Projects";

const Index = () => {
    let { id } = useParams();
    const imageHasLoaded = true;
    
    return (
        <>
            <Hero />
            <Projects selectedId={id} />
            <Technologies />
            <Timeline />
            <AnimatePresence>
                {id && imageHasLoaded && <ProjectItem {...id} key="item" />}
            </AnimatePresence>
        </>
    )
};

export default Index;
