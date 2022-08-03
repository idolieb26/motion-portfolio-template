import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const useIsMounted = () => {
    const isMounted = useRef(true)
    
    useEffect(
      () => () => {
        isMounted.current = false
      },
      []
    )
    
    return isMounted
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 2000;
const swipePower = (offset:number, velocity:number) => {
   return Math.abs(offset) * velocity;
};

const Carousel = ({covers}:any) => {
    const isMounted = useIsMounted()
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, covers.length, page);

    const paginate = (newDirection: number) => {
        if(isMounted.current) {
            setPage([page + newDirection, newDirection]);
        }
    };

    return (
        <div className="carousel-container">
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={page}
                    src={covers[imageIndex].url}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        ease: "easeIn"
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                        if(covers.length > 1) {
                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }
                    }}
                />
            </AnimatePresence>
            {   
                covers.length > 1 &&
                <>
                    <div className="next" onClick={() => paginate(1)}>
                        {"‣"}
                    </div>
                    <div className="prev" onClick={() => paginate(-1)}>
                        {"‣"}
                    </div>
                </>   
            }
        </div>
    );
};

export default Carousel