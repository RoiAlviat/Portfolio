import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';

import RootyScreen from "../../Assets/Projets/rootytrail/RootyScreen.png"
import Rooty1 from "../../Assets/Projets/rootytrail/Rooty1.png"
import Rooty2 from "../../Assets/Projets/rootytrail/Rooty2.png"
import Rooty3 from "../../Assets/Projets/rootytrail/Rooty3.png"
import Rooty4 from "../../Assets/Projets/rootytrail/Rooty4.png"
import Rooty5 from "../../Assets/Projets/rootytrail/Rooty5.png"
import Rooty6 from "../../Assets/Projets/rootytrail/Rooty6.png"
import Rooty7 from "../../Assets/Projets/rootytrail/Rooty7.png"


import "../ProjectPage/ProjectPage.css"

function ProjectPage2({projecth1, projectDesc,liDetails1, liDetails2, liDetails3, liDetails4, liDetails5, liDetails6, liDetails7,
                      h2section, h2section2, p1, p2, p3, p4, p5, p6, liGD1, liGD2, liGD3, liGP1, liGP2, liGP3, liGP4}) {
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
      initialSlide={3}
      loop={true}
      slidesPerView={1}
      navigation={true}
    >
      <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}><img src={Rooty1}/></SwiperSlide>
      <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}><img src={Rooty2}/></SwiperSlide>
      <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}><img src={Rooty3}/></SwiperSlide>
      <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}><img src={RootyScreen}/></SwiperSlide>
      <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}><img src={Rooty4}/></SwiperSlide>
      <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}><img src={Rooty5}/></SwiperSlide>
      <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}><img src={Rooty6}/></SwiperSlide>
      <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}><img src={Rooty7}/></SwiperSlide>

    </Swiper>
      <h2>Description du projet</h2>
      <p>{projectDesc}</p>
      <h3 className='h3-project-margin'>Contraintes liées au projet :</h3>
      <ul>
        
        <li><span className="bolded">Equipe :</span> {liDetails1}</li>
        <li><span className="bolded">Durée :</span> {liDetails2}</li>
        <li><span className="bolded">Sujet :</span> {liDetails3}</li>
      </ul>
      <h3>Fiche technique :</h3>
      <ul>
        <li><span className="bolded">Moteur :</span> {liDetails5}</li>
        <li><span className="bolded">Plateforme :</span> {liDetails6}</li>
        <li><span className="bolded">Nombre de joueurs :</span> {liDetails7}</li>
      </ul>
      <h2>{h2section}</h2>
      <p>{p1}</p>
      <p>{p2}</p>
      <h2>{h2section2}</h2>
      <p>{p3}</p>
      <a className="link-center" href="https://globalgamejam.org/2023/games/rooty-trail-6" target="_blank"><p>Jouez au jeu en le téléchargeant ici.</p></a>
        <span className="end"></span>
    </main>
    </>
    )
}

export default ProjectPage2