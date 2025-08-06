import { useTaskContext } from '../contexts/TaskContext'
import { CheckSquare, Clock, AlertCircle, TrendingUp, Target, Zap } from 'lucide-react'

const Dashboard: React.FC = () => {
  const { tasks, getTasksByStatus } = useTaskContext()

  const todoTasks = getTasksByStatus('todo')
  const inProgressTasks = getTasksByStatus('in-progress')
  const doneTasks = getTasksByStatus('done')

  const completionRate = tasks.length > 0 ? Math.round((doneTasks.length / tasks.length) * 100) : 0

  const stats = [
    {
      name: 'Total Tasks',
      value: tasks.length,
      icon: CheckSquare,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      name: 'In Progress',
      value: inProgressTasks.length,
      icon: Clock,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
    },
    {
      name: 'Completed',
      value: doneTasks.length,
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      name: 'Completion Rate',
      value: `${completionRate}%`,
      icon: Target,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Productivity Dashboard</h2>
        <p className="text-gray-600">Track your progress and stay focused on what matters</p>
      </div>

      {/* Productivity Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.name}
              className="bg-white overflow-hidden shadow-sm rounded-xl border border-gray-100"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center border ${stat.bgColor} ${stat.borderColor}`}
                    >
                      <Icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="ml-4 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {stat.name}
                      </dt>
                      <dd className="text-lg font-semibold text-gray-900">
                        {stat.value}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
            <p className="text-gray-600">Get things done faster</p>
          </div>
          <button className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
            <Zap className="w-4 h-4 mr-2" />
            Add Task
          </button>
        </div>
      </div>

      {/* Recent Tasks */}
      <div className="bg-white shadow-sm rounded-xl border border-gray-100">
        <div className="px-6 py-5 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Recent Tasks</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {tasks.slice(0, 5).map((task) => (
            <div
              key={task.id}
              className="px-6 py-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      task.status === 'done'
                        ? 'bg-green-500'
                        : task.status === 'in-progress'
                        ? 'bg-blue-500'
                        : 'bg-gray-400'
                    }`}
                  />
                  <div>
                    <p className={`text-sm font-medium text-gray-900 ${
                      task.status === 'done' ? 'line-through text-gray-500' : ''
                    }`}>
                      {task.title}
                    </p>
                    <p className="text-xs text-gray-500">
                      {task.status.replace('-', ' ')} • {task.priority}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">
                  {new Date(task.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard 