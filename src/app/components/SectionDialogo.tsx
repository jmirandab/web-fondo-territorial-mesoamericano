"use client"

import React, { useState, useRef } from 'react';
import Section from './Section';
import Styles from '../../app/css/sectionDialogo.module.css'
import StylesPage from '../../app/page.module.css'
import { useTranslation } from '../i18n/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx';

import Link from 'next/link'

const objetivoGeneral = <div>
  <h3>Objetivo General:</h3>
  <p>Posicionar al Fondo Territorial Mesoamericano (FTM) como una herramienta eficaz para agilizar el financiamiento territorial directo y generar impactos positivos para los Pueblos Indígenas y Comunidades Locales, los bosques y la biodiversidad.</p>
</div>

const objetivosEspecificos = <div>
  <h3>Objetivos Específicos:</h3>
  <p>
    <ul>
      <li>Facilitar el intercambio de experiencias sobre el fortalecimiento del financiamiento territorial directo. </li>
      <li>Presentar experiencias de organizaciones de Pueblos Indígenas y Comunidades Locales en la implementación del financiamiento territorial directo. </li>
      <li>Actualizar sobre el compromiso de la cooperación internacional y filantrópica sobre los avances del financiamiento territorial directo en Mesoamérica. </li>
      <li>Proponer ideas y acuerdos para avanzar en los objetivos del financiamiento climático en la región mesoamericana. </li>
    </ul>
  </p>
</div>

const participantes = <div>
  <h3>Participantes:</h3>
  <p>
    <ul>
      <li>Donantes bilaterales y filantrópicos del Grupo de Financiación de la Tenencia de los Bosques (FTFG).</li>
      <li>Cooperación internacional vinculada a temas de conservación y cambio climático.</li>
      <li>ONG ́s socias estratégicas del FTM y AMPB.</li>
      <li>Organizaciones territoriales socias.</li>
      <li>Empresas privadas con programas efectivos de responsabilidad social empresarial en la región.</li>
    </ul>
  </p>
</div>

const SectionDialogo = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  const downloadUrl = `/docs/Agenda${lng.toUpperCase() == "ES" ? "ES" : "EN"}.pdf`
  return (
    <Section className={Styles.sectionQuejas}>

      <div className={Styles.totalScreenBackgroung}>

        {/* <div className={Styles.decorBottom}></div> */}
        <div className={Styles.topWrap}>
          <div className={Styles.topText}>
            <div className={Styles.allignColumn}>
              <div className={Styles.half}>
                {objetivoGeneral}
                {objetivosEspecificos}
              </div>
              {participantes}
            </div>
            <p>El evento es cerrado, pero se realizarán transmisiones en vivo de paneles, debates y presentaciones mediante la plataforma Zoom y se transmitirán en vivo en la página <Link target="_blank" href="https://www.facebook.com/alianzabosques/">Facebook</Link>  y <Link target="_blank" href="https://www.youtube.com/channel/UCpjaCSauXCxms3PLMxFkgEA">Youtube</Link> de la AMPB. En caso de no poder asistir en vivo, las sesiones quedarán grabadas en la página de <Link target="_blank" href="https://www.facebook.com/alianzabosques/">Facebook</Link> y <Link target="_blank" href="https://www.youtube.com/channel/UCpjaCSauXCxms3PLMxFkgEA">Youtube</Link> de la Alianza Mesoamericana de Pueblos y Bosques.     </p>
            <p>{t('evento_dialogo.agendatext')}</p>


            <a className={Styles.downloadLink} href={downloadUrl} download>
              <FontAwesomeIcon className={Styles.icon} icon={faFilePdf} />
              {t('evento_dialogo.downloadpdf')}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SectionDialogo;