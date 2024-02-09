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

          <p >{t('evento_dialogo.title')}</p>
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
          <p>{t('evento_dialogo.date')} <br />San José, Costa Rica</p>

        </div>
      </div>

      <div className={Styles.decorBottom}></div> 
      <div className={Styles.decorBottom2}></div> 
      <div className={Styles.backGroundDecor}></div> 
    </Section>
  );
};

export default SectionDialogo;