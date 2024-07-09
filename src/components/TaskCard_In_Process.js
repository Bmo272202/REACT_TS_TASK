import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import { MdDelete } from "react-icons/md";

export default function TaskCard_In_Process() {
  const { tasks, deleteTask, handleSelectChange } = useTasks();

  return (
    <>
      {tasks
        .filter((task) => task.state === "In_Process")
        .map((task) => (
          <div
            key={task.id}
            className="flex space-x-4 justify-center ml-8  bg-slate-100 w-80 h-20 rounded-lg"
          >
            <h1 className="text-dark font-serif pt-7 static">{task.name}</h1>
            <select
              className="w-32 h-6 ml-4 mt-7 font-serif size-8 static"
              value={task.state}
              onChange={(e) => handleSelectChange(e, task.id)}
            >
              <option className="font-serif" value="Created">
                Created
              </option>
              <option className="font-serif" value="In_Process">
                In_Process
              </option>
              <option className="font-serif" value="Done">
                Done
              </option>
            </select>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-white font-serif flex items-center justify-center rounded-sm bg-red-600 size-8 mt-6 static"
            >
              <MdDelete />
            </button>
          </div>
        ))}
    </>
  );
}
