import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-8">Contact Us</h1>

        {/* Contact Form Section */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section: Information */}
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              We'd love to hear from you! Whether you have questions, feedback, or just want to say hi, feel free to reach out to us.
            </p>

            <p className="text-gray-600 mb-2">
              <strong>Address:</strong> 123 Main Street, Suite 100, Toronto, ON
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Phone:</strong> +1 (123) 456-7890
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> support@example.com
            </p>
          </div>

          {/* Right Section: Form */}
          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
