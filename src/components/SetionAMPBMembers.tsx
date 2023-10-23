"use client"

import React from 'react';
import Section from './Section';
import Styles from '../app/css/setionAMPBMembers.module.css'
import { useTranslation } from '../app/i18n'
import clsx from 'clsx';

const SetionAMPBMembers = async ({ lng }: { lng: string }) => {

  const { t } = await useTranslation(lng);




  return (
    <Section className={Styles.section3}>
      
      <div className={Styles.totalScreenBackgroung}>
      <h2>
        {t('section3.title')}
      </h2>
      <p className={Styles.mapText}>{t('section3.text1')}</p>
        <div className={Styles.personitas}></div>
        <div className={clsx(Styles.personitas, Styles.personitas2)}></div>
        <div className={clsx(Styles.personitas, Styles.personitas3)}></div>
        <div className={clsx(Styles.personitas, Styles.personitas4)}></div>
        <div className={clsx(Styles.personitas, Styles.personitas5)}></div>
        <div className={clsx(Styles.personitas, Styles.personitas6)}></div>
        <div className={clsx(Styles.personitas, Styles.personitas7)}></div>
        <div className={clsx(Styles.personitas, Styles.personitas8)}></div>
        <div className={clsx(Styles.personitas, Styles.personitas9)}></div>
        <div className={clsx(Styles.personitas, Styles.personitas10)}></div>

        <div className={clsx(Styles.orgs, Styles.org1)}>
          MOCAF NETWORK
        </div>
        <div className={clsx(Styles.orgs, Styles.org2)}>
          ACOFOP
        </div>

        <div className={clsx(Styles.orgs, Styles.org3)}>
          GUNA GENERAL CONGRESS

        </div>

        <div className={clsx(Styles.orgs, Styles.org4)}>
          EMBERÁ-WOUNAAN COMARCA
        </div>


        <div className={clsx(Styles.orgs, Styles.org5)}>
          YATAMA

        </div>

        <div className={clsx(Styles.orgs, Styles.org6)}>
          RIBCA

        </div>

        <div className={clsx(Styles.orgs, Styles.org7)}>
        FEPROAH


        </div>

        <div className={clsx(Styles.orgs, Styles.org8)}>
        MASTA


        </div>

      </div>
      
    </Section>
  );
};

export default SetionAMPBMembers;