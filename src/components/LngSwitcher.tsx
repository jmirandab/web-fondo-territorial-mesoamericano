
"use client"

import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages, languagesNames } from '../config/initi18n'
import { useTranslation } from '../app/i18n'

// import { usePathname } from 'next/navigation'



const LngSwitcher = async ({ lng }:{lng:string}) => {
  const { t } = await useTranslation(lng, 'footer')
//   const pathname = usePathname()

  return (
    <>
{/* 
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch to:
      </Trans> */}

      {languages.filter((l:string) => lng !== l).map((l, index) => {
        return (
          <Link href={`/${l}/home`} key={l}>
            {index > 0 && (' or ')}
            <span>
              Switch to: {languagesNames[l]}
            </span>
          </Link>
        )
      })}
    </>
  )
}

export default LngSwitcher  ;