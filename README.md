# TixFlow 🗂️  
**A Simple Ticket Management System using Node.js and MongoDB**

---

## 📖 Project Description

**TixFlow** is a lightweight ticket management system that allows users to create, manage, and track support tickets. Built using **Node.js** for the backend and **React.js** for the frontend, TixFlow offers a responsive and user-friendly interface for seamless ticket management.

---

## 🌟 Overview

TixFlow is designed for:
- **Creating** support tickets with various priority levels and statuses.
- **Tracking** the progress of tickets through an intuitive interface.
- **Managing** tickets with features for editing, updating status, and deleting.
- A well-structured RESTful API to handle ticket management.

---

## 🛠️ Tech Stack

### **Frontend**:
- **React.js**: A JavaScript library for building dynamic user interfaces.
- **React-Router-Dom**: Library for routing in React applications.
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

### **🔗 API Documentation**

- **Base URL**: `http://localhost:3000/api`

**Endpoints**:

1. **Create a New Ticket**  
   - **Endpoint**: `POST /api/tickets`  
   - **Description**: Creates a new support ticket.  
   - **Request Body**:
     ```json
     {
       "title": "Issue with login",
       "description": "Unable to log into the system",
       "status": "Open",            // Optional, defaults to "Open"
       "priority": "High",           // Optional, defaults to "Medium"
       "createdBy": "John Doe"       // Required
     }
     ```
   - **Success Response**:
     ```json
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
     ```

2. **Retrieve All Tickets**  
   - **Endpoint**: `GET /api/tickets`  
   - **Description**: Fetches all tickets.  
   - **Success Response**:
     ```json
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
     ```

3. **Retrieve a Single Ticket by ID**  
   - **Endpoint**: `GET /api/tickets/:id`  
   - **Description**: Fetches a specific ticket by its unique identifier.  
   - **Success Response**:
     ```json
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
     ```

4. **Update a Ticket by ID**  
   - **Endpoint**: `PATCH /api/tickets/:id`  
   - **Description**: Updates the details of an existing ticket by its unique identifier.  
   - **Request Body**:
     ```json
     {
       "status": "In Progress",
       "priority": "Low"
     }
     ```
   - **Success Response**:
     ```json
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
     ```

5. **Delete a Ticket by ID**  
   - **Endpoint**: `DELETE /api/tickets/:id`  
   - **Description**: Deletes a ticket by its unique identifier.  
   - **Success Response**:
     ```json
     {
       "message": "Ticket deleted successfully"
     }
     ```

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
   Navigate to the backend directory and install server-side dependencies:
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**:
   Navigate to the frontend directory and install dependencies:
   ```bash
   cd frontend
   npm install
   ```

4. **Set Up Environment Variables**:
   Create a `.env` file in the backend directory with the following content:
   ```env
   MONGO_DB_URI=mongodb+srv://bhavesh:Bhavesh%23123@cluster0.9igeh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   PORT=3000
   ```

5. **Run the Backend**:
   Start the Node.js server:
   ```bash
   npm start
   ```

6. **Run the Frontend**:
   In a new terminal, navigate to the `frontend` folder and start the React app:
   ```bash
   cd frontend
   npm start
   ```

7. **Access the Application**:
   Open your browser and go to `http://localhost:5173` to interact with TixFlow. For backend API interactions, visit `http://localhost:3000/api/tickets`.
