import { useState, useEffect } from "react"
import "./HistoryBook.css"
import History from "../../components/history/History"

export default function HistoryBook() {

  const [historyBookDetails, sethistoryBookDetails] = useState(null)

  useEffect(() => {

    const fetchHistoryBookDetails = async () => {
      const response = await fetch('http://localhost:5000/api/historybooks/getBookRecords')
      const json = await response.json()

      if (response.ok) {
        sethistoryBookDetails(json)
      }

    }

    fetchHistoryBookDetails()

  }, [])


  return (
    <>
      <div className='container historyPageHeader'>
        <h1>History Books</h1>
      </div>
      <div className="container">
        <div className="row">
          {
            historyBookDetails && historyBookDetails.map((hisdetails) => (
              <div key={hisdetails._id} className="col-sm-3" >
                <History hisdetails={hisdetails} />
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
