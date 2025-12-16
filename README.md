# Event Management Registration System

A complete React.js application with Tailwind CSS for event management and registration with Razorpay payment integration.

## Features

- 🏠 **Landing Page**: Beautiful homepage with event listings and features
- 📝 **Registration Form**: Complete form with validation
- 💳 **Payment Gateway**: Razorpay integration for secure payments
- 👨‍💼 **Admin Dashboard**: View and manage all registrations
- 📊 **Statistics**: Real-time stats on registrations and revenue
- 🔍 **Search & Filter**: Search registrations and filter by event
- 📥 **Export Data**: Export registrations to CSV
- 💾 **Local Storage**: Persistent data storage

## Tech Stack

- React.js 18
- React Router DOM for navigation
- Tailwind CSS for styling
- Razorpay for payments
- Vite as build tool

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Razorpay account (for payment integration)

## Installation

1. Navigate to the project directory:
```bash
cd event-management
```

2. Install dependencies:
```bash
npm install
```

3. Configure Razorpay:
   - Open `src/utils/razorpay.js`
   - Replace `RAZORPAY_KEY_ID` with your actual Razorpay test/live key
   - Get your key from: https://dashboard.razorpay.com/app/keys

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit: `http://localhost:5173`

## Admin Access

To access the admin dashboard:
- Navigate to `/admin-login`
- Use these credentials:
  - **Username**: admin
  - **Password**: admin123

## Project Structure

```
event-management/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Register.jsx
│   │   ├── Success.jsx
│   │   ├── AdminLogin.jsx
│   │   └── Admin.jsx
│   ├── context/
│   │   └── AppContext.jsx
│   ├── utils/
│   │   └── razorpay.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Features Breakdown

### Landing Page
- Hero section with call-to-action
- Features showcase
- Upcoming events display
- Statistics section
- Responsive design

### Registration Page
- Form validation
- Event selection
- Ticket type selection (Standard/VIP)
- Dynamic pricing
- Special requirements field
- Razorpay payment integration

### Payment Integration
- Secure Razorpay checkout
- Test mode support
- Payment confirmation
- Payment details storage

### Admin Dashboard
- View all registrations
- Real-time statistics
- Search functionality
- Filter by event
- Export to CSV
- Detailed registration view
- Payment status tracking

### Success Page
- Registration confirmation
- Payment details
- Receipt printing
- Email confirmation notice

## Building for Production

```bash
npm run build
```

The build files will be in the `dist/` directory.

## Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## Environment Variables

For production, create a `.env` file:

```env
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

Update `src/utils/razorpay.js` to use environment variable:
```javascript
export const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID;
```

## Important Notes

### Razorpay Setup
1. Sign up at https://razorpay.com/
2. Get your API keys from the dashboard
3. For testing, use test mode keys
4. For production, activate your account and use live keys

### Security Considerations
- In production, implement proper backend authentication
- Store sensitive data securely
- Use environment variables for API keys
- Implement server-side payment verification
- Add HTTPS for secure transactions

### Backend Integration (Recommended for Production)
This is a frontend-only demo. For production:
1. Create a backend API to handle:
   - Order creation
   - Payment verification
   - Database storage
   - User authentication
2. Recommended: Node.js + Express + MongoDB/PostgreSQL
3. Implement Razorpay webhook for payment verification

## Customization

### Changing Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#6366f1', // Your primary color
      secondary: '#8b5cf6', // Your secondary color
    }
  },
}
```

### Adding Events
Edit the events array in:
- `src/pages/Home.jsx` (for display)
- `src/pages/Register.jsx` (for registration)

### Modifying Admin Credentials
Edit `src/pages/AdminLogin.jsx`:
```javascript
const ADMIN_USERNAME = 'your_username';
const ADMIN_PASSWORD = 'your_password';
```

## Troubleshooting

### Payment not working
- Check if Razorpay key is correctly configured
- Ensure you're using test mode keys for testing
- Check browser console for errors

### Data not persisting
- Check browser localStorage
- Clear cache if data seems corrupted

### Styling issues
- Run `npm run dev` to rebuild
- Check if Tailwind CSS is properly configured

## Support

For issues or questions:
- Create an issue on GitHub
- Email: support@eventhub.com

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Credits

Built with ❤️ using React, Tailwind CSS, and Razorpay
