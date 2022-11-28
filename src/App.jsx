import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FormContainer from './components/FormContainer'
import ProtectedRoute from './components/ProtectedRoute'
import UnprotectedRoute from './components/UnprotectedRoute'
import NavBar from './components/NavBar'
import UserContainer from './components/UserContainer'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* I use this component to only show this routes to a logged in user */}
        <Route element={<ProtectedRoute />}>
          <Route exact path="/" element={<UserContainer />} />
          <Route path="/user/:userId" element={<UserContainer />} />
        </Route>
        {/* I use this component to only show this routes to a not logged in user */}
        <Route element={<UnprotectedRoute />}>
          <Route path="/login" element={<FormContainer />} />
          <Route path="/register" element={<FormContainer toBeRegister={1} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
