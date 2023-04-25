import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  const [inputValue, setInputValue] = useState('')

  // const fetchData = async () => {
  //   const res = await fetch('http://localhost:5001/api/pizzas')
  //   const data = await res.json()

  //   setPizzas(data)
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  return (
    <div className="app">
      <div className="wrapper">
        <Header searchValue={inputValue} setSearchValue={setInputValue} />
        <Routes>
          <Route
            path="/"
            element={
              <Home searchValue={inputValue} setSearchValue={setInputValue} />
            }
          />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
