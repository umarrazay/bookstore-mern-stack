import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home/HomePage'
import HistoryBook from './pages/HistoryBooks/HistoryBook'
import Navbar from './components/Navbar/Navbar'
import ProgrammingBooks from './pages/ProgrammingBooks/ProgrammingBooks'

function App() {

  return (
    <>
      <div className='App'>
          <BrowserRouter>
          <Navbar/>
              <div className='pages'>
                  <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="historybooks" element={<HistoryBook/>} />
                    <Route path="programmingbooks" element={<ProgrammingBooks/>} />
                  </Routes>
              </div>
          </BrowserRouter>
      </div>
    </>
  )
}

export default App
