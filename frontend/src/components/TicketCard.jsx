import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Edit, Trash2 } from "lucide-react";

const TicketCard = ({ ticket, onDelete }) => {
  const [expanded, setExpanded] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      onDelete(ticket._id);
    }, 300);
  };

  const getPriorityBadgeClass = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "Open":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-yellow-100 text-yellow-800";
      case "Closed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div
      className={`bg-white shadow-lg rounded-lg p-4 transition-opacity duration-300 ${
        isDeleting ? "opacity-0" : "opacity-100"
      } transform ${isDeleting ? "scale-95" : "scale-100"}`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-[#011936] hover:text-blue-700 transition-colors duration-200">
          {ticket.title}
        </h2>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-gray-500 transition-transform transform hover:scale-125 duration-200"
        >
          {expanded ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
      <div
        className={`mt-4 overflow-hidden transition-all duration-300 ${
          expanded ? "max-h-screen" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 ticket-desc mb-2">{ticket.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <div>
            <span
              className={`${getStatusBadgeClass(
                ticket.status
              )} px-3 py-1 rounded-full text-sm mr-2 font-medium`}
            >
              {ticket.status}
            </span>
            <span
              className={`${getPriorityBadgeClass(
                ticket.priority
              )} px-3 py-1 rounded-full text-sm font-medium`}
            >
              {ticket.priority}
            </span>
          </div>
          <div className="flex space-x-2">
            <Link
              to={`/ticket/${ticket._id}`}
              className="text-blue-500 transition-colors duration-200 hover:text-blue-700"
            >
              <Edit size={20} />
            </Link>
            <button
              onClick={handleDelete}
              className="text-red-500 transition-colors duration-200 hover:text-red-700"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
