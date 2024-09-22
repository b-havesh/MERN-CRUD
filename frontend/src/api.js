// api.js
const API_URL = "http://localhost:3000/api/tickets";

export const API = {
  getTickets: () => fetch(API_URL).then((res) => res.json()),

  getTicket: (id) => fetch(`${API_URL}/${id}`).then((res) => res.json()),

  createTicket: (ticket) =>
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ticket),
    }).then((res) => res.json()),

  updateTicket: (id, ticket) =>
    fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ticket),
    }).then((res) => res.json()),

  deleteTicket: (id) => fetch(`${API_URL}/${id}`, { method: "DELETE" }),
};
