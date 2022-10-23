import Head from 'next/head'
import SocialProfileSimple from '../components/SocialProfileSimple'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>nico.cejas</title>
      </Head>
      <main>        
        <SocialProfileSimple/>
      </main>
    </div>
  )
}
