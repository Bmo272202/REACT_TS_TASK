import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskCard_Created from "./components/TaskCard_Created";
import TaskCard_In_Process from "./components/TaskCard_In_Process";
import TaskCard_Done from "./components/TaskCard_Done";
import { IoIosCreate, IoMdDoneAll } from "react-icons/io";
import { FaGear } from "react-icons/fa6";
export default function App() {
  return (
    <div className="container mx-auto bg-neutral-950  h-80 w-full size-full ">
      <TaskInput />
      <div className="bg-transparent grid grid-cols-3 gap-3 mt-7 mr-7 ml-7">
        <div className="flex flex-col space-y-4 bg-gradient-to-r from-rose-600 to-red-600 mr-10 ml-10  pt-4 pb-4 pl-2.5 overflow-y">
          <h1 className="font-serif text-center text-white text-lg mr-6 flex items-center justify-center ">
            CREATED
            <IoIosCreate className="ml-1 mb-1 size-6" />
          </h1>
          <TaskCard_Created />
        </div>
        <div className="flex flex-col space-y-4 bg-gradient-to-r from-yellow-500 to-amber-500 mr-10 ml-10  pt-4 pb-4 pl-2.5 ">
          <h1 className="font-serif text-center  text-white text-lg mr-3 flex items-center justify-center">
            WORKING <FaGear className="ml-1 mb-0.5 size-5" />
          </h1>
          <TaskCard_In_Process />
        </div>
        <div className="flex flex-col space-y-4 bg-gradient-to-r from-emerald-600 to-green-600 mr-10 ml-10  pt-4 pb-4 pl-2.5">
          <h1 className="font-serif text-center text-white text-lg flex items-center justify-center">
            DONE <IoMdDoneAll className="ml-1 mb-0.5 size-6" />
          </h1>
          <TaskCard_Done />
        </div>
      </div>
    </div>
  );
}
