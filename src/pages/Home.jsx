import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      title: 'Easy Registration',
      description: 'Simple and intuitive registration process for all your events.',
      icon: '📝',
    },
    {
      title: 'Secure Payments',
      description: 'Integration with Razorpay for safe and secure transactions.',
      icon: '🔒',
    },
    {
      title: 'Real-time Updates',
      description: 'Get instant confirmations and updates about your registration.',
      icon: '⚡',
    },
    {
      title: 'Admin Dashboard',
      description: 'Comprehensive admin panel to manage all registrations.',
      icon: '📊',
    },
  ];

  const upcomingEvents = [
    {
      title: 'Tech Conference 2024',
      date: 'January 15, 2024',
      location: 'Mumbai, India',
      price: '₹2,999',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop',
    },
    {
      title: 'Startup Summit',
      date: 'February 20, 2024',
      location: 'Bangalore, India',
      price: '₹1,999',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=250&fit=crop',
    },
    {
      title: 'Digital Marketing Expo',
      date: 'March 10, 2024',
      location: 'Delhi, India',
      price: '₹1,499',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=250&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to EventHub
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Your gateway to unforgettable experiences
            </p>
            <p className="text-lg mb-10 max-w-2xl mx-auto text-indigo-100">
              Discover, register, and attend amazing events with ease. From tech conferences to workshops, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl">
                Register Now
              </Link>
              <a href="#events" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                Browse Events
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose EventHub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center hover:shadow-xl transition duration-300">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="events" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="card hover:shadow-xl transition duration-300 overflow-hidden p-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <p className="flex items-center">
                      <span className="mr-2">📅</span> {event.date}
                    </p>
                    <p className="flex items-center">
                      <span className="mr-2">📍</span> {event.location}
                    </p>
                    <p className="flex items-center">
                      <span className="mr-2">💰</span> {event.price}
                    </p>
                  </div>
                  <Link
                    to="/register"
                    className="btn-primary w-full block text-center"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-xl text-indigo-100">Events Hosted</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-xl text-indigo-100">Happy Attendees</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-xl text-indigo-100">Partner Organizations</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your journey with EventHub today and never miss an amazing event again!
          </p>
          <Link to="/register" className="btn-primary text-lg">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
