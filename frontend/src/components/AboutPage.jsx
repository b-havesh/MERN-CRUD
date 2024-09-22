import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen rounded-lg bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white flex items-center justify-center px-6">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-8 max-w-3xl text-center m-8">
        <h1 className="text-5xl font-bold mb-6 text-yellow-300">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to <span className="font-semibold text-white">TixFlows</span>, your one-stop solution for managing tickets efficiently. Whether you need to track issues, tasks, or projects, we’ve got you covered!
        </p>
        <p className="text-lg mb-4">
          Built with passion by a tech enthusiast, this application is designed to be simple, fast, and intuitive. We believe in keeping things *smooth* and user-friendly, so you can focus on what really matters.
        </p>
        <p className="text-lg mb-4">
          Our mission is to help you manage your workload without the hassle. With features like creating, updating, and deleting tickets, we make sure everything is organized and at your fingertips.
        </p>
        <h2 className="text-3xl font-semibold mt-8 mb-4 text-yellow-200">Why TixFlows?</h2>
        <ul className="text-lg space-y-2">
          <li>✨ Easy to use</li>
          <li>🚀 Lightning-fast performance</li>
          <li>💼 Perfect for teams and individuals</li>
          <li>🔒 Secure and reliable</li>
        </ul>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-yellow-300">Let’s Get Started!</h2>
          <p className="text-lg mt-4">
            Ready to dive in? Explore our app and see how simple managing tickets can be. We’re here to make your workflow easier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
