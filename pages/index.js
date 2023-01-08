import { Layout } from '../components/layouts'
import { Section1 } from './home/sections/Section1/Section1'
import { Section2 } from './home/sections/Section2/Section2'
import { Section3 } from './home/sections/Section3/Section3'
import { useStateSeoContext } from '../context/seo'
import 'twin.macro'

const Home = () => {
  const { seo } = useStateSeoContext()

  return (
    <Layout title="Pagina de Inicio">
      {seo ? (
        <h1 tw="my-5 text-5xl font-bold text-center">Hola</h1>
      ) : (
        <span tw="my-5 text-5xl font-bold text-center">Hola</span>
      )}

      <Section1 />
      <Section2 />
      <Section3 />
    </Layout>
  )
}

export default Home
