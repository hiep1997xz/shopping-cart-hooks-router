import './App.css'
import data from './components/back/Data'
import Header from './components/front/header/Header'
import Router from './components/front/routes/Router'

function App() {
  const { productItems } = data
  console.log(productItems)
  return (
    <div>
      <Header />
      <Router />
    </div>
  )
}

export default App
