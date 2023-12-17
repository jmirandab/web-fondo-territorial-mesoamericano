
import Main from '@/app/components/Main'
import { useTranslation } from '../../i18n'
import SectionBoard from '../../components/SectionBoard'



export default async function Home({ params: { lng } }: { params: { lng: string } }) {
  // const { t } = useTranslation();
  const { t } = await useTranslation(lng)
  return (
    <Main lng={lng}>
      <SectionBoard lng={lng}/>
      
    </Main>
  )
}
