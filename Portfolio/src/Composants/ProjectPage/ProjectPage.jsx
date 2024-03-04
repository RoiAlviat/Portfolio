import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';

import Titlescreen from "../../Assets/Projets/breakloop/titlescreen.png"
import Slide1 from "../../Assets/Projets/breakloop/Slide1.jpg"
import Slide2 from "../../Assets/Projets/breakloop/Slide2.jpg"
import Slide3 from "../../Assets/Projets/breakloop/Slide3.jpg"
import Slide4 from "../../Assets/Projets/breakloop/Slide4.jpg"
import Slide5 from "../../Assets/Projets/breakloop/Slide5.jpg"
import Slide6 from "../../Assets/Projets/breakloop/Slide6.jpg"
import Slide7 from "../../Assets/Projets/breakloop/Slide7.jpg"
import Slide8 from "../../Assets/Projets/breakloop/Slide8.jpg"
import Slide9 from "../../Assets/Projets/breakloop/Slide9.jpg"
import "./ProjectPage.css"

function ProjectPage({projecth1, projectDesc,liDetails1, liDetails2, liDetails3, liDetails4, liDetails5, liDetails6, liDetails7,
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
      initialSlide={4}
      loop={true}
      slidesPerView={1}
      navigation={true}
    >
      <SwiperSlide><img src={Slide1}/></SwiperSlide>
      <SwiperSlide><img src={Slide2}/></SwiperSlide>
      <SwiperSlide><img src={Slide3}/></SwiperSlide>
      <SwiperSlide><img src={Slide4}/></SwiperSlide>
      <SwiperSlide style={{display:"flex", justifyContent:"center", alignItems:"center"}}><img src={Titlescreen}/></SwiperSlide>
      <SwiperSlide><img src={Slide5}/></SwiperSlide>
      <SwiperSlide><img src={Slide6}/></SwiperSlide>
      <SwiperSlide><img src={Slide7}/></SwiperSlide>
      <SwiperSlide><img src={Slide8}/></SwiperSlide>
      <SwiperSlide><img src={Slide9}/></SwiperSlide>
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
      </ul>
      <h3>Gestion de projet : </h3>
      <ul>
        <p className="italic">{p6}</p>
        <li>{liGP1}</li>
        <li>{liGP2}.</li>
        <li>{liGP3}</li>
        <li>{liGP4}</li>
      </ul>

      <h2>Making-of du projet</h2>
      <p className="italic center">Vers la fin de la vidéo (3:05), vous pouvoir voir un aperçu du jeu joué durant le jury.</p>
      <div className="youtube"><iframe width="860" height="315" src="https://www.youtube.com/embed/gqMoWAYzNoM" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
      
      <span className="end"></span>
    </main>
    </>
    )
}

export default ProjectPage