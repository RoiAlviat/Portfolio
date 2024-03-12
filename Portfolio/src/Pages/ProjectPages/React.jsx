import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import ProjectPage3 from '../../Composants/ProjectPage3/ProjectPage3';
import Header from '../../Composants/Header/Header';

function ReactPro() {
    return (
        <>
        <Header/>
        <ProjectPage3 
        projecth1 = {"Kasa"}
  projectDesc = {"Il était question dans ce projet de construite une application React de location immobilière, en se basant sur une maquette pour le design et en utilisant ReactRouterDom. Il a donc fallu ajouté de manière dynamique les logements ainsi que les éléments liés à l'utilisateur et son logement."}
  liDetails5 = {"React"}
  liDetails6 = {"ReactRouterDom."}
  githublink={"https://github.com/RoiAlviat/kasa/tree/master"}  
        /></>
    )
}

export default ReactPro