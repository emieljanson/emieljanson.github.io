import { Task } from '../types'

export const TASK_STATUS_OPTIONS = [
  { value: 'all', label: 'All Status' },
  { value: 'todo', label: 'Todo' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'done', label: 'Done' },
] as const

export const TASK_PRIORITY_OPTIONS = [
  { value: 'all', label: 'All Priorities' },
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
] as const

export const STATUS_COLORS: Record<Task['status'], string> = {
  todo: 'bg-gray-100 text-gray-800',
  'in-progress': 'bg-blue-100 text-blue-800',
  done: 'bg-green-100 text-green-800',
}

export const PRIORITY_COLORS: Record<Task['priority'], string> = {
  low: 'bg-green-100 text-green-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-red-100 text-red-800',
}

export const STATUS_LABELS: Record<Task['status'], string> = {
  todo: 'Todo',
  'in-progress': 'In Progress',
  done: 'Done',
}

