# 📋 To-Do Board App

A modern, feature-rich to-do list application built with React and Tailwind CSS. Manage your tasks efficiently with priorities, due dates, and smart filtering options.

![To-Do Board App](https://img.shields.io/badge/React-18.x-blue) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4) ![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### Core Functionality
- ✅ **Add Tasks** - Quickly create new tasks with a simple form
- ✏️ **Edit Tasks** - Modify task details, priority, and due dates
- 🗑️ **Delete Tasks** - Remove tasks with confirmation dialog
- ☑️ **Mark Complete** - Check off completed tasks with visual feedback

### Advanced Features
- 🎨 **Priority Levels** - Organize tasks with High, Medium, and Low priorities
- 📅 **Due Dates** - Set optional deadlines with overdue warnings
- 🔍 **Search** - Find tasks quickly with real-time search
- 🔽 **Filters** - Filter by status (All/Pending/Completed) and priority
- 💾 **Local Storage** - Tasks persist automatically across sessions
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📊 **Statistics** - View total, completed, and pending task counts
- 📱 **Responsive Design** - Works seamlessly on all devices

## 🚀 Demo

![App Screenshot](./screenshot.png) *(Add your screenshot here)*

## 🛠️ Technologies Used

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Local Storage API** - Data persistence
- **JavaScript ES6+** - Modern JavaScript features

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/todo-board-app.git
   cd todo-board-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
todo-board-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Board.jsx       # Individual task card component
│   │   └── Input.jsx       # Task input form component
│   ├── App.js              # Main application component
│   ├── App.css             # Application styles
│   └── index.js            # Entry point
├── package.json
└── README.md
```

## 🎯 Usage

### Adding a Task
1. Enter your task in the input field
2. Select a priority level (Low/Medium/High)
3. Optionally set a due date
4. Click "Add Task"

### Managing Tasks
- **Complete**: Click the checkbox to mark as done
- **Edit**: Click the "Edit" button to modify task details
- **Delete**: Click "Delete" and confirm to remove the task

### Filtering & Search
- Use the search bar to find specific tasks
- Filter by status: All, Pending, or Completed
- Filter by priority: All, High, Medium, or Low

### Dark Mode
Click the 🌙/🌞 icon in the header to toggle between light and dark themes.

## 🎨 Color Scheme

### Priority Colors
- **High Priority**: Red (#EF4444)
- **Medium Priority**: Yellow (#F59E0B)
- **Low Priority**: Green (#10B981)

### Theme Colors
- **Primary**: Violet (#8B5CF6)
- **Background (Light)**: Gray-50 (#F9FAFB)
- **Background (Dark)**: Gray-900 (#111827)

## 🔧 Customization

### Modifying Task Structure
Edit the task object in `Input.jsx`:
```javascript
const newTask = {
    id: Date.now(),
    text: input,
    priority: priority,
    dueDate: dueDate,
    completed: false,
    createdAt: new Date().toISOString()
};
```

### Adding New Features
The component structure is modular, making it easy to extend:
- Add new task properties in the task object
- Create new filter options in `App.js`
- Customize styling in component files

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first approach
- Icons from emoji set

## 🐛 Known Issues

- None currently. Please report any issues in the [Issues](https://github.com/yourusername/todo-board-app/issues) section.

## 📈 Future Enhancements

- [ ] Drag and drop task reordering
- [ ] Task categories/tags
- [ ] Subtasks functionality
- [ ] Export/Import tasks (JSON/CSV)
- [ ] Cloud sync with authentication
- [ ] Multiple boards/projects
- [ ] Task notes and descriptions
- [ ] Recurring tasks
- [ ] Notifications for due dates

## 📸 Screenshots

### Light Mode
![Light Mode](./screenshots/light-mode.png)

### Dark Mode
![Dark Mode](./screenshots/dark-mode.png)

### Mobile View
![Mobile View](./screenshots/mobile-view.png)

---

⭐ Star this repo if you find it helpful!

**Made with ❤️ and React**
