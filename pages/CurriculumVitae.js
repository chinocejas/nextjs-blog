import Head from 'next/head';
import GridExperiences from '../components/GridWithContent/GridExperiences';
import SimpleFooter from '../components/Footer/SimpleFooter';
import { logPageView } from '../components/utils/analytics'; 
import { useEffect } from 'react';

export default function CurriculumVitae() {
  useEffect(()=>{
    logPageView();
    },[]);

  return (
    <>
    <div className="container">
      <Head>
        <title>nico.cejas</title>
      </Head>
      <main>    
        <GridExperiences /> 
      </main>
      <SimpleFooter></SimpleFooter>
    </div>
    </>
  );

}