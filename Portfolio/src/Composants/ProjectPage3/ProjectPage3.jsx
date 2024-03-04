import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';

import Mao1 from "../../Assets/Projets/Mao/Mao1.png"
import Mao2 from "../../Assets/Projets/Mao/Mao2.png"
import Mao3 from "../../Assets/Projets/Mao/Mao3.png"
import Mao4 from "../../Assets/Projets/Mao/Mao4.png"
import Mao5 from "../../Assets/Projets/Mao/Mao5.png"
import Mao6 from "../../Assets/Projets/Mao/Mao6.png"
import Mao7 from "../../Assets/Projets/Mao/Mao7.png"
import Mao8 from "../../Assets/Projets/Mao/Mao8.png"
import "../ProjectPage/ProjectPage.css"

function ProjectPage3({projecth1, projectDesc,liDetails1, liDetails2, liDetails3, liDetails4, liDetails5, liDetails6, liDetails7,
                      h2section, h2section2, p1, p2, p3, p4, p5, p6, Prograp, lip1, lip2, np1, lin1, lin2, liGD1, liGD2, liGD3, liGD4, liGP1, liGP2, liGP3, liGP4}) {
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
      initialSlide={4}
      loop={true}
      slidesPerView={1}
      navigation={true}
    >
      <SwiperSlide><img src={Mao1}/></SwiperSlide>
      <SwiperSlide><img src={Mao2}/></SwiperSlide>
      <SwiperSlide><img src={Mao3}/></SwiperSlide>
      <SwiperSlide><img src={Mao4}/></SwiperSlide>
      <SwiperSlide><img src={Mao5}/></SwiperSlide>
      <SwiperSlide><img src={Mao6}/></SwiperSlide>
      <SwiperSlide><img src={Mao7}/></SwiperSlide>
      <SwiperSlide><img src={Mao8}/></SwiperSlide>
    </Swiper>
      <h2>Description du projet</h2>
      <p>{projectDesc}</p>
      <h3 className='contrainte'>Contraintes liées au projet :</h3>
      <ul>
        
        <li><span className="bolded">Equipe :</span> {liDetails1}</li>
        <li><span className="bolded">Durée :</span> {liDetails2}</li>
        <li><span className="bolded">Sujet :</span> {liDetails3}</li>
      </ul>
      <h3>Fiche technique :</h3>
      <ul>
        <li><span className="bolded">Genre :</span> {liDetails4}</li>
        <li><span className="bolded">Moteur :</span> {liDetails5}</li>
        <li><span className="bolded">Plateforme :</span> {liDetails6}</li>
        <li><span className="bolded">Nombre de joueurs :</span> {liDetails7}</li>
      </ul>
      <h2>{h2section}</h2>
      <p>{p1}</p>
      <p>{p2}</p>
      <h2>{h2section2}</h2>
      <p>{p3}</p>
      <p>{p4}</p>
      <h2>Mon rôle</h2>
      <h3>Game Design & Level Design :</h3>
      <ul>
        <p className="italic">{p5}</p>
        <li>{liGD1}</li>
        <li>{liGD2}</li>
        <li>{liGD3}</li>
        <li>{liGD4}</li>
      </ul>
      <h3>Programmation : </h3>
      <p className="italic">{Prograp}</p>
      <ul>
        <li>{lip1}</li>
        <li>{lip2}.</li>
      </ul>
      <h3>Narration :</h3>
      <p className='italic'>{np1}</p>
      <ul>
        <li>{lin1}.</li>
        <li>{lin2}</li>
      </ul>
      <h3>Gestion de projet :</h3>
      <p class="italic">{p6}</p>

      <h2>Apercu du projet</h2>
      <div className="youtube"><iframe width="860" height="315" src="https://www.youtube.com/embed/7SVCVStDMzM?start=332" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
      
      <span className="end"></span>
    </main>
    </>
    )
}

export default ProjectPage3