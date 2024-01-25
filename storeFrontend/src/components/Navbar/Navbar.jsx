import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className='navbar'>
        <Link to="/">Home Page</Link>
        <Link to="/historybooks">History Books</Link>
        <Link to="/programmingbooks">Programming Books</Link>
    </div>
  )
}
