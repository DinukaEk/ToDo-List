import { useState } from "react";

const Board = ({ task, index, taskList, setTaskList, darkMode }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task.text);
    const [editedPriority, setEditedPriority] = useState(task.priority);
    const [editedDueDate, setEditedDueDate] = useState(task.dueDate || "");
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    const handleDelete = () => {
        const updatedTasks = taskList.filter((_, i) => i !== index);
        setTaskList(updatedTasks);
        setShowDeleteConfirm(false);
    }

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleSave = () => {
        if (editedTask.trim() === "") {
            alert("Task cannot be empty!");
            return;
        }

        let updatedTasks = [...taskList];
        updatedTasks[index] = {
            ...updatedTasks[index],
            text: editedTask,
            priority: editedPriority,
            dueDate: editedDueDate
        };
        setTaskList(updatedTasks);
        setIsEditing(false);
    }

    const handleCancel = () => {
        setEditedTask(task.text);
        setEditedPriority(task.priority);
        setEditedDueDate(task.dueDate || "");
        setIsEditing(false);
    }

    const toggleComplete = () => {
        let updatedTasks = [...taskList];
        updatedTasks[index] = {
            ...updatedTasks[index],
            completed: !updatedTasks[index].completed
        };
        setTaskList(updatedTasks);
    }

    // Priority badge styling
    const getPriorityColor = (priority) => {
        switch(priority) {
            case 'high':
                return darkMode 
                    ? 'bg-red-900 text-red-200 border-red-700' 
                    : 'bg-red-100 text-red-800 border-red-300';
            case 'medium':
                return darkMode 
                    ? 'bg-yellow-900 text-yellow-200 border-yellow-700' 
                    : 'bg-yellow-100 text-yellow-800 border-yellow-300';
            case 'low':
                return darkMode 
                    ? 'bg-green-900 text-green-200 border-green-700' 
                    : 'bg-green-100 text-green-800 border-green-300';
            default:
                return darkMode 
                    ? 'bg-gray-700 text-gray-200 border-gray-600' 
                    : 'bg-gray-100 text-gray-800 border-gray-300';
        }
    }

    // Check if task is overdue
    const isOverdue = task.dueDate && new Date(task.dueDate) < new Date() && !task.completed;

    // Format date
    const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }

    return (
        <>
            <div className={`flex flex-col justify-between h-full px-4 pt-4 pb-4 rounded-xl border-2 transition-all ${
                task.completed 
                    ? darkMode 
                        ? 'bg-gray-800 border-gray-700 opacity-75' 
                        : 'bg-gray-50 border-gray-300 opacity-75'
                    : darkMode
                        ? 'bg-gray-800 border-gray-700 hover:border-violet-500'
                        : 'bg-white border-gray-200 hover:border-violet-400 shadow-sm hover:shadow-md'
            }`}>
                {isEditing ? (
                    <>
                        <div className="space-y-3">
                            <input
                                className={`w-full px-3 py-2 border rounded-lg ${
                                    darkMode 
                                        ? 'bg-gray-700 border-gray-600 text-white' 
                                        : 'bg-white border-gray-300'
                                }`}
                                type="text"
                                value={editedTask}
                                onChange={(e) => setEditedTask(e.target.value)}
                            />
                            
                            <select
                                value={editedPriority}
                                onChange={(e) => setEditedPriority(e.target.value)}
                                className={`w-full px-3 py-2 border rounded-lg ${
                                    darkMode 
                                        ? 'bg-gray-700 border-gray-600 text-white' 
                                        : 'bg-white border-gray-300'
                                }`}
                            >
                                <option value="low">Low Priority</option>
                                <option value="medium">Medium Priority</option>
                                <option value="high">High Priority</option>
                            </select>

                            <input
                                type="date"
                                value={editedDueDate}
                                onChange={(e) => setEditedDueDate(e.target.value)}
                                className={`w-full px-3 py-2 border rounded-lg ${
                                    darkMode 
                                        ? 'bg-gray-700 border-gray-600 text-white' 
                                        : 'bg-white border-gray-300'
                                }`}
                            />
                        </div>
                        
                        <div className="flex gap-2 mt-4">
                            <button 
                                className="flex-1 px-3 py-2 font-medium text-white transition-colors bg-green-500 rounded-lg hover:bg-green-600" 
                                onClick={handleSave}
                            >
                                Save
                            </button>
                            <button 
                                className={`flex-1 px-3 py-2 text-white rounded-lg transition-colors font-medium ${
                                    darkMode 
                                        ? 'bg-gray-600 hover:bg-gray-700' 
                                        : 'bg-gray-500 hover:bg-gray-600'
                                }`}
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            {/* Priority Badge */}
                            <div className="flex items-center justify-between mb-3">
                                <span className={`text-xs px-2 py-1 rounded-full border font-semibold uppercase ${getPriorityColor(task.priority)}`}>
                                    {task.priority}
                                </span>
                                {isOverdue && (
                                    <span className="px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-full">
                                        Overdue
                                    </span>
                                )}
                            </div>

                            {/* Task Text with Checkbox */}
                            <div className="flex items-start gap-3 mb-3">
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={toggleComplete}
                                    className="w-5 h-5 mt-1 rounded cursor-pointer accent-violet-500"
                                />
                                <p className={`text-left flex-1 ${task.completed ? 'line-through opacity-60' : ''}`}>
                                    {task.text}
                                </p>
                            </div>

                            {/* Due Date */}
                            {task.dueDate && (
                                <div className={`text-sm mb-2 flex items-center gap-1 ${
                                    isOverdue 
                                        ? 'text-red-500 font-semibold' 
                                        : darkMode 
                                            ? 'text-gray-400' 
                                            : 'text-gray-600'
                                }`}>
                                    <span>📅</span>
                                    <span>{formatDate(task.dueDate)}</span>
                                </div>
                            )}
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-2 mt-4">
                            <button 
                                className="flex-1 px-3 py-2 font-medium text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600" 
                                onClick={handleEdit}
                            >
                                Edit
                            </button>
                            <button 
                                className="flex-1 px-3 py-2 font-medium text-white transition-colors bg-red-500 rounded-lg hover:bg-red-600" 
                                onClick={() => setShowDeleteConfirm(true)}
                            >
                                Delete
                            </button>
                        </div>
                    </>
                )}
            </div>

            {/* Delete Confirmation Modal */}
            {showDeleteConfirm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
                    <div className={`rounded-lg p-6 max-w-sm w-full ${
                        darkMode ? 'bg-gray-800 text-white' : 'bg-white'
                    }`}>
                        <h3 className="mb-2 text-xl font-bold">Delete Task?</h3>
                        <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Are you sure you want to delete this task? This action cannot be undone.
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={handleDelete}
                                className="flex-1 px-4 py-2 font-medium text-white transition-colors bg-red-500 rounded-lg hover:bg-red-600"
                            >
                                Delete
                            </button>
                            <button
                                onClick={() => setShowDeleteConfirm(false)}
                                className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                                    darkMode 
                                        ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                                        : 'bg-gray-200 hover:bg-gray-300'
                                }`}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Board;