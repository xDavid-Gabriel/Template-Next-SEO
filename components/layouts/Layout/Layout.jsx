import Head from 'next/head'
import 'twin.macro'
import { Navbar } from '../../ui'
import { useStateSeoContext } from '../../../context/seo'

export const Layout = ({ children, title }) => {
  //El "useStateSeoContext()" se usa para validar si est en true estara con SEO si no, no lo estara
  const { seo } = useStateSeoContext()
  return (
    <>
      <Head>
        {seo ? (
          <meta name="description" content="Hola es la descripcion" />
        ) : (
          ''
        )}
        <title>{title}</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <footer tw="text-center font-bold">Footer</footer>
    </>
  )
}
