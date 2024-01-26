import { useState, useEffect } from "react"
import "./HistoryBook.css"
import History from "../../components/history/History"
import axios from "axios"


export default function HistoryBook() {

  const [HistoryBooksData, setHistoryBookData] = useState(null)
  const [HasError, setHasError] = useState("");

  const getMyHistoryData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/historybooks/getBookRecords");
      setHistoryBookData(res.data);
    } catch (error) {
      setHasError(error.message);
    }
  };

  useEffect(()=>{
    getMyHistoryData();
  } , []);

  return (
    <>
      <div className='container historyPageHeader'>
        <h1>History Books</h1>
        {HasError !== "" && <h2>{HasError}</h2>}
      </div>
      <div className="container">
        <div className="row">
          {
            HistoryBooksData && HistoryBooksData.map((hisdetails) => (
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
