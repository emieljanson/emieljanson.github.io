import { useState, useMemo } from 'react'
import { Task } from '../types'

interface UseTaskFiltersReturn {
  filteredTasks: Task[]
  statusFilter: string
  priorityFilter: string
  setStatusFilter: (status: string) => void
  setPriorityFilter: (priority: string) => void
  hasActiveFilters: boolean
  clearFilters: () => void
}

export const useTaskFilters = (tasks: Task[]): UseTaskFiltersReturn => {
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [priorityFilter, setPriorityFilter] = useState<string>('all')

  const filteredTasks = useMemo(() => {
    return tasks.filter((task: Task) => {
      const statusMatch = statusFilter === 'all' || task.status === statusFilter
      const priorityMatch = priorityFilter === 'all' || task.priority === priorityFilter
      return statusMatch && priorityMatch
    })
  }, [tasks, statusFilter, priorityFilter])

  const hasActiveFilters = statusFilter !== 'all' || priorityFilter !== 'all'

  const clearFilters = () => {
    setStatusFilter('all')
    setPriorityFilter('all')
  }

  return {
    filteredTasks,
    statusFilter,
    priorityFilter,
    setStatusFilter,
    setPriorityFilter,
    hasActiveFilters,
    clearFilters,
  }
}

