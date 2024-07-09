import { createContext, useContext, useState, useEffect } from "react";
import { pb } from "../libs/pocketbase";

export const TaskContext = createContext();

export const useTasks = () => {
  const contex = useContext(TaskContext);
  if (!contex)
    throw new Error("useTask must be used within a TaskContextProvider");
  return contex;
};

export const TaskContexProvier = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    return await pb
      .collection("tasks")
      .getFullList()
      .then((res) => setTasks(res));
  };

  const createTasks = async (task) => {
    try {
      await pb.collection("Tasks").create(task);
      fetchData();
    } catch (error) {
      alert("no se aceptan vacios");
    }
  };

  const deleteTask = async (id) => {
    const confirm = window.confirm("Quieres eliminar la tarea?");
    if (!confirm) {
      return;
    }
    await pb.collection("tasks").delete(id);
    setTasks(tasks.filter((task) => task.id !== id));
    fetchData();
  };

  const fetcherUpdate = async (id, state) => {
    await pb.collection("tasks").update(id, { state });
  };

  const handleSelectChange = async (event, taskId) => {
    const newState = event.target.value;
    await fetcherUpdate(taskId, newState);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        fetchData,
        createTasks,
        deleteTask,
        fetcherUpdate,
        handleSelectChange,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
