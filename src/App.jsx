import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Timer from './pages/Timer'
import WhyPomodoro from './pages/WhyPomodoro'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/why-pomodoro" element={<WhyPomodoro />} />
      </Routes>
    </Router>
  )
}

export default App
