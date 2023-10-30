"use client"
import { useEffect } from 'react';

import styles from './page.module.css'
import { languages } from '../config/initi18n';


export default function Home() {

  useEffect(() => {
    // Update the document title using the browser API
    let navigatorLanguage = window.navigator?.language?.toLocaleLowerCase();
    let foundLang = languages.find(l=>navigatorLanguage?.includes(l));
    console.log(">>>> window.location.href" )
    console.log(window.location.href )
    console.log(">>> foundLang")
    console.log(foundLang )
    if (foundLang) {
      console.log(window.location.href + "/"+foundLang+"/home");
     // window.location.href = window.location.href + "/"+foundLang+"/home";
    } else  {
      console.log(window.location.href + "/en/home");
     // window.location.href = window.location.href + "/en/home";
    }
  });


  return (
      // <I18nProvider>
      <main className={styles.main}>
        <div className={styles.description}>
        </div>
      </main>
  )
}
