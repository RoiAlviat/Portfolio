import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';

import Incredible1 from "../../Assets/Projets/Incredible/Incredible1.png"
import Incredible2 from "../../Assets/Projets/Incredible/Incredible2.png"
import Incredible3 from "../../Assets/Projets/Incredible/Incredible3.png"
import Incredible4 from "../../Assets/Projets/Incredible/Incredible4.png"
import Incredible5 from "../../Assets/Projets/Incredible/Incredible5.png"
import Incredible6 from "../../Assets/Projets/Incredible/Incredible6.png"
import Incredible7 from "../../Assets/Projets/Incredible/Incredible7.png"
import Incredible8 from "../../Assets/Projets/Incredible/Incredible8.png"
import Incredible9 from "../../Assets/Projets/Incredible/Incredible9.png"
import Incredible10 from "../../Assets/Projets/Incredible/Incredible10.png"
import Incredible11 from "../../Assets/Projets/Incredible/Incredible11.png"
import Incredible12 from "../../Assets/Projets/Incredible/Incredible12.png"
import Incredible13 from "../../Assets/Projets/Incredible/Incredible13.png"
import Incredible14 from "../../Assets/Projets/Incredible/Incredible14.png"
import Incredible15 from "../../Assets/Projets/Incredible/Incredible15.png"
import "../ProjectPage/ProjectPage.css"

function ProjectPage4({projecth1, projectDesc,liDetails1, liDetails2, liDetails3, liDetails4, liDetails5, liDetails6, liDetails7,
                      h2section, h2section2, p1, p2, p3, p4, p5, p6, liGD1, liGD2, liGD3, liGD4, lip1, lip2, lin1, lin2, liGP1, liGP2}) {
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
      <SwiperSlide><img src={Incredible1}/></SwiperSlide>
      <SwiperSlide><img src={Incredible2}/></SwiperSlide>
      <SwiperSlide><img src={Incredible3}/></SwiperSlide>
      <SwiperSlide><img src={Incredible4}/></SwiperSlide>
      <SwiperSlide><img src={Incredible5}/></SwiperSlide>
      <SwiperSlide><img src={Incredible6}/></SwiperSlide>
      <SwiperSlide><img src={Incredible7}/></SwiperSlide>
      <SwiperSlide><img src={Incredible8}/></SwiperSlide>
      <SwiperSlide><img src={Incredible9}/></SwiperSlide>
      <SwiperSlide><img src={Incredible10}/></SwiperSlide>
      <SwiperSlide><img src={Incredible11}/></SwiperSlide>
      <SwiperSlide><img src={Incredible12}/></SwiperSlide>
      <SwiperSlide><img src={Incredible13}/></SwiperSlide>
      <SwiperSlide><img src={Incredible14}/></SwiperSlide>
      <SwiperSlide><img src={Incredible15}/></SwiperSlide>
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
      <p>{p3}</p>
      <h2>{h2section2}</h2>
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
      <ul>
        <li>{lip1}</li>
        <li>{lip2}.</li>
      </ul>
      <h3>Narration :</h3>
      <ul>
        <li>{lin1}.</li>
        <li>{lin2}</li>
      </ul>
      <h3>Gestion de projet :</h3>
      <ul>
        <li>{liGP1}</li>
        <li>{liGP2}</li>
      </ul>

      <h2>Teaser du projet</h2>
      <iframe width="860" height="315" src="https://www.youtube.com/embed/UaaHqQDnPM8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <span className="end"></span>
    </main>
    </>
    )
}

export default ProjectPage4