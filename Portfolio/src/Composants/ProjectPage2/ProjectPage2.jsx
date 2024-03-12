import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';

import Argentbankhome from "../../Assets/Projets/ArgentBank/Home.png"
import ArgentbankProfil from "../../Assets/Projets/ArgentBank/Profil.png"
import ArgentbankLogin from "../../Assets/Projets/ArgentBank/login.png"


import "../ProjectPage/ProjectPage.css"

function ProjectPage2({projecth1, projectDesc,liDetails5, liDetails6,githublink
                      }) {
    return (
        <>
        <div className="headerbis">
      
      <h1>{projecth1}</h1>
    </div>
    <main className="main-project-page">
    <Swiper
    modules={[EffectCards, Navigation]} effect={'cards'}
    style={{marginTop:"3vh"}}
      spaceBetween={50}
      initialSlide={2}
      loop={true}
      slidesPerView={1}
      navigation={true}
    >
      <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}><img src={ArgentbankProfil}/></SwiperSlide>
      <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}><img src={Argentbankhome}/></SwiperSlide>
      <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}><img src={ArgentbankLogin}/></SwiperSlide>

    </Swiper>
      <h2>Description du projet</h2>
      <p>{projectDesc}</p>
      <h3 style={{marginTop:"3vh", marginBottom:"3vh"}}>Fiche technique :</h3>
      <ul>
        <li><span className="bolded">Framework :</span> {liDetails5}</li>
        <li><span className="bolded">Librairies :</span> {liDetails6}</li>
      </ul>
      <a className="link-center" href={githublink} target="_blank"><p style={{color:"white"}}>Voir le projet sur Github.</p></a>
        <span className="end"></span>
    </main>
    </>
    )
}

export default ProjectPage2