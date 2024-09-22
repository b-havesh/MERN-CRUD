import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API } from "../api.js"; // Ensure you have this for API calls

const TicketDetail = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    API.getTicket(id).then(setTicket);
  }, [id]);

  if (!ticket) return <div className="text-center text-lg">Loading...</div>;

  return (
    <div className="container mx-auto mt-6">
      <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:shadow-2xl duration-300">
        <h1 className="text-3xl font-bold mb-2">{ticket.title}</h1>
        <p className="text-gray-700 mb-4">{ticket.description}</p>
        <div className="flex justify-between items-center">
          <div>
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm mr-2">
              {ticket.status}
            </span>
            <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm">
              {ticket.priority}
            </span>
          </div>
          <Link
            to={`/ticket/${ticket._id}/edit`}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Edit Ticket
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TicketDetail;
