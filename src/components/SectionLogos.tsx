import React from 'react';
import Section from './Section';

import Styles from '../app/css/sectionLogos.module.css'

import clsx from 'clsx';
import { useTranslation } from '../app/i18n'
import logosOrgs from '../constants/logosOrgs'
import Image from 'next/image';
import Link from 'next/link';


const SectionLogos = async ({ lng }: { lng: string }) => {

  let orglist = logosOrgs.map((org, indx) => {
    return (<li className={Styles.card} key={org.name}>
      <div className={clsx(Styles.logoWrap, Styles.logoWrap + indx )}>
        <Image
          className={Styles.imgLogo}
          src={"/images/" + org.file}
          fill={true}
          alt={org.name + " logo"}          
          unoptimized={true}
        />
      </div>
      <div>
        <div><strong>{org.name}</strong></div>
        <Link href={"https://"+org.url} target="_blank">{org.url}</Link>
      </div>
    </li>)
  })

  const { t } = await useTranslation(lng);
  return (
    <Section className={Styles.sectionLogos}>

      <div className={Styles.totalScreenBackgroung}>
        <h2>  
          {t('sectionLogos.title')}
        </h2>
        <ol className={Styles.orgslist}>
          {orglist}
        </ol>
      </div>
    </Section>
  );
};

export default SectionLogos;