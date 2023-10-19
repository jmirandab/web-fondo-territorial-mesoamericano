import React from 'react';
import Section from './Section';

import Styles from '../app/css/sectionGovernanceLawEntrepreneurships.module.css'
import StylesPage from '../app/page.module.css'
import clsx from 'clsx';
import { useTranslation } from '../app/i18n'

const Section7 = async ({ lng }: { lng: string }) => {

  const { t } = await useTranslation(lng);
  return (
    <Section >
      <div className={Styles.totalScreenBackgroung}>

        <ol className={clsx(Styles.aims, StylesPage.green_card)}>
          <h2>
            {t('SectionGovernanceLawEntrepreneurships.title1')}
          </h2>
          <li >
          <strong>{t('SectionGovernanceLawEntrepreneurships.g1SubtTitle1')}</strong>
            {t('SectionGovernanceLawEntrepreneurships.g1SubtText1')}
          </li>
          <li>
            <strong>{t('SectionGovernanceLawEntrepreneurships.g1SubtTitle2')}</strong>
            {t('SectionGovernanceLawEntrepreneurships.g1SubtText2')}

          </li>
        </ol>

        <ol className={clsx(Styles.aims, StylesPage.green_card)}>
          <h2>
            {t('SectionGovernanceLawEntrepreneurships.title2')}
          </h2>
          <li>
            <strong>{t('SectionGovernanceLawEntrepreneurships.g2SubtTitle1')}</strong>
            {t('SectionGovernanceLawEntrepreneurships.g2SubtText1')}
          </li>
          <li>
            <strong>{t('SectionGovernanceLawEntrepreneurships.g2SubtTitle2')}</strong>
            {t('SectionGovernanceLawEntrepreneurships.g2SubtText2')}
          </li>
          <li>
            <strong>{t('SectionGovernanceLawEntrepreneurships.g2SubtTitle3')}</strong>
            {t('SectionGovernanceLawEntrepreneurships.g2SubtText3')}
          </li>
          <li>
            <strong>{t('SectionGovernanceLawEntrepreneurships.g2SubtTitle4')}</strong>
            {t('SectionGovernanceLawEntrepreneurships.g2SubtText5')}
          </li>

        </ol>
      </div>
    </Section>
  );
};

export default Section7;