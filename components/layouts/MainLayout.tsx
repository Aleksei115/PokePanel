import { FC } from "react"
import Head from 'next/head';
import { Navbar } from '../ui';

interface layoutProps {
    children: React.ReactNode,
    title: string
}


export const MainLayout: FC<layoutProps> = ({children,title}) => {


  const location = ( typeof window === 'undefined' ? '' : window.location)


  return (
    <>
        <Head>
            <title>{title || "Pokemon App"}</title>
            <meta name='author' content="Aleksei García"/>
            <meta name="description" content={`información sobre el pokémon ${title}`}/>
            <meta name="keywords" content={`${title}, pokémon, pokedex`}/>
            <meta property="og:title" content={`Información sobre ${ title }`} />
            <meta property="og:description" content={`Esta es la pagina de ${ title }`} />
            <meta property="og:image" content={`${location}/img/banner.png`} />
        </Head>

        <Navbar />

        <main>
            { children }
        </main>
    </>
  )
}
