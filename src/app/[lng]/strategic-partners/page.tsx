
import Main from '@/app/components/Main'
import SectionLogos from '../../components/SectionLogos'

export default async function Home({ params: { lng } }: { params: { lng: string } }) {
  return (
    <Main lng={lng}>
      <SectionLogos lng={lng}/>
    </Main>
  )
}
