import Head from 'next/head';
import SocialIconsSmall from '../components/SocialIcons/SocialIconsSmall';

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>nico.cejas</title>
      </Head>
      <main>    
        <SocialIconsSmall></SocialIconsSmall>  
      </main>
    </div>
  )
}


