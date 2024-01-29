import { useState, useEffect } from "react"
import "./HistoryBook.css"
import History from "../../components/history/History"
import axios from "axios"


export default function HistoryBook() {

  const [BooksData, setHistoryBookData] = useState(null)
  const [HasError, setHasError] = useState("");

  const getMyBooksData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/books/getBookRecords");
      setHistoryBookData(res.data);
    } catch (error) {
      setHasError(error.message);
    }
  };

  useEffect(()=>{
    getMyBooksData();
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
            BooksData && BooksData.map((bookdetails) => (
              <div key={bookdetails._id} className="col-sm-3" >
                <History bookdetails={bookdetails} />
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
