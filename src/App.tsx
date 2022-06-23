import BandsNumber from './components/BandsNumber'
import Footer from './components/footer'
import Header from './components/Header'
import Resistor from './components/Resistor'
import Results from './components/Results'
import SelectMode from './components/SelectMode'

function App() {
  return (
    <div className="App">
      <Header />
      <SelectMode />
      <BandsNumber />
      <Resistor />
      <Results />
      <Footer />
    </div>
  )
}

export default App
