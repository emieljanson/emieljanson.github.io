import { Task } from '../types'
import { Calendar, Clock, Trash2, Edit, CheckCircle, Circle } from 'lucide-react'

interface TaskCardProps {
  task: Task
  onEdit?: (task: Task) => void
  onDelete?: (id: string) => void
  onToggleComplete?: (id: string) => void
}

const TaskCard: React.FC<TaskCardProps> = ({ 
  task, 
  onEdit, 
  onDelete, 
  onToggleComplete 
}) => {
  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'todo':
        return 'bg-gray-50 text-gray-600 border-gray-200'
      case 'in-progress':
        return 'bg-blue-50 text-blue-600 border-blue-200'
      case 'done':
        return 'bg-green-50 text-green-600 border-green-200'
      default:
        return 'bg-gray-50 text-gray-600 border-gray-200'
    }
  }

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'low':
        return 'bg-green-50 text-green-600'
      case 'medium':
        return 'bg-yellow-50 text-yellow-600'
      case 'high':
        return 'bg-red-50 text-red-600'
      default:
        return 'bg-gray-50 text-gray-600'
    }
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
    }).format(date)
  }

  const isCompleted = task.status === 'done'

  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-200 ${
      isCompleted ? 'task-complete' : ''
    }`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-start space-x-3">
            {onToggleComplete && (
              <button
                onClick={() => onToggleComplete(task.id)}
                className="mt-1 flex-shrink-0"
              >
                {isCompleted ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-300 hover:text-blue-500 transition-colors" />
                )}
              </button>
            )}
            
            <div className="flex-1">
              <h3 className={`text-lg font-medium text-gray-900 mb-2 ${
                isCompleted ? 'task-title' : ''
              }`}>
                {task.title}
              </h3>
              {task.description && (
                <p className="text-gray-600 text-sm mb-4">{task.description}</p>
              )}
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {formatDate(task.createdAt)}
                </div>
                {task.dueDate && (
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    Due: {formatDate(task.dueDate)}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {onEdit && (
            <button
              onClick={() => onEdit(task)}
              className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <Edit className="w-4 h-4" />
            </button>
          )}
          {onDelete && (
            <button
              onClick={() => onDelete(task.id)}
              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
      
      <div className="flex items-center space-x-2 mt-4">
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(
            task.status
          )}`}
        >
          {task.status.replace('-', ' ')}
        </span>
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getPriorityColor(
            task.priority
          )}`}
        >
          {task.priority}
        </span>
      </div>
    </div>
  )
}

export default TaskCard 