"use client";
import React, { useState } from "react";
import { Users, Book, Activity } from "lucide-react";

export default function Contact() {
  const [emailStatus, setEmailStatus] = useState<string | null>(null);

  // Improved handleSubmit function
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Encode the message properly for mailto
    const encodedSubject = encodeURIComponent(`Message from ${email}`);
    const encodedBody = encodeURIComponent(message);
    const mailtoLink = `mailto:ieeeaamu1875@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;

    try {
      // Try to open the email client
      window.open(mailtoLink, "_blank");

      // Provide feedback to the user
      setEmailStatus(
        "Email client opened. If nothing happened, please email us directly at ieeeaamu1875@gmail.com"
      );

      // Reset the form
      (e.target as HTMLFormElement).reset();

      // Clear the status message after 5 seconds
      setTimeout(() => {
        setEmailStatus(null);
      }, 5000);
    } catch (error) {
      console.log(error);
      setEmailStatus(
        "Unable to open email client. Please email us directly at ieeeaamu1875@gmail.com"
      );

      // Clear the error message after 5 seconds
      setTimeout(() => {
        setEmailStatus(null);
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      className="bg-maroon-700 text-white rounded-lg shadow-lg p-8"
    >
      <div className="lg:flex md:items-center md:justify-between gap-10">
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-semibold mb-4">Join IEEE AAMU Today</h2>
          <p className="text-lg mb-6">
            Become a part of our vibrant community and gain access to resources,
            events, and networking opportunities.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <Activity className="h-5 w-5 mr-2" />
              <span>Access to workshops and events</span>
            </li>
            <li className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              <span>Networking with professionals</span>
            </li>
            <li className="flex items-center">
              <Book className="h-5 w-5 mr-2" />
              <span>IEEE digital library access</span>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/3 bg-white p-6 rounded-lg text-gray-800">
          <h3 className="text-xl font-bold text-maroon-700 mb-4">Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Message"
                className="w-full p-2 border border-gray-300 rounded resize-none"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-maroon-700 text-white py-2 rounded font-bold hover:bg-maroon-800 transition"
            >
              Send
            </button>
            {emailStatus && (
              <div className="mt-3 p-2 bg-blue-100 text-blue-800 text-sm rounded">
                {emailStatus}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
