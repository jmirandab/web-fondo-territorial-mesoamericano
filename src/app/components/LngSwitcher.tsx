
"use client"
import Link from 'next/link'
import { useState } from 'react'
import Styles from '../../app/css/langSwitch.module.css'
import { languages, languagesNames } from '../../config/initi18n'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from '../i18n/client'
import clsx from 'clsx'


const LngSwitcher = ({ lng }: { lng: string }) => {

  const [langsVisible, setLangsVisible] = useState(false);

  const langOnCLick = () => {
    setLangsVisible(!langsVisible)
  }

  const langHid = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget?.contains(e.relatedTarget)) {
      setLangsVisible(false)
    }
  }

  const lang = lng === 'es'? "Lenguaje" :"Language"

  return (<div suppressHydrationWarning onBlur={langHid} className={Styles.lngSwitcher}>
    {/* 
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch to:
      </Trans> */}

    <button suppressHydrationWarning aria-label="language" onClick={langOnCLick}> 
      <FontAwesomeIcon className={Styles.icon} icon={faLanguage} /> { lang } 
    </button>
     <ol className={clsx(!langsVisible && Styles.langListHidden  )}>
      {languages.filter((l: string) => lng !== l).map((l, index) => {
        return (
          <li key={l}>
            <Link suppressHydrationWarning href={`/${l}/home`} key={l}>
              <span className={Styles.link}>
                {languagesNames[l]}
              </span>
            </Link>
          </li>

        )
      })}
    </ol>
  </div>
  )
}

export default LngSwitcher;