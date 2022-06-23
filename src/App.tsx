import BandsNumber from './components/BandsNumber'
import Footer from './components/Footer'
import Header from './components/Header'
import InputValue from './components/InputValue'
import Resistor from './components/Resistor'
import Results from './components/Results'
import SelectMode from './components/SelectMode'

function App() {
  return (
    <div className="App">
      <Header />
      <SelectMode />
      <BandsNumber />
      <InputValue />
      <Resistor />
      <Results />
      <Footer />
    </div>
  )
}

export default App
