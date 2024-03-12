import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import ProjectPage2 from '../../Composants/ProjectPage2/ProjectPage2';
import Header from '../../Composants/Header/Header';

function Redux() {
    return (
        <><Header/>
        <ProjectPage2
        projecth1 = {"Argent Bank"}
  projectDesc = {"Il était question dans ce projet de transformer un site statique en site React en utilisant React-Router-Dom, et Redux pour changer le nom d'utilisateur en temps réel tout en l'actualisant dans la base de données"}
  liDetails4 = {""}
  liDetails5 = {"React"}
  liDetails6 = {"ReactRouterDom, Redux."}
  githublink={"https://github.com/RoiAlviat/ArgentBank-website"}
        /></>
    )
}

export default Redux