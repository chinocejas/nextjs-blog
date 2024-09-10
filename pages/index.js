import Head from 'next/head'
import SocialProfileSimple from '../components/SocialProfileSimple/SocialProfileSimple'
import { useEffect } from 'react'
import { logPageView } from '../components/utils/analytics'; 

export default function Home() {
  useEffect(()=>{
    
    },[]);
  
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
