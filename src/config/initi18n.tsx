

import i18next from 'i18next';
//import LanguageDetector from 'i18next-browser-languagedetector';
// import { universalLanguageDetect } from '@unly/universal-language-detector';
export const defaultNS = 'translation'
export const fallbackLng = 'en'
export const languages = [fallbackLng, 'es']

interface IDictionary {
  [index: string]: string;
}
let languagesNames  = {} as IDictionary;
languagesNames['en'] = 'English'; 
languagesNames['es'] = 'Español'; 
export {languagesNames}; //= {'en': "english", 'es':"español"}


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

 
// i18next
// //  .use(universalLanguageDetect)
// //  .use(LanguageDetector)
//   .init({
//   // fallbackLng: 'es',
//  // lng: 'en', // if you're using a language detector, do not define the lng option
//   debug: false,
//   resources: {
//     en: {
//       translation: {
//         "key": "hello world",
//         "topH1": "MESOAMERICAN TERRITORIAL FUND",
//         "subH1":"by the Mesoamerican Alliance of Peoples and Forests",
//         "section2": {
//           "text1":"The Mesoamerican Territorial Fund (FTM) is an alternative financial mechanism designed by the Mesoamerican Alliance of Peoples and Forests (AMPB), by and for Indigenous Peoples and Local Communities (IPLCs).",
//           "text2":"Our objective is to promote rights-based, efficient and effective direct investment in key Mesoamerican territories while ensuring lower transaction costs and management of funds according to clear protocols and accountability."
//         },
//         "section3": {
//           "title":"AMPB Members",
//           "text1": "The FTM focuses its work in Mesoamerica, working closely with the membership of the AMPB and other Indigenous Peoples and Local Communities organizations (IPLCs)."
//         },
//         "section4": {
//           "title":"Rationale",
//           "text2": "According to a study conducted by Rainforest Foundation Norway1, by 2021, less than 1% of global climate finance has reached Indigenous Peoples and Local Communities (IPLCs) in the global south over the last ten year.",
//           "text1": "In response to this situation, the FTM, was created with the objective of facilitating and promoting direct territorial investment in favor of Indigenous Peoples and Local Communities (IPLCs). Likewise, the FTM seeks to accompany the organizations in a culturally adapted manner, through the creation and strengthening of capacities, promoting sustainability and positive impacts on the investment.",
//         },
//         "section5": {
//           "title":"What do we finance?",
//           "text1": "The FTM supports strategic initiatives defined by the communities with the potential to be replicable, scalable or to become public policy.",
//           "bullet1": "Climate Change mitigation and adaptation.",
//           "bullet2": "Biodiversity conservation and sustainable management of natural resources.",
//           "bullet3": "Governance and rights of Indigenous Peoples and Local Communities.",
//           "bullet4": "Sustainable indigenous and community initiatives.",
//           "subTitle": "Transversal axes",
//           "subBullet1": "Gender",
//           "subBullet2": "Youth",
//           "subBullet3": "Social inclusion",
//         },
//         "section6": {
//           "title":"Three Grant Financing Instruments are adapted to the different investment realities in our territories",
//           "bullet1": "Small grant ",
//           "bullet2": "Large grant",
//           "bullet3": "Agile, rapid-response grants",
//           "subBullet1": "(USD 10k to USD 50K).",
//           "subBullet2": "(Starting at USD 51K).",
//           "subBullet3": "for emergencies.",
//         },
//         "section7": {
//           "title":"By 2028 the FTM aims to:",
//           "text1": "Increase direct funding to an annual average of 30 to 40 donations with amounts starting at USD 50 thousand.",
//           "text2": "Extend the geographical areas and territories prioritized by the FTM",
//           "text3": "involving more partners and strategic allies and expanding its support to other organizations beyond the AMPB membership.",
//         },
//         "section8": {
//           "title":"A process that has already begun:",
//           "subTitle1": "CONSOLIDATION",
//           "subTitle2": "SCALING",
//           "sub2Title1": "2023-2025",
//           "sub2Title2": "2026 onwards",
//           "text1": "Diversification of funding sources, consolidation of the application system, monitoring and evaluation of donations.",
//           "text2": "Capitalization, diversification of FTM activities and services.",
//         },
//         "section9": {
//           "title":"How we work?",
//           "text1": "FTM is governed by a 7-person Board of Directors*, composed of:",
//           "text2": "4 members of the AMPB.",
//           "text3": "3 independent persons",
//           "text4": "(approved by the Board of Directors of the AMPB).",
//           "text5": "Our Executive Management reports to the Board of Directors.",
//           "text6": "*At least 3 women must be members.",

