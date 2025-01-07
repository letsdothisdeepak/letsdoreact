import { useEffect, useState } from "react";

// currency= INR_INR or INR_USD

function useCurrencyinfo (currency) {
        const [data,setdata]= useState({})
        useEffect(()=>{
            fetch (`https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api/${currency}.json`)
            .then((res)=> res.json())
            .then((res)=> setdata(res[currency]))
        },[currency])
        return data
}

export default useCurrencyinfo;