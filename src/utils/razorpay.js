// Razorpay Configuration
// IMPORTANT: Replace with your actual Razorpay keys
export const RAZORPAY_KEY_ID = 'rzp_test_YOUR_KEY_ID'; // Replace with your key

export const initializeRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const createRazorpayOrder = async (amount, currency = 'INR') => {
  // In a real application, this would be an API call to your backend
  // Your backend would create the order using Razorpay API
  // For demo purposes, we're simulating this
  return {
    id: 'order_' + Date.now(),
    amount: amount * 100, // Razorpay expects amount in paise
    currency,
  };
};

export const handlePayment = async (orderData, userDetails, onSuccess, onFailure) => {
  const res = await initializeRazorpay();

  if (!res) {
    alert('Razorpay SDK failed to load. Please check your internet connection.');
    return;
  }

  const options = {
    key: RAZORPAY_KEY_ID,
    amount: orderData.amount,
    currency: orderData.currency,
    name: 'Event Management',
    description: 'Event Registration Fee',
    order_id: orderData.id,
    handler: function (response) {
      // Payment successful
      const paymentDetails = {
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
        amount: orderData.amount / 100,
        currency: orderData.currency,
        timestamp: new Date().toISOString(),
      };
      onSuccess(paymentDetails);
    },
    prefill: {
      name: userDetails.name,
      email: userDetails.email,
      contact: userDetails.phone,
    },
    theme: {
      color: '#6366f1',
    },
    modal: {
      ondismiss: function() {
        onFailure('Payment cancelled by user');
      }
    }
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
