
# 📝 TaskList - Task Management Application  

[![Live Demo](https://img.shields.io/badge/Live%20Demo-%E2%86%92-blue?style=flat&logo=googlechrome)](https://tasklist-28f3e.web.app/)

## 🚀 Overview  
TaskList is a **real-time task management application** that allows users to **add, edit, delete, and reorder tasks** using a **drag-and-drop interface**. Tasks are categorized into three sections:  
✅ **To-Do** | 🔄 **In Progress** | ✅ **Done**  

The app features **Firebase Authentication**, **MongoDB-backed persistence**, and a **modern, minimalistic UI** built with **React & Tailwind CSS**.  

---

## 📜 Table of Contents  
- [Features](#-features)  
- [Live Demo](#-live-demo)  
- [Tech Stack](#-tech-stack)  
- [Installation](#-installation)  
- [Backend API Endpoints](#-backend-api-endpoints)  
- [Usage](#-usage)  
- [Screenshots](#-screenshots)  
- [Contributing](#-contributing)  
- [License](#-license)  

---

## ✨ Features  
✅ **User Authentication** – Secure login with **Google Sign-In** (via Firebase).  
✅ **Task Management** – Users can **add, edit, delete, and reorder** tasks easily.  
✅ **Drag-and-Drop Interface** – Seamlessly move tasks between categories.  
✅ **Real-Time Synchronization** – All changes are instantly saved to the database.  
✅ **Modern UI** – Clean and responsive design with **Tailwind CSS & DaisyUI**.  
✅ **Mobile Friendly** – Fully responsive for desktop and mobile users.  
✅ **Dark Mode (Bonus Feature)** – Switch between light and dark themes.  
✅ **Due Dates & Alerts (Bonus Feature)** – Tasks show color indicators for overdue items.  

---

## 🌍 Live Demo  
Try the app live here: **[TaskList Live](https://tasklist-28f3e.web.app/)**  

---

## 🛠 Tech Stack  
### **Frontend** (Vite + React)  
- ⚡ **Vite.js** – Fast development setup  
- ⚛ **React 19** – Modern React framework  
- 🎨 **Tailwind CSS** – Utility-first styling  
- 📦 **React Query** – Efficient data fetching  
- 🖱 **React Beautiful DnD** – Drag-and-drop functionality  

### **Backend** (Node.js + Express)  
- 🌐 **Express.js** – Lightweight backend framework  
- 🗄 **MongoDB** – NoSQL database for storing tasks  
- 🔄 **WebSockets** – Real-time updates (via socket.io)  

### **Authentication & Hosting**  
- 🔑 **Firebase Authentication** – Secure user login  
- ☁ **Firebase Hosting** – Fast and scalable app hosting  

---

## 🏗 Installation  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/yourusername/tasklist.git
cd tasklist
```

### 2️⃣ Install Dependencies  

#### **Frontend**  
```sh
cd frontend
npm install
npm run dev  # Starts Vite development server
```

#### **Backend**  
```sh
cd backend
npm install
npm start  # Starts Express server
```

### 3️⃣ Set Up Firebase Authentication  
- Create a **Firebase project** at [Firebase Console](https://console.firebase.google.com/)  
- Enable **Google Authentication** in Firebase Authentication settings  
- Add Firebase credentials to **frontend/.env**  
  ```
  VITE_FIREBASE_API_KEY=your_api_key
  VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
  VITE_FIREBASE_PROJECT_ID=your_project_id
  ```

### 4️⃣ Set Up MongoDB  
- Install **MongoDB** and create a database called `tasklist`  
- Add your **MongoDB connection string** to **backend/.env**  
  ```
  MONGO_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/tasklist
  ```

---

## 📡 Backend API Endpoints  
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/tasks` | Create a new task |
| `GET` | `/tasks` | Retrieve all tasks for the user |
| `PUT` | `/tasks/:id` | Update a task (title, description, category) |
| `DELETE` | `/tasks/:id` | Delete a task permanently |

---

## 🎮 Usage  
1️⃣ **Sign in with Google** to access the app.  
2️⃣ **Create a task** by entering a title and optional description.  
3️⃣ **Drag & drop** tasks between categories: To-Do, In Progress, Done.  
4️⃣ **Edit or delete** tasks by clicking on them.  
5️⃣ **Tasks sync instantly** across devices.  

---

## 🖼 Screenshots  

| Light Mode | Dark Mode |
|------------|----------|
| ![Light Mode](https://via.placeholder.com/400x250) | ![Dark Mode](https://via.placeholder.com/400x250) |

---

## 🤝 Contributing  
Contributions are welcome! 🚀  

### **Steps to contribute:**  
1. **Fork** this repository.  
2. **Create a branch** (`feature-name`).  
3. **Commit changes** and push to GitHub.  
4. **Open a pull request** for review.  

---

## 📜 License  
This project is licensed under the **MIT License**.  

---

## 📬 Contact  
💻 **GitHub**: [YourUsername](https://github.com/yourusername)  
📧 **Email**: your.email@example.com  

---

Hope this helps! Let me know if you want any modifications. 🚀