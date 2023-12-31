
export const defaultNS = 'translation'
export const fallbackLng = 'es'
export const languages = [fallbackLng, 'en']
export const cookieName = 'i18next'

interface IDictionary {
  [index: string]: string;
}
let languagesNames  = {} as IDictionary;
languagesNames['en'] = 'English'; 
languagesNames['es'] = 'Español'; 
export {languagesNames}; 

export function getOptions (lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}