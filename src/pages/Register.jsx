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
    event: 'द मुंबई डायलॉग्ज',
    ticketType: 'standard',
    specialRequirements: '',
  });

  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  const events = [
    { name: 'द मुंबई डायलॉग्ज', price: 100 },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'नाव आवश्यक आहे';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'ईमेल आवश्यक आहे';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'चुकीचा ईमेल फॉर्मेट';
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'फोन नंबर आवश्यक आहे';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'फोन नंबर १० अंकी असावा';
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
    return event ? event.price : 0;
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
          alert('पेमेंट अयशस्वी: ' + error);
        }
      );
    } catch (error) {
      setIsProcessing(false);
      alert('नोंदणी प्रक्रिया करताना त्रुटी: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F97316' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-orange-200">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white px-8 py-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)",
                }}
              ></div>
            </div>
            <div className="relative z-10">
              <div className="text-6xl mb-4">🎫</div>
              <h1
                className="text-4xl md:text-5xl font-black mb-3"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                  lineHeight: "1.3",
                }}
              >
                कार्यक्रम नोंदणी
              </h1>
              <p
                className="text-xl text-yellow-100 font-bold"
                style={{ fontFamily: "'Mukta', sans-serif" }}
              >
                मुंबई डायलॉग्ज २०२५ मध्ये आपले स्वागत आहे
              </p>
              <div className="mt-6 inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <p className="text-lg font-bold" style={{ fontFamily: "'Mukta', sans-serif" }}>
                  📅 २५ डिसेंबर २०२५ | 📍 Sahara Star, Vile Parle
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
            {/* Personal Information */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 md:p-8 border-2 border-orange-200">
              <h2
                className="text-2xl md:text-3xl font-black text-orange-700 mb-6 flex items-center"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <span className="text-3xl mr-3">👤</span>
                वैयक्तिक माहिती
              </h2>
              <div className="space-y-5">
                <div>
                  <label
                    className="block text-base font-bold text-orange-900 mb-2"
                    style={{ fontFamily: "'Mukta', sans-serif" }}
                  >
                    पूर्ण नाव *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:ring-4 focus:ring-orange-200 focus:border-orange-500 ${
                      errors.name ? 'border-red-500 bg-red-50' : 'border-orange-200 bg-white'
                    }`}
                    placeholder="आपले पूर्ण नाव लिहा"
                    style={{ fontFamily: "'Mukta', sans-serif" }}
                  />
                  {errors.name && (
                    <p
                      className="text-red-600 text-sm mt-2 font-semibold"
                      style={{ fontFamily: "'Mukta', sans-serif" }}
                    >
                      ⚠️ {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className="block text-base font-bold text-orange-900 mb-2"
                    style={{ fontFamily: "'Mukta', sans-serif" }}
                  >
                    ईमेल पत्ता *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:ring-4 focus:ring-orange-200 focus:border-orange-500 ${
                      errors.email ? 'border-red-500 bg-red-50' : 'border-orange-200 bg-white'
                    }`}
                    placeholder="your.email@example.com"
                    style={{ fontFamily: "'Mukta', sans-serif" }}
                  />
                  {errors.email && (
                    <p
                      className="text-red-600 text-sm mt-2 font-semibold"
                      style={{ fontFamily: "'Mukta', sans-serif" }}
                    >
                      ⚠️ {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className="block text-base font-bold text-orange-900 mb-2"
                    style={{ fontFamily: "'Mukta', sans-serif" }}
                  >
                    फोन नंबर *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:ring-4 focus:ring-orange-200 focus:border-orange-500 ${
                      errors.phone ? 'border-red-500 bg-red-50' : 'border-orange-200 bg-white'
                    }`}
                    placeholder="१० अंकी मोबाईल नंबर"
                    style={{ fontFamily: "'Mukta', sans-serif" }}
                  />
                  {errors.phone && (
                    <p
                      className="text-red-600 text-sm mt-2 font-semibold"
                      style={{ fontFamily: "'Mukta', sans-serif" }}
                    >
                      ⚠️ {errors.phone}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Event Selection */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 md:p-8 border-2 border-orange-200">
              <h2
                className="text-2xl md:text-3xl font-black text-orange-700 mb-6 flex items-center justify-center"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <span className="text-3xl mr-3">🎪</span>
                कार्यक्रम तपशील
              </h2>
              <div className="space-y-5">
                <div>
                  <label
                    className="block text-base font-bold text-orange-900 mb-2 text-center"
                    style={{ fontFamily: "'Mukta', sans-serif" }}
                  >
                    कार्यक्रम निवडा *
                  </label>
                  <select
                    name="event"
                    value={formData.event}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 bg-white transition-all duration-300 focus:ring-4 focus:ring-orange-200 focus:border-orange-500 font-bold text-orange-900"
                    style={{ fontFamily: "'Mukta', sans-serif" }}
                  >
                    {events.map((event) => (
                      <option key={event.name} value={event.name}>
                        {event.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Centered Ticket Pass */}
                <div>
                  <label
                    className="block text-base font-bold text-orange-900 mb-4 text-center"
                    style={{ fontFamily: "'Mukta', sans-serif" }}
                  >
                    तिकीट प्रकार *
                  </label>
                  <div className="flex justify-center">
                    <div className="cursor-pointer border-4 rounded-3xl p-8 md:p-10 transition-all duration-300 transform hover:scale-105 border-orange-500 bg-gradient-to-br from-orange-100 to-amber-100 shadow-2xl ring-4 ring-orange-200 max-w-md w-full">
                      <input
                        type="radio"
                        name="ticketType"
                        value="standard"
                        checked={formData.ticketType === 'standard'}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <div className="text-6xl mb-4 animate-bounce">🎟️</div>
                        <div
                          className="font-black text-3xl text-orange-900 mb-4"
                          style={{ fontFamily: "'Mukta', sans-serif" }}
                        >
                          सामान्य तिकीट
                        </div>
                        <div
                          className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          ₹{getEventPrice()}
                        </div>
                        <div className="bg-white/50 rounded-xl py-3 px-4 mb-3">
                          <p className="text-lg text-orange-700 font-bold" style={{ fontFamily: "'Mukta', sans-serif" }}>
                            ✓ सर्व सत्रांमध्ये प्रवेश
                          </p>
                        </div>
                        <div className="bg-gradient-to-r from-orange-200 to-amber-200 rounded-xl py-2 px-4">
                          <p className="text-sm text-orange-900 font-semibold" style={{ fontFamily: "'Mukta', sans-serif" }}>
                            🎤 पॅनेलिस्ट्सशी संवाद
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    className="block text-base font-bold text-orange-900 mb-2"
                    style={{ fontFamily: "'Mukta', sans-serif" }}
                  >
                    विशेष आवश्यकता (पर्यायी)
                  </label>
                  <textarea
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 bg-white transition-all duration-300 focus:ring-4 focus:ring-orange-200 focus:border-orange-500"
                    rows="4"
                    placeholder="आहार निर्बंध, प्रवेशयोग्यता गरजा इ."
                    style={{ fontFamily: "'Mukta', sans-serif" }}
                  />
                </div>
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-8 shadow-2xl duration-300">
              <div className="flex justify-between items-center mb-4">
                <span
                  className="text-xl font-bold text-yellow-100"
                  style={{ fontFamily: "'Mukta', sans-serif" }}
                >
                  तिकीट किंमत:
                </span>
                <span
                  className="text-5xl font-black"
                  style={{ fontFamily: "'Poppins', sans-serif", textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
                >
                  ₹{getEventPrice()}
                </span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center">
                <span className="text-2xl mr-2">🔒</span>
                <p
                  className="text-base font-bold"
                  style={{ fontFamily: "'Mukta', sans-serif" }}
                >
                  Razorpay द्वारे सुरक्षित पेमेंट
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-black py-5 px-8 rounded-2xl text-xl md:text-2xl transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              style={{ fontFamily: "'Mukta', sans-serif" }}
            >
              {isProcessing ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  प्रक्रिया सुरू आहे...
                </span>
              ) : (
                '💳 पेमेंट करण्यासाठी पुढे जा →'
              )}
            </button>

            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4 text-center">
              <p
                className="text-sm text-orange-900 font-semibold"
                style={{ fontFamily: "'Mukta', sans-serif" }}
              >
                ⚡ नोंदणी करून, तुम्ही आमच्या अटी व शर्तींशी सहमत आहात
              </p>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Mukta:wght@400;600;700;800&display=swap");
      `}</style>
    </div>
  );
};

export default Register;