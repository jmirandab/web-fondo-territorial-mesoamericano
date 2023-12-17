"use client"
import Styles from '../../app/css/sectionBoard.module.css'
import clsx from 'clsx'
import { useState } from 'react'


const lng_es = {
  "title": "Junta Directiva",
  "expandText": "Ver más",
  "colapsedText": "Ver menos",
  "JeffreyCampbell_Name": "Jeffrey Campbell",
  "JeffreyCampbell_Desc1": "Actualmente jubilado en Estados Unidos después de más de treinta años de experiencia en el empoderamiento de comunidades en paisajes. Experiencia laboral en las Naciones Unidas (FAO) como Gerente, The Forest and Farm Facility, filantropía (The Christensen Fund, Ford Foundation), asistencia bilateral (AAAS/USAID), extensión universitaria (University of Connecticut) consultoría (Winrock International, FAO) , asesor/miembro de la junta (PROFOR, RECOFTC, NFP Facility...). ",
  "JeffreyCampbell_Desc2": "Centrado en organizaciones de productores forestales y agrícolas, silvicultura comunitaria, política forestal, diversidad biocultural y soberanía alimentaria, empoderamiento de los pueblos indígenas, medios de vida rurales basados ​​en el paisaje, desarrollo sostenible y resiliencia y adaptación al cambio climático.",
  "JeffreyCampbell_Desc3": "También publica poesía, interpreta y graba música como jhaffur khan azad darakth, cofundador y compositor de la Orquesta naiF. ",
  "JeffreyCampbell_Desc4": "Nacido y criado en la India, esposo, padre y abuelo.",
  "SusanKandel_Name": "Susan Kandel",
  "SusanKandel_Desc1": "Susan Kandel es Directora Adjunta e Investigadora Principal de PRISMA. ",
  "SusanKandel_Desc2": "Tiene una licenciatura en sociología, una maestría en desarrollo regional e internacional de la Universidad de California, Los Ángeles y estudios de posgrado en desarrollo sostenible de recursos de UC Berkeley, y en derechos humanos internacionales de la Instituto Internacional de Derechos Humanos. ",
  "SusanKandel_Desc3": "Las áreas de especialización de la Sra. Kandel incluyen: gobernanza territorial y desarrollo rural; cambio climático y mitigación basada en la adaptación; Migración, desarrollo y gestión de recursos naturales; entre otros temas relevantes. Antes de trabajar en PRISMA, la Sra. Kandel fue Directora del Departamento de Derechos Humanos de un Centro de Refugiados de América Central ubicado en Los Ángeles y Coordinadora del Proyecto del Índice de Responsabilidad, que informó directamente el trabajo de las Comisiones Ad Hoc y de Verdad por mandato de la ONU de El Salvador como parte del proceso de los Acuerdos de Paz.",
  "KirsiChavda_Name": "Kirsi Chavda",
  "KirsiChavda_Desc1": "Kirsi Chavda es coordinadora de programas en la Fundación Siemenpuu, donde ha canalizado el apoyo a Organizaciones de la Sociedad Civil (OSC) en varios países africanos, asiáticos y latinoamericanos en diversos temas ambientales, incluida la conservación y el uso sostenible de los bosques comunitarios, así como la soberanía alimentaria.",
  "KirsiChavda_Desc2": "Actualmente, la Sra. Chavda gestiona el programa de Siemenpuu sobre agroecología feminista y bosques comunitarios con aliados en Liberia y Mozambique.",
  "KirsiChavda_Desc3": "La Sra. Chavda ha entrado el campo de la cooperación al desarrollo desde diferentes ángulos. En el Fondo de Población de las Naciones Unidas, UNFPA, se centró en temas de salud sexual y reproductive y derechos en Honduras durante dos años.",
  "KirsiChavda_Desc4": " En la oficina de país de la OSC finlandesa Kepa en Nicaragua, contribuyó al fortalecimiento de la sociedad civil, la concientización sobre los impactos de las industrias extractivas y la gobernanza territorial en Mesoamérica durante tres años.",
  "KirsiChavda_Desc5": "La Sra. Chavda tiene dos maestrías en ciencias sociales, una en Política Social y otra en Trabajo Social, de las Universidades del Este de Finlandia y la de Jyväskylä."
};


