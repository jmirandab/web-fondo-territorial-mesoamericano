"use client"

import React, { useState, useRef } from 'react';
import Section from './Section';
import Styles from '../../app/css/sectionDialogo.module.css'
import StylesPage from '../../app/page.module.css'
import { useTranslation } from '../i18n/client'
import clsx from 'clsx';

import Link from 'next/link'


const SectionDialogo = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);

  return (
    <Section className={Styles.sectionQuejas}>

      <div className={Styles.totalScreenBackgroung}>

        {/* <div className={Styles.decorBottom}></div> */}
        <div className={Styles.topWrap}>
          <div className={Styles.topText}>
            <h3>Objetivo General:</h3>
            Posicionar al Fondo Territorial Mesoamericano (FTM) como una herramienta eficaz para agilizar el financiamiento territorial directo y generar impactos positivos.

            <h3>Objetivos Específicos:</h3>
            <ul>
              <li>Facilitar el intercambio de experiencias sobre el desarrollo del financiamiento territorial directo. </li>
              <li>Presentar experiencias de organizaciones de Pueblos Indígenas y Comunidades Locales en la implementación del financiamiento territorial directo. </li>
              <li>Actualizar sobre el compromiso del FTFG y los avances del financiamiento territorial directo en Mesoamérica. </li>
              <li>Proponer ideas y acuerdos para avanzar en los objetivos del financiamiento climático en la región mesoamericana. </li>
            </ul>
            <h3>PARTICIPANTES:</h3>
            <ul>
              <li>Donantes bilaterales y filantrópicos del Grupo de Financiación de la Tenencia de los Bosques (FTFG).</li>
              <li>Cooperación internacional vinculada a temas de conservación y cambio climático.</li>
              <li>ONG ́s socias estratégicas del FTM y AMPB.</li>
              <li>Organizaciones territoriales socias.</li>
              <li>Empresas privadas con programas efectivos de responsabilidad social empresarial en la región.</li>
            </ul>
            <p>El evento es cerrado, pero se realizarán transmisiones en vivo de paneles, debates y presentaciones mediante la plataforma Zoom y se transmitirán en vivo en la página <Link target="_blank" href="https://www.facebook.com/alianzabosques/">Facebook</Link>  y <Link target="_blank" href="https://www.youtube.com/channel/UCpjaCSauXCxms3PLMxFkgEA">Youtube</Link> de la AMPB. En caso de no poder asistir en vivo, las sesiones quedarán grabadas en la página de <Link target="_blank" href="https://www.facebook.com/alianzabosques/">Facebook</Link> y <Link target="_blank" href="https://www.youtube.com/channel/UCpjaCSauXCxms3PLMxFkgEA">Youtube</Link> de la Alianza Mesoamericana de Pueblos y Bosques.

            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SectionDialogo;