import { FaPlus } from "react-icons/fa";

function AddTask() {
  return (
    <div>
        <button className="btn btn-primary w-full">Add new task <FaPlus className="ml-3"/></button>
    </div>
  )
}

export default AddTask