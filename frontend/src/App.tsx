import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './components/screens/Dashboard'
import Semesters from './components/screens/Semesters'
import Subjects from './components/screens/Subjects'
import Assignments from './components/screens/Assignments'
import Exams from './components/screens/Exams'
import Analytics from './components/screens/Analytics'
import Notifications from './components/screens/Notifications'
import Profile from './components/screens/Profile'
import Login from './components/screens/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/semesters" element={<Semesters />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
