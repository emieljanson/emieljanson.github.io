import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TaskProvider } from './contexts/TaskContext'
import Dashboard from './pages/Dashboard'
import Tasks from './pages/Tasks'
import Layout from './components/Layout'

function App() {
  return (
    <TaskProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </Layout>
      </Router>
    </TaskProvider>
  )
}

export default App 