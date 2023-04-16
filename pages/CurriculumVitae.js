import Head from 'next/head';
import GridExperiences from '../components/GridWithContent/GridExperiences';
import SimpleFooter from '../components/Footer/SimpleFooter';

export default function CurriculumVitae() {
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