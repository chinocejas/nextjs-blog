import Head from "next/head";
import TablePortfolio from "../components/FollowAssert/TablePortfolio";
import { IconButton } from '@chakra-ui/react'
import ButtonAdd from "../components/FollowAssert/ButtonAdd";
import DrawerAddAssert from "../components/FollowAssert/DrawerAddAssert"

export default function FollowAssets() {
  var headerList = [
    "CURRENCY",
    "TYPE",
    "ACCOUNT/WALLET",
    "POSITION",
    "TOTAL USD",
  ];
  const rows = [
    {
      _id: "56cf587fe46adb3b8960afe2",
      currency: "BTC",
      type: "Crypto",
      account: "Lemon",
      value: 0.05453345,
      totalUsd: 889.55,
    },
    {
      _id: "56cf587fe46adb3b8960afe2",
      currency: "USD",
      type: "Fiat",
      account: "Wise",
      value: 3020,
      totalUsd: 3020,
    },
  ];

  return (
    <div className="container">
      <Head>
        <title>Follow Assets</title>
      </Head>
      <main>
        <ButtonAdd></ButtonAdd>
        {/*<DrawerAddAssert></DrawerAddAssert> */}
        
        <TablePortfolio headers={headerList} rows={rows}></TablePortfolio>
      </main>
    </div>
  );
}
