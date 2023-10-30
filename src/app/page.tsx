"use client"
import { useEffect } from 'react';

import styles from './page.module.css'
import { languages } from '../config/initi18n';


export default function Home() {

  useEffect(() => {
    // Update the document title using the browser API
    let navigatorLanguage = window.navigator?.language?.toLocaleLowerCase();
    let foundLang = languages.find(l=>navigatorLanguage?.includes(l));
    if (foundLang) {
      window.location.href = window.location.href + "/"+foundLang+"/home";
    } else  {
      window.location.href = window.location.href + "/en/home";
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
