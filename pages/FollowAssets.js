import Head from "next/head";
import React, {useState, useEffect, useContext} from 'react'
import TablePortfolio from "../components/FollowAssert/TablePortfolio";
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
  const [assertListValues, setAssertListValues] = useState(rows);

  return (
    <div className="container">
      <Head>
        <title>Follow Assets</title>
      </Head>
      <main>
        <DrawerAddAssert assertList= {assertListValues} setAssertListValues = {setAssertListValues}></DrawerAddAssert>
        <TablePortfolio headers={headerList}  assertListValues ={assertListValues}></TablePortfolio>
      </main>
    </div>
  );
}
