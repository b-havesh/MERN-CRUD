import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CircleX } from "lucide-react";
import { API } from "../api.js";

const TicketForm = () => {
  const [ticket, setTicket] = useState({
    title: "",
    description: "",
    status: "Open",
    priority: "Medium",
    createdBy: "User",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    API.createTicket(ticket)
      .then(() => {
        setMessage("Ticket created successfully!");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        console.error("Error creating ticket:", error);
        setMessage("Error creating ticket. Please try again.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white max-w-md w-full shadow-lg rounded-lg p-8 transition-all duration-300 hover:shadow-xl"
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#011936]">Create Ticket</h1>
          <Link
            to="/"
            className="text-red-500 hover:text-red-700 transition duration-200"
          >
            <CircleX size={28} />
          </Link>
        </div>

        {message && (
          <div
            className={`${
              message.includes("Error")
                ? "bg-red-100 text-red-500"
                : "bg-green-100 text-green-600"
            } p-3 rounded-lg mb-4`}
          >
            {message}
          </div>
        )}

        <div className="mb-4">
          <label
            className="block text-[#011936] text-sm font-semibold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500"
            id="title"
            type="text"
            value={ticket.title}
            onChange={(e) => setTicket({ ...ticket, title: e.target.value })}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-[#011936] text-sm font-semibold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500"
            id="description"
            value={ticket.description}
            onChange={(e) =>
              setTicket({ ...ticket, description: e.target.value })
            }
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-[#011936] text-sm font-semibold mb-2"
            htmlFor="status"
          >
            Status
          </label>
          <select
            className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500"
            id="status"
            value={ticket.status}
            onChange={(e) => setTicket({ ...ticket, status: e.target.value })}
          >
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-[#011936] text-sm font-semibold mb-2"
            htmlFor="priority"
          >
            Priority
          </label>
          <select
            className="shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500"
            id="priority"
            value={ticket.priority}
            onChange={(e) => setTicket({ ...ticket, priority: e.target.value })}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <button
          className="bg-[#011936] hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 w-full"
          type="submit"
        >
          Create Ticket
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
