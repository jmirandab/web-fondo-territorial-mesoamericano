import React from 'react';
import Section from './Section';
import Styles from '../app/css/setion1.module.css'
import { useTranslation } from '../app/i18n'


const Section1 = async ({lng}: {lng:string}) => {
    
    const { t } = await useTranslation(lng)
    return (
        <Section className={Styles.section1}>
            <div className={Styles.totalScreenBackgroung}>
                <div className={Styles.layerBackGround}>
                    <div className={Styles.comunity}>
                    </div>
                    <div className={Styles.Left}>
                    </div>
                    <div className={Styles.RightJaguar}>
                    </div>
                </div>
                <div className={Styles.layer1}>
                <div className={Styles.titleGroup}>
                    <h1>
                        {t('topH1')}
                    </h1>
                    <div><h2>{t('subH1')}</h2>  </div>
                    <div className={Styles.logo}>

                    </div>
                </div>
                <aside>
                    <ul className={Styles.socialMedia}>
                        <li>
                            <a className={Styles.fb}>

                            </a>
                        </li>
                        <li>
                            <a className={Styles.email}>

                            </a>
                        </li>
                        <li>
                            <a className={Styles.x}>

                            </a>
                        </li>

                    </ul>
                </aside>  
                </div>
                
            </div>
        </Section>
    );
};

export default Section1;
