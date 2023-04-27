import { createContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export const SearchContext = createContext('')

function App() {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="app">
      <SearchContext.Provider value={{ inputValue, setInputValue }}>
        <div className="wrapper">
          <Header />
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
      </SearchContext.Provider>
    </div>
  )
}

export default App
