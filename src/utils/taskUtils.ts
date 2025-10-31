import { STATUS_COLORS, PRIORITY_COLORS, STATUS_LABELS } from '../constants/taskConstants'
import { Task } from '../types'

export const getStatusColor = (status: Task['status']): string => {
  return STATUS_COLORS[status] || STATUS_COLORS.todo
}

export const getPriorityColor = (priority: Task['priority']): string => {
  return PRIORITY_COLORS[priority] || PRIORITY_COLORS.medium
}

export const getStatusLabel = (status: Task['status']): string => {
  return STATUS_LABELS[status] || status
}

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date)
}

