import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { projects } from '../../constants/projects';
import { IProjectItem, IProject } from '../Types';
import { CgClose } from "react-icons/cg"
import { FaExternalLinkAlt, FaCode } from "react-icons/fa"
import { useScrollConstraints } from "../../utils/use-scroll-constraints";
import { useWheelScroll } from "../../utils/use-wheel-scroll";
import { useQuery, useApolloClient } from '@apollo/client';
import { GET_PROJECTS } from '../../utils/fetchData'

const ProjectItem = () => {
  let location = useLocation();
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <>Loading...</>;
  if (error) return <>Error! {error.message}</>;

  let projects = data?.projects?.data
  const project = projects.find((proj:IProject) => `/${proj.attributes.slug}` === location.pathname)
  
  const { title, slug, cover, date, category, techs, description, source, url }:IProjectItem = project.attributes
  console.log(slug)
  
  const isSelected = true
  const dismissDistance = 100;
  const navigate = useNavigate();
  const y = useMotionValue(0);
  const zIndex = useMotionValue(isSelected ? 2 : 0);
  const cardRef = useRef(null);
  const constraints = useScrollConstraints(cardRef, isSelected);
  
  function checkSwipeToDismiss() {
    y.get() > dismissDistance && navigate("/");
  }

  function checkZIndex(latest:any) {
    if (isSelected) {
      zIndex.set(2);
    } else if (!isSelected && latest.scaleX < 1.01) {
      zIndex.set(0);
    }
  }

  const containerRef = useRef(null);
  if(containerRef !== null) {
    useWheelScroll(
      containerRef,
      y,
      constraints,
      checkSwipeToDismiss,
      isSelected
    );
  }
  
  return (
    <div ref={containerRef}>
      coucou
    </div>
  );
}

export default ProjectItem