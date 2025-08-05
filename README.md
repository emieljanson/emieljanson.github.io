# Task Manager App

A modern task management application built with React, TypeScript, and Vite. This app features a clean, Linear-inspired design with task tracking, filtering, and a responsive dashboard.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Lucide React** for icons
- **ESLint** for code quality

## Features

- 📊 Dashboard with task statistics
- 📝 Task management with status tracking
- 🏷️ Priority levels (Low, Medium, High)
- 🔍 Filter tasks by status and priority
- 📱 Responsive design
- 🎨 Modern, clean UI inspired by Linear

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Access the app:
   - **Main site**: [http://localhost:3000](http://localhost:3000) - Redirects to emieljanson.com
   - **Task Manager App**: [http://localhost:3000/app.html](http://localhost:3000/app.html)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
├── index.html          # Main landing page (redirects to emieljanson.com)
├── app.html            # React app entry point
├── src/
│   ├── components/     # Reusable UI components
│   ├── contexts/       # React contexts for state management
│   ├── pages/          # Page components
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # App entry point
│   └── index.css       # Global styles
└── ...config files
```

## Features Overview

### Dashboard
- Overview of task statistics
- Recent tasks list
- Quick status indicators

### Tasks Page
- Full task list with filtering
- Task cards with status and priority badges
- Delete functionality
- Responsive grid layout

### Task Management
- Add, edit, and delete tasks
- Status tracking (Todo, In Progress, Done)
- Priority levels
- Due date support

## Development

The app uses modern React patterns including:
- Functional components with hooks
- Context API for state management
- TypeScript for type safety
- Tailwind CSS for styling

## License

MIT 