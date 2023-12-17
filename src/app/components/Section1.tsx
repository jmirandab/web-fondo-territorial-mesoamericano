import React from 'react';
import Section from './Section';
import Styles from '../../app/css/setion1.module.css'
import clsx from 'clsx';


const Section1 = async ({lng}: {lng:string}) => {
    
    return (
        <Section className={Styles.section1}>
            <div suppressHydrationWarning className={Styles.totalScreenBackgroung}>
                <div className={Styles.layerBackGround}>
                    <div className={Styles.comunity}>
                    </div>
                    {/* <div className={Styles.comunityWave}>
                    </div> */}
                    <div className={Styles.Left}>
                    </div>
                    <div className={Styles.RightJaguar}>
                    </div>
                </div>
                <div className={Styles.layer1}>
                <div className={Styles.titleGroup}>
                    
                    <div className={clsx(Styles.logo)}>

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
