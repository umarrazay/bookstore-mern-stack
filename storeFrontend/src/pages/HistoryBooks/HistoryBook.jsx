import { useState , useEffect } from "react"
import "./HistoryBook.css"
import History from "../../components/history/History"

export default function HistoryBook() {

  const [historyBookDetails , sethistoryBookDetails] = useState(null) 

  useEffect(()=>{
      
      const fetchHistoryBookDetails = async () =>{
        const response = await fetch('http://localhost:5000/api/historybooks/getBookRecords')
        const json = await response.json()

        if(response.ok){
          sethistoryBookDetails(json)
        }

      }

      fetchHistoryBookDetails()

  },[]) 


  return (
    <div className='historybooks'>
        <h1>History Books</h1>
        <div className="product-card" > 
            {
              historyBookDetails && historyBookDetails.map((hisdetails)=>(
                <History key={hisdetails._id} hisdetails={hisdetails}  />
              ))
            }
        </div>
    </div>
  )
}
