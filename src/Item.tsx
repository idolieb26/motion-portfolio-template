import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { items } from "./data";

export function Item({ id }:any) {
  const { category, title }:any = items.find((item:any) => item.id === id);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        <Link to="/" />
      </motion.div>
      <div className="card-content-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={`images/${id}.jpg`} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2 className="text-white">{title}</h2>
          </motion.div>
          <motion.div className="text-white content-container" animate>
              {`Ceci est la description de ${title}`}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
