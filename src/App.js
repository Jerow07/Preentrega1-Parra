import './App.css';

import { ItemDetailContainer } from './components/ItemDetailContainer'
import { ItemListContainer } from './components/ItemListContainer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { useEffect, useState } from 'react'

function App() {
  const [cars, setCars] = useState([])

  useEffect(() => async () => {
    fetch("/cars.json")
      .then(result => result.json())
      .then(data => setCars(data))
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ItemListContainer items={cars} />}></Route>
        <Route path="/category/:id" element={<ItemListContainer items={cars} />}></Route>
        <Route path="/item/:id" element={<ItemDetailContainer items={cars} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
