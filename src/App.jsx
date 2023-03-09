import './App.css'
import Navbar from './components/Navbar'
import Practice from './components/Practice'

export default function App() {
  return (
    <>
      <Navbar title='Text Utils' />
      <div className="container">
        <Practice heading='Convert Small TO Upper TO Lower Case' />
      </div>

    </>
  )
}
