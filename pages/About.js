import Head from 'next/head';
import SimpleFooter from '../components/Footer/SimpleFooter';

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>nico.cejas</title>
      </Head>
      <main>    
        <SimpleFooter /> 
      </main>
    </div>
  )
}


