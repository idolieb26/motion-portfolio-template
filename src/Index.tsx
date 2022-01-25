import { AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import Timeline from '../components/Timeline';
import { Item } from "./Item";
import { List } from "./List";

type Props = {};

const Index = (props: Props) => {
    let { id } = useParams();
    const imageHasLoaded = true;
    
    return (
        <>
            <Hero />
            <List selectedId={id} />
            <Technologies />
            <Timeline />
            <Projects />
            <AnimatePresence>
                {id && imageHasLoaded && <Item id={id} key="item" />}
            </AnimatePresence>
        </>
    )
};

export default Index;
