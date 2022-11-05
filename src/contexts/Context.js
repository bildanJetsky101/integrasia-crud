import { createContext, useEffect, useState } from "react";

export const DataContext = createContext()

export const DataContextProvider = ({ children }) => {
    const [datas, setDatas] = useState() // state untuk menamung data yang dikirimkan
    const [dataFeed, setDataFeed] = useState() // state untuk me-Read data yang ada di localStorage
    
    useEffect(()=>{
        if(datas){
            localStorage.setItem("datas", JSON.stringify(datas)) // set data ke string sebelum dimasukan ke localStorage
        }
        else{ 
            localStorage.removeItem("datas") 
        }
    },[datas])
    
    useEffect(()=>{
        const item = JSON.parse(localStorage.getItem('datas')) // ambil data dari localStorage dan diubah ke object
        setDataFeed(item)
       
    },[datas])

    
    return (
        <DataContext.Provider value={ [datas, setDatas, dataFeed, setDataFeed] }>
            { children }
        </DataContext.Provider>
    )
}