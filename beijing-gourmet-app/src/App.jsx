import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import OurStoryPage from './pages/OurStoryPage'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/menu" element={<MenuPage/>}/>
        <Route path="/our_story" element={<OurStoryPage/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
