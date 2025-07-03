import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import BookCaretakerPage from './pages/BookCaretakerPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/book" element={<BookCaretakerPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
