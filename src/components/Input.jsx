import { useState } from "react"

const Input = ({taskList, setTaskList, darkMode}) => {
    const [input, setInput] = useState("")
    const [priority, setPriority] = useState("medium")
    const [dueDate, setDueDate] = useState("")

    const handleAddTask = (e) => {
        e.preventDefault();
        
        if (input.trim() === "") {
            alert("Please enter a task!");
            return;
        }

        const newTask = {
            id: Date.now(), // Unique ID for each task
            text: input,
            priority: priority,
            dueDate: dueDate,
            completed: false,
            createdAt: new Date().toISOString()
        };

        setTaskList([...taskList, newTask]);
        setInput("");
        setPriority("medium");
        setDueDate("");
    }

    return (
        <>
            <form className="flex flex-col w-full max-w-4xl gap-3" onSubmit={handleAddTask}>
                <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                    <input
                        className={`flex-1 border rounded-lg py-2 px-4 text-lg ${
                            darkMode 
                                ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                                : 'bg-white border-gray-300'
                        }`}
                        type="text"
                        placeholder="Add a task"
                        value={input}
                        onChange={(e) => setInput(e.target.value)} 
                    />
                    
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className={`border rounded-lg py-2 px-4 ${
                            darkMode 
                                ? 'bg-gray-800 border-gray-700 text-white' 
                                : 'bg-white border-gray-300'
                        }`}
                    >
                        <option value="low">Low Priority</option>
                        <option value="medium">Medium Priority</option>
                        <option value="high">High Priority</option>
                    </select>
                    
                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className={`border rounded-lg py-2 px-4 ${
                            darkMode 
                                ? 'bg-gray-800 border-gray-700 text-white' 
                                : 'bg-white border-gray-300'
                        }`}
                    />
                    
                    <button
                        type="submit"
                        className="px-6 py-2 font-medium text-white transition-colors rounded-lg bg-violet-500 hover:bg-violet-600"
                    >
                        Add Task
                    </button>
                </div>
            </form>
        </>
    )
}

export default Input