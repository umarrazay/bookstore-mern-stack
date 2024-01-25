import { useState , useEffect } from "react"
import "./HistoryBook.css"

export default function HistoryBook() {

  useEffect(()=>{
      const fetchHistoryBookDetails = async () =>{
        const response = await fetch('https://localhost:5000/api/historybooks')
        const json = await response.json()
        console.log(json)
      }
  },[]) 


  return (
    <div className='historybooks'>

    </div>
  )
}
