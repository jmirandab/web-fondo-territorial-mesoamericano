import React from 'react';
import Section from './Section';
import Styles from '../app/css/setionAMPBMembers.module.css'
import { useTranslation } from '../app/i18n'

const SetionAMPBMembers = async ({lng}: {lng:string}) => {

  const { t } = await useTranslation(lng);
  return (
    <Section  className={Styles.section3}>
        <div className={Styles.totalScreenBackgroung}>
          <h2>
            {t('section3.title')}
          </h2>
          <p>{t('section3.text1')}</p>
        </div>
    </Section>
  );
};

export default SetionAMPBMembers;