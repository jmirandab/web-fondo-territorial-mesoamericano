"use client"

import styles from './page.module.css'
import { languages, languagesNames } from '../config/initi18n';


let navigatorLanguage = global.navigator?.language?.toLocaleLowerCase();
let foundLang = languages.find(l=>navigator.language.includes(l));
if (foundLang) {
  window.location.href = "/"+foundLang+"/home";
} else  {
  window.location.href = "/en/home";
}


console.log(languages);
export default function Home() {
  return (
      // <I18nProvider>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
             {/* oooooo {t('key')}  */}
          </p>
          <div>

          </div>
        </div>

        {/* <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
        <Section11 />
        <Section12 /> */}

        {/* <div className={styles.center}>
        test1
      </div>

      <div className={styles.grid}>
        test2
      </div> */}
      </main>
      // </I18nProvider>
  )
}
