import React, { createContext, useContext, useReducer, ReactNode } from 'react'
import { Task, TaskContextType } from '../types'

interface TaskState {
  tasks: Task[]
}

type TaskAction =
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'UPDATE_TASK'; payload: { id: string; updates: Partial<Task> } }
  | { type: 'DELETE_TASK'; payload: string }
  | { type: 'TOGGLE_COMPLETE'; payload: string }

const initialState: TaskState = {
  tasks: [
    {
      id: '1',
      title: 'Set up project structure',
      description: 'Initialize the React TypeScript project with Vite',
      status: 'done',
      priority: 'high',
      createdAt: new Date('2024-01-01'),
      updatedAt: new Date('2024-01-01'),
    },
    {
      id: '2',
      title: 'Create task management UI',
      description: 'Build the main dashboard and task list components',
      status: 'in-progress',
      priority: 'medium',
      createdAt: new Date('2024-01-02'),
      updatedAt: new Date('2024-01-02'),
    },
    {
      id: '3',
      title: 'Add task filtering',
      description: 'Implement filters for status, priority, and date',
      status: 'todo',
      priority: 'low',
      createdAt: new Date('2024-01-03'),
      updatedAt: new Date('2024-01-03'),
    },
  ],
}

const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      }
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, ...action.payload.updates, updatedAt: new Date() }
            : task
        ),
      }
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      }
    case 'TOGGLE_COMPLETE':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? {
                ...task,
                status: task.status === 'done' ? 'todo' : 'done',
                updatedAt: new Date(),
              }
            : task
        ),
      }
    default:
      return state
  }
}

const TaskContext = createContext<TaskContextType | undefined>(undefined)

export const useTaskContext = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider')
  }
  return context
}

interface TaskProviderProps {
  children: ReactNode
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState)

  const addTask = (taskData: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newTask: Task = {
      ...taskData,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    dispatch({ type: 'ADD_TASK', payload: newTask })
  }

  const updateTask = (id: string, updates: Partial<Task>) => {
    dispatch({ type: 'UPDATE_TASK', payload: { id, updates } })
  }

  const deleteTask = (id: string) => {
    dispatch({ type: 'DELETE_TASK', payload: id })
  }

  const toggleComplete = (id: string) => {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: id })
  }

  const getTasksByStatus = (status: Task['status']) => {
    return state.tasks.filter((task) => task.status === status)
  }

  const value: TaskContextType = {
    tasks: state.tasks,
    addTask,
    updateTask,
    deleteTask,
    getTasksByStatus,
    toggleComplete,
  }

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
} 