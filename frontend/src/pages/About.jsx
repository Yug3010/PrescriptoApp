import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      {/* Header Section */}
      <header className="bg-blue-700 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg mt-2">
          Learn more about our mission, vision, and the team behind our success.
        </p>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-6 md:px-12 lg:px-20 py-10">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Welcome</h2>
          <p className="text-gray-600 leading-relaxed">
            We are passionate about delivering exceptional services and solutions that empower individuals and businesses. Our journey began with the simple goal of making a meaningful impact, and we are proud to have grown into a trusted name in our industry.
          </p>
        </section>

        {/* Mission Statement */}
        <section className="mb-12 bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to innovate and inspire, providing top-quality services that meet and exceed expectations. We strive to create value for our clients, foster sustainable growth, and promote a culture of collaboration and excellence.
          </p>
        </section>

        {/* Meet the Team */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member Card */}
            {[
              { name: 'Alice Johnson', role: 'CEO & Founder', image: 'https://via.placeholder.com/150' },
              { name: 'Bob Smith', role: 'Lead Developer', image: 'https://via.placeholder.com/150' },
              { name: 'Claire Adams', role: 'Marketing Specialist', image: 'https://via.placeholder.com/150' },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden text-center p-6"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
