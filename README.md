# 📝 PLP Task Manager

A simple React-based task manager .  
The app allows users to create, manage, and persist tasks using localStorage, browse posts from a public API, and switch between light and dark modes using Tailwind CSS.
Site URL https://plpnotebook.netlify.app/

---

## 🚀 Features

| Feature | Description |
|--------|-------------|
| ✅ Task Management | Add, delete, mark tasks as completed |
| 💾 Local Persistence | Saves tasks using `localStorage` |
| 🌙 Light/Dark Mode | Toggle theme using Tailwind `darkMode: 'class'` |
| 🌍 API Integration | Fetches public posts using JSONPlaceholder API |
| 🔍 Search & Pagination | Filter and navigate API data easily |
| 🧱 Reusable Components | Clean structure with `Layout`, `Navbar`, `Footer`, etc. |
| 📱 Responsive Design | Fully responsive (mobile + desktop) |

---

## 🛠️ Tech Stack

- **React (Vite)**
- **React Router DOM**
- **Tailwind CSS**
- **LocalStorage API**
- **Context API** 

---

## 📁 Folder Structure
├── components/

│ ├── Navbar.jsx

│ ├── Footer.jsx

│ ├── TaskManager.jsx

│ ├── ApiData.jsx

│ ├── Button.jsx

│ └── TaskCard.jsx 

│ └──TaskManager.jsx

│
├── context/

│ └── ThemeContext.jsx

│
├── pages/

│ ├── Home.jsx

│ └── Tasks.jsx

│ └── ApiPage.jsx

│
├── App.jsx

├── main.jsx

├── index.css


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd <project-folder>

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev

The app should now be available at:
 http://localhost:5173/

 
