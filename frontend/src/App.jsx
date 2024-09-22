import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TicketList from "./components/TicketList";
import TicketDetail from "./components/TicketDetail";
import EditTicketForm from "./components/EditTicketForm";
import TicketForm from "./components/TicketForm";
import NavBar from "./components/NavBar";
import "./App.css";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-yellow-100">
        <NavBar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<TicketList />} />
            <Route path="/ticket/:id" element={<TicketDetail />} />
            <Route path="/ticket/:id/edit" element={<EditTicketForm />} />
            <Route path="/create" element={<TicketForm />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
