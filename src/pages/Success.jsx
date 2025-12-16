import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const { registrationId, paymentDetails, formData, amount } = location.state || {};

  if (!registrationId) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="card max-w-md text-center">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            No Registration Found
          </h1>
          <Link to="/register" className="btn-primary">
            Go to Registration
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-gray-50">
      <div className="card max-w-2xl">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Registration Successful!
          </h1>
          <p className="text-gray-600">
            Your payment has been confirmed and registration is complete
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Registration Details
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Registration ID</p>
              <p className="font-semibold text-gray-800">{registrationId}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Payment ID</p>
              <p className="font-semibold text-gray-800">
                {paymentDetails?.razorpayPaymentId?.substring(0, 20)}...
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Name</p>
              <p className="font-semibold text-gray-800">{formData?.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-semibold text-gray-800">{formData?.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Event</p>
              <p className="font-semibold text-gray-800">{formData?.event}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Ticket Type</p>
              <p className="font-semibold text-gray-800 uppercase">{formData?.ticketType}</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Amount Paid</span>
              <span className="text-2xl font-bold text-green-600">₹{amount}</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-blue-800">
            <strong>✉️ Confirmation email sent!</strong><br />
            A confirmation email with your ticket and event details has been sent to {formData?.email}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/" className="btn-primary flex-1 text-center">
            Back to Home
          </Link>
          <button 
            onClick={() => window.print()} 
            className="btn-secondary flex-1"
          >
            Print Receipt
          </button>
        </div>

        <p className="text-sm text-gray-500 text-center mt-6">
          For any queries, contact us at support@eventhub.com
        </p>
      </div>
    </div>
  );
};

export default Success;