const lng_en = {
  "title": "Board of Directors",
  "expandText": "Read more",
  "colapsedText": "See less",
  "JeffreyCampbell_Name": "Jeffrey Campbell",
  "JeffreyCampbell_Desc1": "Currently retired in the US after over thirty years of experience in the empowerment of communities in landscapes. Work experience in the United Nations (FAO) as Manager, The Forest and Farm Facility, philanthropy (The Christensen Fund, Ford Foundation), bilateral assistance (AAAS/USAID), university extension (University of Connecticut) consulting (Winrock International, FAO), advisor/board member (PROFOR, RECOFTC, NFP Facility..). ",
  "JeffreyCampbell_Desc2": "Focused on Forest and Farm Producer Organizations, Community Forestry, Forest Policy, Biocultural diversity and Food Sovereignty, Indigenous Peoples Empowerment, Landscape-based Rural Livelihoods, Sustainable Development and Resilience and Adaptation to Climate Change.",
  "JeffreyCampbell_Desc3": "Also publish poetry, perform and record music as jhaffur khan azad darakth, co-founder and composer with Orchestra naiF. ",
  "JeffreyCampbell_Desc4": " Born and raised in India, husband, father and grand-father.",
 
  "SusanKandel_Name": "Susan Kandel",
  "SusanKandel_Desc1": "Susan Kandel is the Deputy Director and a senior researcher of PRISMA. ",
  "SusanKandel_Desc2": "She holds a B.A in Sociology, a M.A. in Regional and International Development from the University of California, Los Angeles (UCLA), and post-graduate studies in both Sustainable Resource Development from UC Berkeley, as well as in International Human Rights from the International Institute of Human Rights in France. ",
  "SusanKandel_Desc3": "Ms. Kandel’s areas of expertise include: Territorial governance and rural development; Climate Change and adaptation based mitigation; Migration, development and natural resource management; among other relevant topics. Before working at PRISMA, Ms. Kandel was the Director of the Human Rights Department of a Central American Refugee Center located in Los Angeles and Project Coordinator of the Index to Accountability, which directly informed the work of the UN-mandated Ad Hoc and Truth Commissions of El Salvador as part of the Peace Accords process.",
  
  "KirsiChavda_Name": "Kirsi Chavda",
  "KirsiChavda_Desc1": "Kirsi Chavda is a programme coordinator at Siemenpuu Foundation, where she has supported Civil Society Organisations (CSOs) in several African, Asian and Latin American countries in varied environmental themes, including community-based forest conservation and sustainable use, as well as food sovereignty.",
  "KirsiChavda_Desc2": "Currently Ms. Chavda manages Siemenpuu’s programme on Feminist Agroecology and Community Forests with partners in Liberia and Mozambique. ",
  "KirsiChavda_Desc3": "Ms. Chavda has experience in the field of development cooperation from varied angles. At the UN Population Fund, UNFPA, she focused on sexual and reproductive health and rights themes in Honduras for two years. ",
  "KirsiChavda_Desc4": "At the Finnish CSO Kepa’s country office in Nicaragua, she contributed to the strengthening of the civil society, awareness on the impacts of extractive industries and territorial governance in Mesoamerica for three years. ",
  "KirsiChavda_Desc5": "Ms. Chavda holds a MSSc. in both Social Policy and Social Work from the Universities of Eastern Finland and Jyväskylä."
}



const DirectorsExpandableText = ({
  children,
  lng,
}: {
  children: React.ReactNode,
  lng: string
}) => {

 // const { t } = useTranslation(lng);
  const sectionBoard = lng==="es"? lng_es: lng_en;
  const [isExpanded, setIsexpanded] = useState(false);
  const onClick = () => {
    setIsexpanded(!isExpanded);
  }

  return (
    <>
      <div className={clsx(Styles.personText, isExpanded && Styles.expanded)}>
        {children}
      </div>
        <button onClick={onClick}>
        {isExpanded?sectionBoard.colapsedText: sectionBoard.expandText}
        </button>
   
    </>
  )
}


export default DirectorsExpandableText;
