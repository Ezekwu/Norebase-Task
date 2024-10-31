"use client"

import { useState, useEffect } from "react";
import { Header } from "./ui/UiTable";
import UiTable from "./ui/UiTable";
import UiLoader from "./ui/UiLoader";
import UiPaginator from "./ui/UiPaginator";
import { useGetCoinsQuery } from "@/redux/features/Coins";
import usePaginationHook from "@/hooks/usePagination";

export default function CoinList () {
  const [queryStartIndex, setQueryStartIndex] = useState(0);
  const {data: coinsData, isLoading} = useGetCoinsQuery({limit: 10, start: queryStartIndex});
  const { decreaseStartIndex, increaseStartIndex, isNextVisible, isPrevVisible, startIndex } = usePaginationHook({totalData: coinsData?.info.coins_num});

  const tableHeaders : Header[] = [
    {
      title: '💰Coin', 
      query: 'coin',
    },
    {
      title: '📃Code',
      query: 'code'
    },
    {
      title: '🤑Price',
      query: 'price'
    },
    {
      title: '📈Total Supply',
      query: 'totalSupply'
    }
  ]

  const tableData = coinsData?.data.map((data)=>({
    id: data.id,
    coin: data.name,
    code: data.symbol,
    price: `$${data.price_usd}`,
    totalSupply: data.tsupply
  }))

  useEffect(() => {
    setQueryStartIndex(startIndex)
    console.log(queryStartIndex);
  },[startIndex]);

  if(isLoading) {
    return <UiLoader/>
  }
  
  return (
    <section className="flex justify-center items-center py-4 bg-gray-200 h-full min-h-screen">
      <div className="border border-gray-200 shadow-md rounded-md bg-white">
        {tableData && <UiTable data={tableData} headers={tableHeaders}/>}
        <div className="px-2 py-4 md:py-1 md:px-4 lg:px-8 ">
          <UiPaginator isNextVisible={isNextVisible} isPrevVisible={isPrevVisible} decreaseStartIndex={decreaseStartIndex} increaseStartIndex={increaseStartIndex}/>
        </div>
      </div>
    </section>
  )
}