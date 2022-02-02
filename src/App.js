import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, NotFound } from './pages/'

const App = () => {
  return (
    <div className='App'>
      <h1>HOla</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
