
interface HeaderProps {
  onAddTask: () => void
}

export default function Header({ onAddTask }: HeaderProps) {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Task Manager</h1>
        <button
          onClick={onAddTask}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>
    </header>
  )
}

