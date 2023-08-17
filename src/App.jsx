import './App.css'
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/itemListContainer/itemListContainer'

function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a ClinOK"></ItemListContainer>
    </>
  )
}

export default App
