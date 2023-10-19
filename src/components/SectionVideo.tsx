"use client"
import React from 'react';
import Section from './Section';
import Styles from '../app/css/setionVideo.module.css'
//]import video from '../../public/Fondo Territorial Mesoamericano.mp4'


const Section1 = async () => {

    return (
        <Section id="video"  className={Styles.sectionVideo}>
            <div  className={Styles.totalScreenBackgroung}>



                <iframe className={Styles.videoWraper} width="560" height="315" src="https://www.youtube.com/embed/m7sPTFwCWUE?si=iu0KbJAX-_o3rQgj" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> 
            </div>
        </Section>
    );
};

export default Section1;
