import './App.css';
import { useEffect, useState } from 'react';
import Board from "./components/Board";
import Input from "./components/Input";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all"); // all, completed, pending
  const [filterPriority, setFilterPriority] = useState("all"); // all, high, medium, low
  const [darkMode, setDarkMode] = useState(false);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('todoTasks');
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedTasks) {
      setTaskList(JSON.parse(savedTasks));
    }
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  // Save tasks to localStorage whenever taskList changes
  useEffect(() => {
    localStorage.setItem('todoTasks', JSON.stringify(taskList));
  }, [taskList]);

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Filter tasks based on search, status, and priority
  const filteredTasks = taskList.filter(task => {
    const matchesSearch = task.text.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || 
                          (filterStatus === "completed" && task.completed) ||
                          (filterStatus === "pending" && !task.completed);
    const matchesPriority = filterPriority === "all" || task.priority === filterPriority;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  // Calculate task statistics
  const totalTasks = taskList.length;
  const completedTasks = taskList.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className={`min-h-screen transition-colors ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="px-4 pb-8 sm:px-12">
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-4 py-8">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text">
              To Do Board
            </h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
              }`}
              title="Toggle Dark Mode"
            >
              {darkMode ? '🌞' : '🌙'}
            </button>
          </div>
          
          {/* Task Statistics */}
          <div className="flex gap-4 text-sm">
            <span className={`px-3 py-1 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-blue-100 text-blue-800'}`}>
              Total: {totalTasks}
            </span>
            <span className={`px-3 py-1 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-green-100 text-green-800'}`}>
              Completed: {completedTasks}
            </span>
            <span className={`px-3 py-1 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-orange-100 text-orange-800'}`}>
              Pending: {pendingTasks}
            </span>
          </div>

          {/* Input Component */}
          <Input taskList={taskList} setTaskList={setTaskList} darkMode={darkMode} />
          
          {/* Search and Filters */}
          <div className="flex flex-col w-full max-w-4xl gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="🔍 Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`flex-1 border rounded-lg py-2 px-4 ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                  : 'bg-white border-gray-300'
              }`}
            />
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className={`border rounded-lg py-2 px-4 ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 text-white' 
                  : 'bg-white border-gray-300'
              }`}
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
            
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className={`border rounded-lg py-2 px-4 ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 text-white' 
                  : 'bg-white border-gray-300'
              }`}
            >
              <option value="all">All Priority</option>
              <option value="high">High Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Low Priority</option>
            </select>
          </div>
        </div>

        {/* Task Board */}
        {filteredTasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="mb-4 text-6xl">📋</div>
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {taskList.length === 0 
                ? "No tasks yet. Add one to get started!" 
                : "No tasks match your filters."}
            </p>
          </div>
        ) : (
          <div className="grid gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 sm:px-8 md:px-10 lg:px-12">
            {filteredTasks.map((task, index) => {
              const originalIndex = taskList.findIndex(t => t.id === task.id);
              return (
                <Board
                  key={task.id}
                  index={originalIndex}
                  task={task}
                  taskList={taskList}
                  setTaskList={setTaskList}
                  darkMode={darkMode}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;