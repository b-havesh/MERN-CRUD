import React, { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen text-[#011936] flex items-center justify-center px-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full ">
        <h1 className="text-5xl font-bold mb-8 text-[#011936] text-center">Contact Us</h1>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                className="block text-lg text-[#011936] font-semibold mb-2"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full py-3 px-4 rounded-lg border border-[#011936] shadow-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label
                className="block text-lg text-black font-semibold mb-2"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full py-3 px-4 rounded-lg border border-[#011936] shadow-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label
                className="block text-lg text-black font-semibold mb-2"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                id="message"
                className="w-full py-3 px-4 rounded-lg border border-[#011936] shadow-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-500"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">
              Thank You!
            </h2>
            <p className="text-lg text-black">
              Your message has been sent. We'll get back to you soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
