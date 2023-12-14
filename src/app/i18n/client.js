'use client'

import { useEffect, useState } from 'react'
import i18next from 'i18next'
import { initReactI18next} from 'react-i18next/initReactI18next'
import { useTranslation as useTranslationOrg } from 'next-i18next'
import { useCookies } from 'react-cookie'
import resourcesToBackend from 'i18next-resources-to-backend'
import { getOptions, languages, cookieName } from '../../config/initi18n'
import i18nextMiddleware from 'i18next-http-middleware';

const runsOnServerSide = typeof window === 'undefined'

i18next
  .use(initReactI18next)
  .use(i18nextMiddleware.LanguageDetector)
  .use(resourcesToBackend((language, namespace) => import(`./locales/${language}/${namespace}.json`)))
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? languages : []
  })

export  function  useTranslation(lng, ns, options) {
  console.log("useTranslation");
  console.log(lng);
  console.log(ns);
  console.log(options);
  console.log("[cookieName])" + [cookieName])
  const [cookies, setCookie] = useCookies([cookieName]);
  const ret = useTranslationOrg([cookieName], options)
  const { i18n } = ret
  console.log(i18n)

  console.log("i18n.resolvedLanguage " + i18n.resolvedLanguage)
  console.log("document.cookie  "+ JSON.stringify(cookies))
  if (lng && i18n.resolvedLanguage !== lng) {
    console.log("jm1 changeLanguage");
     i18n.changeLanguage(lng);

     console.log("??????? >>>>> setCookie1 "+lng)

     console.log("??????? >>>>> cookieName "+cookieName)
     setCookie(cookieName, lng, { path: '/' })
  } else {
    console.log("jm2 not changeLanguage");
    setCookie(cookieName, lng, { path: '/' })
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return
      setActiveLng(i18n.resolvedLanguage)
    }, [activeLng, i18n.resolvedLanguage])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!lng || i18n.resolvedLanguage === lng) return
      i18n.changeLanguage(lng)
    }, [lng, i18n])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (cookies.i18next === lng) return
      console.log("setCookie2 "+lng)
      setCookie(cookieName, lng, { path: '/' })
    }, [lng, cookies.i18next, setCookie])
  }
  return ret
}