//         },
//         "section10": {
//           "title":"Financed initiatives",
//           "text1": "Women-driven forest garden entrepreneurship in Honduras.",
//           "text2": "Establishment of a community biointensive garden in Moskitia, Honduras.",
//           "text3": "Marketing of products at fairs of the Agroecological Farmers Network in Texcoco, Mexico.",
//         },
//         "section11": {
//           "title":"Direct territorial financing:",
//           "text1": "Empowering Indigenous Peoples and Local Communities, protecting forests and biodiversity.",
//           "text2": "Less than 1% of global climate finance goes directly to Indigenous Peoples and Local Communities (IPLCs),",
//           "text3": "Despite the fact that they are decisive actors for the protection of forests and biodiversity.",
//           "text4": "Increasing direct territorial financing is key to strengthening IPLC rights and territory-anchored strategies to combat climate change.",
//           "text5": "The Mesoamerican Alliance of Peoples and Forests (AMPB) manages 24% of the region's forests, which holds 26% of the total carbon stored.",          
//           "text6": "In Mesoamerica, to speak about forests and biodiversity implies speaking about the rights of Indigenous Peoples and Local Communities.",
//         },
//         "section12": {
//           "title":"Results",
//           "text1": "First cycle of projects up to 2022:",
//           "col1-Text1": "projects supported",
//           "col1-Text2": "countries",
//           "col1-Text3": "Indigenous Peoples' organizations",
//           "col1-Text4": "Local Community organizations",
//           "col1-Text5": "mixed organization: Indigenous Peoples and Local Communities",
//           "col2-Text1": "600 000 invested",
//           "col2-Text2": "direct investment in the territory",
//           "col2-Text3": "administration, operation and accompaniment",
//           "col2-Text4": "47 000 average investment per project",
//           "col3-Text1": "people supported",
//           "col3-Text2": "women supported (39.7%)",
//           "col3-Text3": "men supported(60,3%)",
//           "col3-Text4": "communities supported",
//           "col4-Text1": "audits conducted",
//           "col4-Text2": "overall external evaluation of the pilot."

//         },
        
