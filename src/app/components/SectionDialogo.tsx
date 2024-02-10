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


const SectionDialogo = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  const isSpanish = lng.toUpperCase() == "ES";
  const downloadAgendaUrl = `/docs/Agenda${isSpanish ? "ES" : "EN"}.pdf`
  const downloadNoteUrl = isSpanish ? "/docs/nota_concepto.pdf" : "/docs/concept_note.pdf";

  const eventLinksAndSSMM = isSpanish ? <>
    <p>Si bien el evento se llevará a cabo en un entorno cerrado, queremos asegurarte que podrás participar activamente a través de nuestras transmisiones en vivo en español, las cuales estarán disponibles en la página de <Link target="_blank" href="https://www.facebook.com/alianzabosques/">Facebook</Link> y <Link target="_blank" href="https://www.youtube.com/channel/UCpjaCSauXCxms3PLMxFkgEA">Youtube</Link> de la Alianza Mesoamericana de Pueblos y Bosques. Para aquellos que no hablen español, ofreceremos la opción de unirse a través de <Link target="_blank" href="https://us06web.zoom.us/j/81501342987?pwd=Ufnddj6ajNuiJb3HnoHxzkxerP5ArE.1">Zoom</Link>, donde contaremos con interpretación al inglés.</p>
    <p>Así que, no importa tu disponibilidad o idioma, ¡te invitamos a que te unas a nosotros para formar parte de esta experiencia en cualquier momento que te resulte conveniente! Estamos emocionados de compartir este evento contigo y esperamos que disfrutes de todas las sesiones tanto en vivo como en su versión grabada.</p>
  </>
    : <>
      <p>While the event will take place in a closed setting, we want to assure you that you can actively participate through our live broadcasts in Spanish, which will be available on the <Link target="_blank" href="https://www.facebook.com/alianzabosques/">Facebook</Link> and <Link target="_blank" href="https://www.youtube.com/channel/UCpjaCSauXCxms3PLMxFkgEA">Youtube</Link> pages of the Mesoamerican Alliance of Peoples and Forests. For those who do not speak Spanish, we will offer the option to join via <Link target="_blank" href="https://us06web.zoom.us/j/81501342987?pwd=Ufnddj6ajNuiJb3HnoHxzkxerP5ArE.1">Zoom</Link>, where English interpretation will be provided.</p>
      <p>So, regardless of your availability or language, we invite you to join us and be part of this experience at any time that suits you! We are excited to share this event with you and hope you enjoy all the sessions, both live and recorded versions.</p>
    </>

  const participants = isSpanish ? <div>
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
    : <div>
      <h3>Participants:</h3>
      <p>
        <ul>
          <li>Bilateral and philanthropic donors from the Forest Tenure Financing Group (FTFG).</li>
          <li>International cooperation agencies involved in conservation and climate change issues.</li>
          <li>Strategic partner NGOs of the FTM and AMPB.</li>
          <li>Partner territorial organizations.</li>
          <li>Private companies with effective corporate social responsibility programs in the region.</li>
        </ul>
      </p>
    </div>

  const GeneralObjective = isSpanish ? <div>
    <h3>Objetivo General:</h3>
    <p>Posicionar al Fondo Territorial Mesoamericano (FTM) como una herramienta eficaz para agilizar el financiamiento territorial directo y generar impactos positivos para los Pueblos Indígenas y Comunidades Locales, los bosques y la biodiversidad.</p>
  </div>
    : <div>
      <h3>General Objective:</h3>
      <p>To position the Mesoamerican Territorial Fund (FTM) as an effective tool to streamline direct territorial financing and generate positive impacts for Indigenous Peoples and Local Communities, forests, and biodiversity.</p>
    </div>

  
const SpecificObjectives = isSpanish? <div>
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
: <div>
<h3>Specific Objectives:</h3>
<p>
  <ul>
    <li>Facilitate the exchange of experiences on strengthening direct territorial financing. </li>
    <li>Present experiences from Indigenous Peoples' and Local Communities' organizations in the implementation of direct territorial financing.</li>
    <li>Provide updates on the commitment of international cooperation and philanthropy regarding advances in direct territorial financing in Mesoamerica. </li>
    <li>Propose ideas and agreements to advance the objectives of climate financing in the Mesoamerican region. </li>
  </ul>
</p>
</div>


  return (
    <Section className={Styles.sectionQuejas}>

      <div className={Styles.totalScreenBackgroung}>
        <div className={Styles.topWrap}>
          <div className={Styles.topText}>
            <div className={Styles.allignColumn}>
              <div className={Styles.half}>
                {GeneralObjective}
                {SpecificObjectives}
              </div>
              {participants}
            </div>
            {eventLinksAndSSMM}
            <p>{t('evento_dialogo.agendatext')}</p>

            <a className={Styles.downloadLink} href={downloadAgendaUrl} target='_blank'>
              <FontAwesomeIcon className={Styles.icon} icon={faFilePdf} />
              {t('evento_dialogo.downloadpdf')}
            </a>

            <a className={Styles.downloadLink} href={downloadNoteUrl} target='_blank'>
              <FontAwesomeIcon className={Styles.icon} icon={faFilePdf} />
              {t('evento_dialogo.downloadNotepdf')}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SectionDialogo;