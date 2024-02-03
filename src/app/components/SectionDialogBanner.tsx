"use client"

import React, { useState, useRef } from 'react';
import Section from './Section';
import Styles from '../../app/css/sectionDialogo.module.css'
import StylesPage from '../../app/page.module.css'
import { useTranslation } from '../i18n/client'
import clsx from 'clsx';
import Image from 'next/image';


const SectionDialogo = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);

  return (
    <Section className={Styles.sectionEventBanner}>

      <div className={Styles.totalScreenBackgroung}>

        {/* <div className={Styles.decorBottom}></div> */}
        <div className={Styles.topWrap}>

          <p >"DIÁLOGO SOBRE EL IMPACTO DEL FINANCIAMIENTO 
            TERRITORIAL DIRECTO A PUEBLOS INDÍGENAS
            Y COMUNIDADES LOCALES EN MESOAMÉRICA"</p>
            <div className={Styles.imgWrap}>
            <Image
                  src={"../images/orangeSeparator.png"}
                  fill={true}
                  aria-hidden
                  alt={"separator"}
                  lang="es"
                  unoptimized={true}
                />
                </div>
          <p>13 y 14 de febrero</p>
          <p>San José, Costa Rica</p>

        </div>
      </div>

      <div className={Styles.decorBottom}></div> 
      <div className={Styles.decorBottom2}></div> 
      <div className={Styles.backGroundDecor}></div> 
    </Section>
  );
};

export default SectionDialogo;