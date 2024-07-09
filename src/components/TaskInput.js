import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { initialState } from "../interfaces/data";
import { IoIosAddCircle } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

function TaskInput() {
  const [task, setTask] = useState(initialState);
  const { createTasks } = useTasks();

  const handleInputChange = (event) => {
    setTask({ ...task, name: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    createTasks(task);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="text-white pt-20 font-serif text-center">
          TASKS LIST BRANDON MORENO
        </h1>
        <div className="flex space-x-4 justify-center mt-5 ml-5 static">
          <input
            className="w-60 h-14 font-serif text-center "
            placeholder="Ingrese una nueva tarea"
            maxLength={15}
            value={task.name}
            onChange={handleInputChange}
          ></input>
          <button
            className="text-white font-serif  bg-green-500 size-14 flex items-center justify-center"
            onClick={() => {
              toast.success("Successfully toasted!", {
                duration: 4000,
              });
            }}
          >
            <IoIosAddCircle className="size-6" />
          </button>
        </div>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default TaskInput;
