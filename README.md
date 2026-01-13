# Task Manager App

A modern, fully-featured todo/task management application built with React, TypeScript, Vite, and Tailwind CSS.

## Features

✅ **Create, Edit, and Delete Tasks** - Full CRUD functionality for managing tasks
✅ **Task Status Management** - Track tasks through todo, in-progress, and done states
✅ **Priority Levels** - Assign low, medium, or high priority to tasks
✅ **Due Dates** - Set optional due dates for tasks
✅ **Filtering** - Filter tasks by status and priority
✅ **Dashboard** - Overview with statistics and recent tasks
✅ **Responsive Design** - Beautiful UI that works on all devices
✅ **Type-Safe** - Built with TypeScript for reliability

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **Context API** - State management

## Project Structure

```
src/
├── components/
│   ├── Layout.tsx          # Main layout with header and navigation
│   ├── TaskCard.tsx        # Individual task card component
│   └── TaskModal.tsx       # Modal for creating/editing tasks
├── contexts/
│   └── TaskContext.tsx     # Global state management for tasks
├── pages/
│   ├── Dashboard.tsx       # Dashboard with stats and overview
│   └── Tasks.tsx           # Task list with filters
├── types/
│   └── index.ts            # TypeScript type definitions
├── utils/
│   └── cn.ts               # Utility for className merging
├── App.tsx                 # Main app component with routing
├── main.tsx                # App entry point
└── index.css               # Global styles
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Usage

### Creating a Task

1. Click the "New Task" button in the header or "Add Task" button on the Tasks page
2. Fill in the task details:
   - **Title** (required)
   - **Description** (optional)
   - **Status** (todo, in-progress, done)
   - **Priority** (low, medium, high)
   - **Due Date** (optional)
3. Click "Create" to add the task

### Editing a Task

1. Click the edit icon (pencil) on any task card
2. Modify the task details
3. Click "Update" to save changes

### Deleting a Task

1. Click the delete icon (trash) on any task card
2. Confirm the deletion

### Filtering Tasks

On the Tasks page, use the filter dropdowns to:
- Filter by status (All, Todo, In Progress, Done)
- Filter by priority (All, Low, Medium, High)

## Components

### TaskContext

Provides global state management for tasks using React's Context API and useReducer hook. Includes functions for adding, updating, deleting, and filtering tasks.

### Layout

Main application layout component that includes:
- Header with app title and "New Task" button
- Navigation menu with Dashboard and Tasks links
- Task creation modal

### TaskCard

Displays individual task information including:
- Title and description
- Creation date and due date
- Status and priority badges
- Edit and delete buttons

### TaskModal

Reusable modal component for creating and editing tasks. Handles form validation and submission.

### Dashboard

Shows an overview of all tasks with:
- Statistics cards (total, in-progress, completed, pending)
- Recent tasks list

### Tasks

Main task management page with:
- Task creation button
- Status and priority filters
- Grid layout of task cards

## Type Definitions

```typescript
interface Task {
  id: string
  title: string
  description?: string
  status: 'todo' | 'in-progress' | 'done'
  priority: 'low' | 'medium' | 'high'
  createdAt: Date
  updatedAt: Date
  dueDate?: Date
}
```

## Customization

### Colors

The app uses a custom blue color palette defined in `tailwind.config.js`. You can customize the primary colors by modifying the theme configuration.

### Default Tasks

Initial sample tasks are defined in `src/contexts/TaskContext.tsx`. You can modify or remove these in the `initialState` object.

## Future Enhancements

Some ideas for extending the app:

- 🔍 Search functionality
- 🏷️ Tags/categories for tasks
- 📱 Mobile app version
- 💾 Local storage persistence
- 🔐 User authentication
- 🌐 Backend API integration
- 📧 Email notifications
- 📊 Advanced analytics and charts
- 🎨 Theme customization (dark mode)
- 📤 Export tasks to CSV/JSON

## License

MIT

## Contributing

Feel free to submit issues and pull requests!
