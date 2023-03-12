import Head from 'next/head';
import GridListWithHeading from '../components/GridListWithHeading/GridListWithHeading'

export default function Market() {
  const itemsForSell = getItemsForSell();
  const sellListTitle = getSellListTitle();
  const sellListDescription = getSellListDescription();
  return (
    <div className="container">
      <Head>
        <title>nico.cejas</title>
      </Head>
      <main>    
        <GridListWithHeading 
            title={sellListTitle}
            description={sellListDescription}
            items={itemsForSell}>
        </GridListWithHeading>
      </main>
    </div>
  )

    function getSellListTitle(){
        return 'Vendo Todo. [En construccion]';
    }
    function getSellListDescription(){
        let description = "Me mudo así que vendo todo. Los precios son estimativos y estan sujetos a modificaciones sin previo aviso."; 
        return description;
    }

    function getItemsForSell() {
    const itemsForSell = Array.apply(null, Array(8)).map(function (x, i) {
        return {
          id: i,
          title: 'Smart Tv Led Bgh 43 Full Hd Pne040253 Android 220',
          text: 'Fecha de compra: 4/5/2022. Impecable',
          imgSrc: [
            { src: "https://www.lg.com/ar/images/televisores/md06198536/gallery/DES_1_N.jpg" },
            { src: "https://www.lg.com/ar/images/televisores/md06198536/gallery/DES_1_N.jpg" },
            { src: "https://www.lg.com/ar/images/televisores/md06198536/gallery/DES_1_N.jpg" },
          ],
          price: 15000};
      });

    return itemsForSell;
  }
}

