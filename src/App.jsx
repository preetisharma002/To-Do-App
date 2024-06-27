import { useState } from "react";
import "./App.css";
const App = () => {
  const date = new Date();
  const myfooter = date.getFullYear();

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim().length === 0) {
      console.log("Enter The Tasks");
      setError("Enter Task First!");
      return;
    }
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
    setError("");
  };

  const handleRemove = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  const handleCompleted = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <>
      <div className="to-do-container my-8 py-8 p-2 w-full m-auto flex justify-center align-middle">
        <div className=" row flex flex-col justify-center align-middle gap-6">
          <h1 className="text-center text-6xl font-bold">📝To Do App</h1>
          <h2 className="text-center text-3xl">
            Let's Manage Your <span className="font-bold">Tasks</span> Here!
          </h2>
          <div className="to-do-search w-full flex justify-center align-middl gap-4 flex-wrap">
            <input
              type="text"
              placeholder="Enter Your Task"
              value={task}
              onChange={handleTask}
            />
            <button
              className="bg-black text-white p-4 px-8 rounded-md hover:opacity-85"
              onClick={addTask}
            >
              Add Task
            </button>
          </div>
          <div className="error-container flex w-full justify-center align-middle ">
            {error && (
              <p className="p-1 px-2 font-semibold text-red-700 bg-red-200">
                {error}
              </p>
            )}
          </div>
          <div className="result flex justify-center flex-col align-middle mt-5 gap-5">
            {tasks.map((t, index) => (
              <>
                <div className="task border-[1px] border-gray-300 rounded-lg shadow-2xl shadow-slate-200  p-8 flex justify-between align-middle">
                  <p
                    style={{
                      textDecoration: t.completed ? "line-through" : "none",
                      opacity: t.completed ? "0.5" : "1",
                    }}
                    className="font-bold capitalize"
                  >
                    {t.text}
                  </p>
                  <div className="button-container flex ">
                    <button
                      className=" text-white p-2 px-4 hover:opacity-85 w-auto h-min"
                      onClick={() => handleCompleted(index)}
                      style={{
                        backgroundColor: t.completed ? "red" : "green",
                      }}
                    >
                      {t.completed ? "Undo" : "Complete"}
                    </button>
                    <button
                      className="bg-black text-white p-2 px-4 hover:opacity-85 w-auto h-min"
                      onClick={() => handleRemove(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <p className="fixed bottom-0 w-full text-center text-sm bg-white">
        preeti@{myfooter}
      </p>
    </>
  );
};
export default App;
