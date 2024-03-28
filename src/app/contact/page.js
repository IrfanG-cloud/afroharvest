"use client";

import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here you can implement your logic to handle form submission
      // For example, sending data to a backend server or sending an email
      console.log(formData);
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-full py-10">
      <div className=" md:mx-40 ">
        <div className="py-4 mx-10">
          <h2 className="text-2xl text-center">Contatc Us</h2>
          <p className="text-md text-center">
            Contact Us Reach out to us if you have any questions or inquiries.
            We are here to assist you. Please choose a suitable option for
            submitting your message.
          </p>
        </div>
        <div className="py-4 mx-10">
          <h1 className="text-2xl text-center">Reach US Also At</h1>
          <p className="text-12 text-center">+971-502194669</p>
          <p className="text-center">Burjuman Business Tower, office 908, Dubai, UAE</p>

        </div>
      
      <div className="md:mx-8 bg-[#1c3f1d] rounded ">
        <form onSubmit={handleSubmit} className="p-20">
          <div className="mb-4">
            <label htmlFor="name" className="text-white">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full rounded border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full rounded border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full rounded border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-[#1c3f1d] focus:outline-none focus:bg-[#1c3f1d]"
          >
            Submit
          </button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default ContactForm;
