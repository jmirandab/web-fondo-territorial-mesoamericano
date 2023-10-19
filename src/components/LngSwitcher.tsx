
"use client"

import Link from 'next/link'
import { useState } from 'react'
import Styles from '../app/css/langSwitch.module.css'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages, languagesNames } from '../config/initi18n'
// import { useTranslation } from '../app/i18n'

import { FocusEventHandler } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from '../app/i18n/client'


const LngSwitcher = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, 'footer')
  const [langsVisible, setLangsVisible] = useState(false);
  //   const pathname = usePathname()

  const langOnCLick = () => {
    setLangsVisible(!langsVisible)
  }

  const langHid = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget?.contains(e.relatedTarget)) {
      setLangsVisible(false)
    }
  }


  return (<div onBlur={langHid} className={Styles.lngSwitcher}>
    {/* 
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch to:
      </Trans> */}

    <button aria-label="language" onClick={langOnCLick}> 
      <FontAwesomeIcon className={Styles.icon} icon={faLanguage} /> { t("lang") } 
    </button>
    {langsVisible && <ol>
      {languages.filter((l: string) => lng !== l).map((l, index) => {
        return (
          <li key={l}>
            <Link href={`/${l}/home`} key={l}>
              <span className={Styles.link}>
                {languagesNames[l]}
              </span>
            </Link>
          </li>

        )
      })}
    </ol>}
  </div>
  )
}

export default LngSwitcher;