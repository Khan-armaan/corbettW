import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage1 from './pages/MainPage1'
import MainPage2 from './pages/MainPage2'
import MainPage3 from './pages/MainPage3'
import MainPage4 from './pages/MainPage4'
import MainPage5 from './pages/MainPage5'
function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<MainPage1 />} />
      <Route path="main2" element = {<MainPage2 />} />
      <Route path="main3" element = {<MainPage3 />} />
      <Route path="main4" element = {<MainPage4 />} />
      <Route path="main5" element = {<MainPage5 />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
