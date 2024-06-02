import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <>
    <div className="bg-black min-h-screen flex flex-col items-center">
      <header className="header">
        <h1 className='text-center text-white text-4xl'>Chores To Do List</h1>
      </header>

      <section className="to-do-list-sect w-full max-w-md mx-auto text-left">
        {tasks.map((task, index) => (
          <div className="container flex justify-between items-center p-4 my-4" key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(index)}
            />
            <h2 className={`text-lg text-left ${task.completed ? 'line-through text-gray-700' : 'text-white'}`}>{task.text}</h2>
            <button className='btn' onClick={() => handleDeleteTask(index)}>
              <FontAwesomeIcon icon={faTrash} className="text-white"/>
            </button>
          </div>
        ))}
      </section>
      <hr className="separator my-4 w-full border border-gray-700" />
      <section className="add-todo w-full max-w-md mx-auto">
        
        <h1 className='text-white text-center '>Done: {tasks.filter(task => task.completed).length}</h1>
        <h3 className='text-white mt-4 pb-4'>Add todo</h3>
        <form onSubmit={handleAddTask} className="flex flex-col">
          <input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            className="w-full py-2 px-4 rounded border-gray-600 focus:outline-none focus:border-gray-700"
          />
         <button type="submit" className="btn bg-gray-600 text-white self-start mt-2 p-3 rounded">ADD TASK</button>
        </form>
        
      </section>
      </div>
    </>
  );
}

export default App;
