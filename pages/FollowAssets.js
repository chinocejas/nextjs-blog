import Head from "next/head";
import React, {useState, useEffect, useContext, useReducer} from 'react'
import TablePortfolio from "../components/FollowAssert/TablePortfolio";
import DrawerAddAssert from "../components/FollowAssert/DrawerAddAssert"
import AssertsValueContext from "../components/FollowAssert/AssertsValueContext"
import reducer from "../components/FollowAssert/AssertsValueContext"

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

  
  
  const initialContextValue = {
    list: rows,
  };
  const [state, dispatch] = useReducer(reducer, initialContextValue);

  useEffect(() => {
    // Log the current context value after each dispatch
    console.log("Context value father:", state);
  }, [state]);

  return (
    <div className="container">
      <AssertsValueContext.Provider value={{state, dispatch}}>
          <Head>
            <title>Follow Assets</title>
          </Head>
          <main>
            <DrawerAddAssert ></DrawerAddAssert>
            <TablePortfolio headers={headerList}></TablePortfolio>
          </main>
      </AssertsValueContext.Provider>
    </div>
  );
}
