import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { createRazorpayOrder, handlePayment } from '../utils/razorpay';

const Register = () => {
  const navigate = useNavigate();
  const { addRegistration, updatePaymentStatus } = useApp();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event: 'Tech Conference 2024',
    ticketType: 'standard',
    specialRequirements: '',
  });

  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  const events = [
    { name: 'Tech Conference 2024', price: { standard: 2999, vip: 4999 } },
    { name: 'Startup Summit', price: { standard: 1999, vip: 3499 } },
    { name: 'Digital Marketing Expo', price: { standard: 1499, vip: 2499 } },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const getEventPrice = () => {
    const event = events.find(e => e.name === formData.event);
    return event ? event.price[formData.ticketType] : 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    try {
      // Add registration with pending payment status
      const registrationId = addRegistration({
        ...formData,
        price: getEventPrice(),
        paymentStatus: 'pending',
      });

      // Create Razorpay order
      const amount = getEventPrice();
      const order = await createRazorpayOrder(amount);

      // Handle payment
      handlePayment(
        order,
        formData,
        (paymentDetails) => {
          // Payment successful
          updatePaymentStatus(registrationId, paymentDetails);
          setIsProcessing(false);
          navigate('/success', { 
            state: { 
              registrationId, 
              paymentDetails,
              formData,
              amount 
            } 
          });
        },
        (error) => {
          // Payment failed
          setIsProcessing(false);
          alert('Payment failed: ' + error);
        }
      );
    } catch (error) {
      setIsProcessing(false);
      alert('Error processing registration: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Event Registration
            </h1>
            <p className="text-gray-600">
              Fill in your details to register for the event
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Personal Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                    placeholder="10-digit mobile number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Event Selection */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Event Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Event *
                  </label>
                  <select
                    name="event"
                    value={formData.event}
                    onChange={handleChange}
                    className="input-field"
                  >
                    {events.map((event) => (
                      <option key={event.name} value={event.name}>
                        {event.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ticket Type *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className={`cursor-pointer border-2 rounded-lg p-4 transition ${
                      formData.ticketType === 'standard'
                        ? 'border-primary bg-indigo-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}>
                      <input
                        type="radio"
                        name="ticketType"
                        value="standard"
                        checked={formData.ticketType === 'standard'}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <div className="font-semibold text-gray-800">Standard</div>
                        <div className="text-2xl font-bold text-primary mt-2">
                          ₹{events.find(e => e.name === formData.event)?.price.standard}
                        </div>
                      </div>
                    </label>

                    <label className={`cursor-pointer border-2 rounded-lg p-4 transition ${
                      formData.ticketType === 'vip'
                        ? 'border-primary bg-indigo-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}>
                      <input
                        type="radio"
                        name="ticketType"
                        value="vip"
                        checked={formData.ticketType === 'vip'}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <div className="font-semibold text-gray-800">VIP</div>
                        <div className="text-2xl font-bold text-primary mt-2">
                          ₹{events.find(e => e.name === formData.event)?.price.vip}
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requirements (Optional)
                  </label>
                  <textarea
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleChange}
                    className="input-field"
                    rows="3"
                    placeholder="Any dietary restrictions, accessibility needs, etc."
                  />
                </div>
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">Ticket Price:</span>
                <span className="text-2xl font-bold text-primary">
                  ₹{getEventPrice()}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Secure payment powered by Razorpay
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isProcessing}
              className="btn-primary w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? 'Processing...' : 'Proceed to Payment'}
            </button>

            <p className="text-sm text-gray-500 text-center">
              By registering, you agree to our terms and conditions
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
