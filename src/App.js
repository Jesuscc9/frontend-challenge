import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, NotFound } from './pages/'
import { Navbar } from './components/Navbar'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
