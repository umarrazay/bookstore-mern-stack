import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter , Routes , Route } from 'react-router-dom'

import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/Home/HomePage'
import Contact from './pages/Contact/Contact';
import HistoryBook from './pages/HistoryBooks/HistoryBook'
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
                    <Route path="about" element={<About/>} />
                    <Route path="contact" element={<Contact/>} />
                  </Routes>
              </div>
          </BrowserRouter>

      </div>
    </>
  )
}

export default App
