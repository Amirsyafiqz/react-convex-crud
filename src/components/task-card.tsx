import type { Task } from "../types"

interface TaskCardProps {
  task: Task
  onDelete: (id: string) => void
  onEdit: (id: string) => void
}

export default function TaskCard({ task, onDelete, onEdit }: TaskCardProps) {
  return (
    <div className="bg-white shadow rounded p-4 flex justify-between items-start">
      <div>
        <h3 className="font-bold text-lg">{task.title}</h3>
        <p className="text-gray-600">{task.description}</p>
        <p className={task.completed ? "text-green-600" : "text-red-600"}>
          {task.completed ? "Done ✅" : "Not done ❌"}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2">
        <button
          onClick={() => onEdit(task._id)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

