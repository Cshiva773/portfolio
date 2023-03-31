import './App.scss'
import {Routes,Route} from 'react-router-dom'
import Layout from './components/Layout'
import About from './components/About'
import Home from './components/Home'
export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </main>
  )
}
