

import React from 'react';
import Section from './Section';
import Styles from '../../app/css/setionAMPBMembers.module.css'
import { useTranslation } from '../i18n'
import clsx from 'clsx';

const SetionAMPBMembers = async ({ lng }: { lng: string }) => {

  const { t } = await useTranslation(lng);

  return (
    <Section id="AMPBMembers" className={Styles.section3}>
      <h2>
        {t('section3.title')}
      </h2>
      <div className={Styles.totalScreenBackgroung}>

        <p className={Styles.mapTextDesktop}>{t('section3.text1')}</p>
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


        <div className={clsx(Styles.orgs, Styles.orgN1)}>
          <div className={Styles.leftLabel}>
          <span aria-label={t('section3.org1') + ", Mexico"} className={Styles.nameWidth}>{t('section3.org1')}</span>
            <span className={Styles.leftLabelLine}></span>
          </div>
        </div>


        <div className={clsx(Styles.orgs, Styles.orgN2)}>
          <div aria-label={t('section3.org2') + ", Guatemala"} className={Styles.leftLabel}>

            {t('section3.org2')}
            <span className={Styles.leftLabelLine}></span>
          </div>
        </div>

        <div className={clsx(Styles.orgs, Styles.orgN3)}>
          <div className={Styles.leftLabel}>
          <span aria-label={t('section3.org3') + ", Panamá"} className={Styles.nameWidth}>{t('section3.org3')}</span>
            <span className={Styles.leftLabelLine}></span>

          </div>
        </div>

        <div className={clsx(Styles.orgs, Styles.orgN4)}>
          <div aria-label={t('section3.org4') + ", Panamá"} className={Styles.leftLabel}>

            {t('section3.org4')}
            <span className={Styles.leftLabelLine}></span>
          </div>
        </div>

        <div className={clsx(Styles.orgs, Styles.orgN5)}>
          <div className={Styles.leftLabel}>
            <span aria-label={t('section3.org5') + ", Nicaragua"} className={Styles.leftLabelLine}></span>
            {t('section3.org5')}

          </div>
        </div>


        <div className={clsx(Styles.orgs, Styles.orgN6)}>
          <div className={Styles.leftLabel}>
            <span  aria-label={t('section3.org6') + ", Costa Rica"}  className={Styles.leftLabelLine}></span>
            {t('section3.org6')}

          </div>
        </div>

        <div className={clsx(Styles.orgs, Styles.orgN7)}>
          <div  aria-label={t('section3.org7') + ", Honduras"} className={Styles.leftLabel}>
            {t('section3.org7')}
            <span className={Styles.leftLabelLine}></span>

          </div>
        </div>

        <div className={clsx(Styles.orgs, Styles.orgN8)}>
          <div aria-label={t('section3.org8') + ", Honduras"}  className={Styles.leftLabel}>
            {t('section3.org8')}
            <span className={Styles.leftLabelLine}></span>

          </div>
        </div>


        <div className={clsx(Styles.orgs, Styles.orgN9)}>
          <div className={Styles.leftLabel}>
            <span  aria-label={t('section3.org9') + ", Guatemala"} className={Styles.nameWidth}>{t('section3.org9')}</span>
            <span className={Styles.leftLabelLine}></span>

          </div>
        </div>

        <div className={clsx(Styles.orgs, Styles.orgN10)}>
          <div className={Styles.leftLabel}>
            <span className={Styles.leftLabelLine}></span>

            <span aria-label={t('section3.org10') + ", Guatemala"}  className={Styles.nameWidth}>{t('section3.org10')}</span>

          </div>
        </div>


      </div>
      <p className={Styles.mapTextMobile}>{t('section3.text1')}</p>
    </Section>
  );
};

export default SetionAMPBMembers;