//       }
//     },
//     es: {
//       translation: {
//         "key": "HOLA!!!!1",
//         "topH1": "FONDO TERRITORIAL MESOAMERICANO",
//         "subH1":"de la Alianza Mesoamericana de Pueblos y Bosques",
//         "section2": {
//           "text1":"The Mesoamerican Territorial Fund (FTM) is an alternative financial mechanism designed by the Mesoamerican Alliance of Peoples and Forests (AMPB), by and for Indigenous Peoples and Local Communities (IPLCs).",
//           "text2":"Our objective is to promote rights-based, efficient and effective direct investment in key Mesoamerican territories while ensuring lower transaction costs and management of funds according to clear protocols and accountability."
//         },
//         "section3": {
//           "title":"AMPB Members",
//           "text1": "The FTM focuses its work in Mesoamerica, working closely with the membership of the AMPB and other Indigenous Peoples and Local Communities organizations (IPLCs)."
//         },
//         "section4": {
//           "title":"Rationale",
//           "text2": "According to a study conducted by Rainforest Foundation Norway1, by 2021, less than 1% of global climate finance has reached Indigenous Peoples and Local Communities (IPLCs) in the global south over the last ten year.",
//           "text1": "In response to this situation, the FTM, was created with the objective of facilitating and promoting direct territorial investment in favor of Indigenous Peoples and Local Communities (IPLCs). Likewise, the FTM seeks to accompany the organizations in a culturally adapted manner, through the creation and strengthening of capacities, promoting sustainability and positive impacts on the investment.",
//         },
//         "section5": {
//           "title":"What do we finance?",
//           "text1": "The FTM supports strategic initiatives defined by the communities with the potential to be replicable, scalable or to become public policy.",
//           "bullet1": "Climate Change mitigation and adaptation.",
//           "bullet2": "Biodiversity conservation and sustainable management of natural resources.",
//           "bullet3": "Governance and rights of Indigenous Peoples and Local Communities.",
//           "bullet4": "Sustainable indigenous and community initiatives.",
//           "subTitle": "Transversal axes",
//           "subBullet1": "Gender",
//           "subBullet2": "Youth",
//           "subBullet3": "Social inclusion",
//         },
//         "section6": {
//           "title":"Three Grant Financing Instruments are adapted to the different investment realities in our territories",
//           "bullet1": "Small grant ",
//           "bullet2": "Large grant",
//           "bullet3": "Agile, rapid-response grants",
//           "subBullet1": "(USD 10k to USD 50K).",
//           "subBullet2": "(Starting at USD 51K).",
//           "subBullet3": "for emergencies.",
//         },
//         "section7": {
//           "title":"By 2028 the FTM aims to:",
//           "text1": "Increase direct funding to an annual average of 30 to 40 donations with amounts starting at USD 50 thousand.",
//           "text2": "Extend the geographical areas and territories prioritized by the FTM",
//           "text3": "involving more partners and strategic allies and expanding its support to other organizations beyond the AMPB membership.",
//         },
//         "section8": {
//           "title":"A process that has already begun:",
//           "subTitle1": "CONSOLIDATION",
//           "subTitle2": "SCALING",
//           "sub2Title1": "2023-2025",
//           "sub2Title2": "2026 onwards",
//           "text1": "Diversification of funding sources, consolidation of the application system, monitoring and evaluation of donations.",
//           "text2": "Capitalization, diversification of FTM activities and services.",
//         },
//         "section9": {
//           "title":"How we work?",
//           "text1": "FTM is governed by a 7-person Board of Directors*, composed of:",
//           "text2": "4 members of the AMPB.",
//           "text3": "3 independent persons",
//           "text4": "(approved by the Board of Directors of the AMPB).",
//           "text5": "Our Executive Management reports to the Board of Directors.",
//           "text6": "*At least 3 women must be members.",

//         },
//         "section10": {
//           "title":"Financed initiatives",
//           "text1": "Women-driven forest garden entrepreneurship in Honduras.",
//           "text2": "Establishment of a community biointensive garden in Moskitia, Honduras.",
//           "text3": "Marketing of products at fairs of the Agroecological Farmers Network in Texcoco, Mexico.",
//         },
//         "section11": {
//           "title":"Direct territorial financing:",
//           "text1": "Empowering Indigenous Peoples and Local Communities, protecting forests and biodiversity.",
//           "text2": "Less than 1% of global climate finance goes directly to Indigenous Peoples and Local Communities (IPLCs),",
//           "text3": "Despite the fact that they are decisive actors for the protection of forests and biodiversity.",
//           "text4": "Increasing direct territorial financing is key to strengthening IPLC rights and territory-anchored strategies to combat climate change.",
//           "text5": "The Mesoamerican Alliance of Peoples and Forests (AMPB) manages 24% of the region's forests, which holds 26% of the total carbon stored.",          
//           "text6": "In Mesoamerica, to speak about forests and biodiversity implies speaking about the rights of Indigenous Peoples and Local Communities.",
//         },
//         "section12": {
//           "title":"Results",
//           "text1": "First cycle of projects up to 2022:",
//           "col1-Text1": "projects supported",
//           "col1-Text2": "countries",
//           "col1-Text3": "Indigenous Peoples' organizations",
//           "col1-Text4": "Local Community organizations",
//           "col1-Text5": "mixed organization: Indigenous Peoples and Local Communities",
//           "col2-Text1": "600 000 invested",
//           "col2-Text2": "direct investment in the territory",
//           "col2-Text3": "administration, operation and accompaniment",
//           "col2-Text4": "47 000 average investment per project",
//           "col3-Text1": "people supported",
//           "col3-Text2": "women supported (39.7%)",
//           "col3-Text3": "men supported(60,3%)",
//           "col3-Text4": "communities supported",
//           "col4-Text1": "audits conducted",
//           "col4-Text2": "overall external evaluation of the pilot."

//         },
        
//       }
//     }
//   }
// });

// export default i18next;