import { ReactNode, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, CheckSquare, Plus } from 'lucide-react'
import TaskModal from './TaskModal'
import { useTaskContext } from '../contexts/TaskContext'
import { Task } from '../types'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()
  const { addTask } = useTaskContext()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'Dashboard', icon: Home },
    { path: '/tasks', label: 'Tasks', icon: CheckSquare },
  ]

  const handleAddNew = () => {
    setIsModalOpen(true)
  }

  const handleSaveTask = (taskData: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
    addTask(taskData)
    setIsModalOpen(false)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                Task Manager
              </h1>
            </div>
            <button 
              onClick={handleAddNew}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <Plus className="w-4 h-4 mr-2" />
              New Task
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    isActive
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">{children}</div>
      </main>

      <TaskModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveTask}
      />
    </div>
  )
}

export default Layout 