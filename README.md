# TixFlow 🗂️  
**A Simple Ticket Management System using Node.js and MongoDB**

---

## 📖 Project Description

**TixFlow** is a lightweight ticket management system that allows users to create, manage, and track support tickets. Built using **Node.js** on the backend and **React.js** for the frontend, TixFlow provides a responsive and user-friendly interface to manage tickets with ease.

---

## 🌟 Overview

TixFlow is designed for:
- **Creating** support tickets with different priority levels and statuses.
- **Tracking** the progress of tickets through a user-friendly interface.
- **Managing** tickets with features like editing, updating status, and deleting tickets.
- A well-structured RESTful API to handle ticket management.

---

## 🛠️ Tech Stack

### **Frontend**:
- **React.js**: A JavaScript library for building dynamic user interfaces.
- **React-Router-Dom**: React.js routing library.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Lucide Icons**: Modern icon library for adding UI icons.

### **Backend**:
- **Node.js**: JavaScript runtime for backend logic.
- **Express.js**: Web framework for handling HTTP requests.
- **MongoDB**: NoSQL database for storing tickets.
- **Mongoose**: ORM for MongoDB to model ticket data.
- **Cors**: Middleware for Cross-Origin Resource Sharing.
- **Body-Parser**: Middleware for parsing incoming request bodies.

---

## ⚙️ Installation and Setup

### Prerequisites
Before running this project, ensure that you have the following installed:
- **Node.js** (v12+)

### Steps to Set Up:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/TixFlow.git
   cd TixFlow
   ```

2. **Install Backend Dependencies**:
   Navigate to backend directory, run the following command to install server-side dependencies:
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**:
   Navigate to the client directory and install dependencies for the frontend:
   ```bash
   cd frontend
   npm install
   ```

4. **Set up Environment Variables**:
   Create a `.env` file in the backend directory with a MongoDB URI:
   ```bash
   MONGO_DB_URI=mongodb+srv://bhavesh:Bhavesh%23123@cluster0.9igeh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   PORT=3000
   ```

5. **Run the Backend**:
   Start the Node.js server with the following command:
   ```bash
   npm start
   ```

6. **Run the Frontend**:
   In a new terminal, navigate to the `client` folder and start the React app:
   ```bash
   cd client
   npm start
   ```

7. **Access the Application**:
   Open your browser and go to `http://localhost:5173` to interact with TixFlow.
   
   Go to `http://localhost:3000/api/tickets` to interact with the backend API
