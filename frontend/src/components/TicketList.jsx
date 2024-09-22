import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TicketCard from "./TicketCard";
import { API } from "../api.js"; // Make sure to create an api.js file for API calls

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    API.getTickets().then(setTickets);
  }, []);

  const handleDelete = (id) => {
    API.deleteTicket(id).then(() => {
      setTickets((prevTickets) =>
        prevTickets.filter((ticket) => ticket._id !== id)
      );
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-[#011936] cursor-pointer">Tickets</h1>
        <Link
          to="/create"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200 shadow-md"
        >
          Create Ticket
        </Link>
      </div>

      {tickets.length === 0 ? (
        <div className="text-center py-8 h-[70vh] w-full flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold text-gray-600">
            No tickets available.
          </h2>
          <p className="text-gray-500 mb-4">
            Looks like you have no tickets. Start by creating one.
          </p>
          <Link
            to="/create"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Create a Ticket
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <TicketCard
              key={ticket._id}
              ticket={ticket}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TicketList;
