# Quick Setup Guide

## Step-by-Step Setup

### 1. Install Dependencies
```bash
npm install
```

This will install:
- React 18
- React Router DOM 6
- Vite (build tool)
- Tailwind CSS
- PostCSS & Autoprefixer

### 2. Configure Razorpay

**Important**: You need to set up Razorpay for payment processing.

1. Go to https://razorpay.com/ and sign up
2. Navigate to Settings → API Keys
3. Copy your **Test Key ID** (starts with `rzp_test_`)
4. Open `src/utils/razorpay.js`
5. Replace this line:
   ```javascript
   export const RAZORPAY_KEY_ID = 'rzp_test_YOUR_KEY_ID';
   ```
   with your actual key:
   ```javascript
   export const RAZORPAY_KEY_ID = 'rzp_test_abcd1234efgh5678';
   ```

### 3. Run Development Server
```bash
npm run dev
```

The application will start at: http://localhost:5173

### 4. Test the Application

#### Testing Registration Flow:
1. Go to http://localhost:5173
2. Click "Register Now"
3. Fill in the form with test data:
   - Name: John Doe
   - Email: john@example.com
   - Phone: 9876543210
4. Select an event and ticket type
5. Click "Proceed to Payment"
6. Use Razorpay test cards:
   - Card: 4111 1111 1111 1111
   - CVV: Any 3 digits
   - Expiry: Any future date
7. Complete payment
8. You'll be redirected to success page

#### Testing Admin Dashboard:
1. Go to http://localhost:5173/admin-login
2. Login with:
   - Username: admin
   - Password: admin123
3. View all registrations
4. Search and filter
5. Export to CSV
6. View detailed registration info

## Project Pages

- **/** - Landing page with event listings
- **/register** - Registration form
- **/success** - Payment success confirmation
- **/admin-login** - Admin login page
- **/admin** - Admin dashboard (requires login)

## Features to Test

### Registration Form Validation
- Try submitting empty form
- Enter invalid email format
- Enter phone number less than 10 digits
- All fields should show validation errors

### Payment Flow
- Select different ticket types (Standard/VIP)
- Prices should update automatically
- Payment modal should open with Razorpay
- Test payment cancellation
- Test successful payment

### Admin Dashboard
- View all registrations
- Search by name/email/phone
- Filter by event
- Export CSV file
- View detailed registration info

## Troubleshooting

### Port already in use
If port 5173 is in use:
```bash
npm run dev -- --port 3000
```

### Razorpay not loading
1. Check internet connection
2. Verify API key is correct
3. Check browser console for errors
4. Make sure script is loaded in index.html

### Styling not working
```bash
# Clear cache and rebuild
rm -rf node_modules
npm install
npm run dev
```

### No registrations showing in admin
1. Complete at least one registration first
2. Check browser localStorage (DevTools → Application → Local Storage)
3. Data persists across page refreshes

## Building for Production

```bash
npm run build
```

Production files will be in `dist/` folder.

To preview production build:
```bash
npm run preview
```

## Default Admin Credentials

**Username**: admin
**Password**: admin123

⚠️ **Important**: Change these credentials in production!

Edit in: `src/pages/AdminLogin.jsx`

## Next Steps for Production

1. **Backend API**:
   - Create Node.js/Express backend
   - Implement proper authentication
   - Store data in database (MongoDB/PostgreSQL)
   - Implement Razorpay server-side verification

2. **Security**:
   - Use environment variables for sensitive data
   - Implement JWT authentication
   - Add rate limiting
   - Enable HTTPS

3. **Features**:
   - Email notifications
   - PDF ticket generation
   - QR code for check-in
   - Refund processing
   - Event calendar integration

4. **Deploy**:
   - Frontend: Vercel, Netlify, or AWS S3
   - Backend: Heroku, AWS EC2, or DigitalOcean
   - Database: MongoDB Atlas or AWS RDS

## Support

Need help? Check:
- README.md for detailed documentation
- Razorpay docs: https://razorpay.com/docs/
- React docs: https://react.dev/
- Tailwind docs: https://tailwindcss.com/

Happy coding! 🚀
