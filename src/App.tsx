import Header from "./components/header"
import TaskCard from "./components/task-card"
import type { Task } from "./types"

function App() {
  const tasks: Task[] = [
    {
      _id: "1",
      title: "Task One",
      description: "This is task one",
      completed: false,
    },
    {
      _id: "2",
      title: "Task Two",
      description: "This is task two",
      completed: true,
    },
  ]

  const handleAddTask = () => {
    alert("Add Task clicked!")
  }

  const handleEditTask = (id: string) => {
    alert("Edit task with id: " + id)
  }

  const handleDeleteTask = (id: string) => {
    alert("Delete task with id: " + id)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onAddTask={handleAddTask} />

      <main className="container mx-auto px-4 py-8 space-y-4">
        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
          />
        ))}
      </main>
    </div>
  )
}

export default App

