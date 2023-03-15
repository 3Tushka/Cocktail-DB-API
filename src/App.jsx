import './App.scss'
import { Footer, Homepage, Navbar } from './assets/components/componentIndex'

function App() {

  return (
    <div className="App">
      <div className="navigation">
        <Navbar />
      </div>
      <div className="main">
        <Homepage />
        <Footer />
      </div>
    </div>
  )
}

export default App
