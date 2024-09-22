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

🔗 API Documentation
Base URL: http://localhost:3000/api
Endpoints:
1. Create a new ticket
Endpoint: POST /api/tickets
Description: Creates a new support ticket.
Request Body:
json
Copy code
{
  "title": "Issue with login",
  "description": "Unable to log into the system",
  "status": "Open",            // Optional, defaults to "Open"
  "priority": "High",           // Optional, defaults to "Medium"
  "createdBy": "John Doe"       // Required
}
Success Response:
json
Copy code
{
  "_id": "6139d98f5d43233b3410fb7a",
  "title": "Issue with login",
  "description": "Unable to log into the system",
  "status": "Open",
  "priority": "High",
  "createdBy": "John Doe",
  "createdAt": "2021-09-09T12:00:00.000Z",
  "updatedAt": "2021-09-09T12:00:00.000Z"
}
2. Retrieve all tickets
Endpoint: GET /api/tickets
Description: Fetch all tickets.
Success Response:
json
Copy code
[
  {
    "_id": "6139d98f5d43233b3410fb7a",
    "title": "Issue with login",
    "description": "Unable to log into the system",
    "status": "Open",
    "priority": "High",
    "createdBy": "John Doe",
    "createdAt": "2021-09-09T12:00:00.000Z",
    "updatedAt": "2021-09-09T12:00:00.000Z"
  },
  {
    "_id": "6139d98f5d43233b3410fb7b",
    "title": "Error in payment gateway",
    "description": "Payment is failing",
    "status": "Closed",
    "priority": "Medium",
    "createdBy": "Jane Smith",
    "createdAt": "2021-09-08T15:00:00.000Z",
    "updatedAt": "2021-09-09T12:00:00.000Z"
  }
]
3. Retrieve a single ticket by ID
Endpoint: GET /api/tickets/:id
Description: Fetch a specific ticket by its unique identifier.
Success Response:
json
Copy code
{
  "_id": "6139d98f5d43233b3410fb7a",
  "title": "Issue with login",
  "description": "Unable to log into the system",
  "status": "Open",
  "priority": "High",
  "createdBy": "John Doe",
  "createdAt": "2021-09-09T12:00:00.000Z",
  "updatedAt": "2021-09-09T12:00:00.000Z"
}
4. Update a ticket by ID
Endpoint: PATCH /api/tickets/:id
Description: Update the details of an existing ticket by its unique identifier.
Request Body:
json
Copy code
{
  "status": "In Progress",
  "priority": "Low"
}
Success Response:
json
Copy code
{
  "_id": "6139d98f5d43233b3410fb7a",
  "title": "Issue with login",
  "description": "Unable to log into the system",
  "status": "In Progress",
  "priority": "Low",
  "createdBy": "John Doe",
  "createdAt": "2021-09-09T12:00:00.000Z",
  "updatedAt": "2021-09-09T14:00:00.000Z"
}
5. Delete a ticket by ID
Endpoint: DELETE /api/tickets/:id
Description: Deletes a ticket by its unique identifier.
Success Response:
json
Copy code
{
  "message": "Ticket deleted successfully"
}


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
   cd frontend
   npm start
   ```

7. **Access the Application**:
   Open your browser and go to `http://localhost:5173` to interact with TixFlow.
   Go to `http://localhost:3000/api/tickets` to interact with the backend API
