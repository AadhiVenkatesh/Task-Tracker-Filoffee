### React Task Manager App
A simple React application to manage daily tasks, featuring task addition, editing, deletion, filtering, and sorting functionalities. The app uses localStorage for data persistence and offers responsive design using plain CSS.

### 🚀 Features

Add Task:

Users can add a task with:

Title
Description
Due Date
Status (Pending, In Progress, Completed)

View Tasks:
Tasks are displayed in a responsive card layout, with:

Task details (title, description, due date, status)
Inline edit and delete options

Edit Task:
Allows users to edit task details inline.

Delete Task:
Provides a delete button with confirmation for task removal.

Filter and Sort:

Filter: Filter tasks by status (All, Pending, In Progress, Completed)

Sort: Sort tasks by due date (ascending/descending)

State Management:
Utilizes useState and useContext for managing state locally.

Data Persistence:
Stores task data in the browser's localStorage.

Responsive Design:
Ensures a seamless experience on both desktop and mobile devices using plain CSS.

### 🛠️ Technologies Used

React.js: Framework for building the user interface

CSS: Plain CSS for styling and responsiveness

Local Storage: For persisting task data across sessions

### 💻 Setup Instructions
Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/task-manager.git
cd task-manager
Install Dependencies:

bash
Copy code
npm install
Run the Development Server:

bash
Copy code
npm start
Open http://localhost:3000 to view the app in the browser.
Build for Production:

bash
Copy code
npm run build
Creates an optimized build in the build folder.

### 📂 Project Structure
bash

Copy code

src/

│

├── components/

│   ├── TaskForm.js       # Form for adding tasks

│   ├── TaskItem.js       # Individual task component

│   └── TaskList.js       # Displays the list of tasks

│

├── context/

│   └── TaskContext.js    # Context API for task management

│

├── App.js                # Main application component

├── App.css               # Global CSS styles

└── index.js              # Application entry point
