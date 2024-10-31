'use client'
import { useState } from "react";

interface Props {
  totalData: number | undefined
}

export default function usePaginationHook({ totalData }:Props) {
  const [startIndex, setStartIndex] = useState(0);
  
  function increaseStartIndex() {
    if(totalData){
      setStartIndex(Math.min(startIndex + 10, totalData))
    }
  }

  function decreaseStartIndex() {
    if(totalData) {
      setStartIndex(Math.max(startIndex - 10, 0));
    }
  }

  const isPrevVisible = startIndex > 0;
  const isNextVisible = startIndex < totalData!

  return {
    startIndex,
    isNextVisible,
    isPrevVisible,
    increaseStartIndex,
    decreaseStartIndex
  }
}