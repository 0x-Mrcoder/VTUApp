# VTU App - Frontend-Backend Integration Guide

## ✅ Integration Status: COMPLETE

The frontend and backend are now fully integrated with consistent field mappings and API services.

## 🎯 What Was Done

### 1. API Service Layer Created
- **`services/api.ts`** - Base axios client with JWT authentication
- **`services/auth.service.ts`** - Authentication (login, register, OTP)
- **`services/wallet.service.ts`** - Wallet operations
- **`services/transaction.service.ts`** - Transactions and purchases
- **`services/user.service.ts`** - User profile management

### 2. Frontend Screens Updated

#### SignupScreen.js ✅
- Split `fullName` → `first_name` + `last_name` (matches backend)
- Changed `phoneNumber` → `phone_number` (matches backend)
- Added `referral_code` field (optional)
- Removed `rememberMe` (not in backend)
- Integrated with `/auth/register` API
- Added proper validation and error handling

#### LoginScreen.js ✅
- Integrated with `/auth/login` API
- Removed `rememberMe` checkbox (not in backend)
- Added JWT token storage
- Added error handling and user feedback
- Auto-navigation after successful login

#### Home Screen (index.tsx) ✅
- Loads user data from AsyncStorage
- Displays dynamic welcome with `first_name`
- Ready for wallet and transaction integration

#### Profile Screen (profile.tsx) ✅
- Loads and displays user data (`first_name`, `last_name`, `email`)
- Functional logout with confirmation
- Clears storage and redirects to login

### 3. Field Mapping Completed

| Backend Field | Frontend Implementation | Status |
|--------------|------------------------|--------|
| `first_name` | ✅ Used in signup/profile | Complete |
| `last_name` | ✅ Used in signup/profile | Complete |
| `email` | ✅ Used in login/signup | Complete |
| `phone_number` | ✅ Used in signup | Complete |
| `password` | ✅ Used in login/signup | Complete |
| `referral_code` | ✅ Optional in signup | Complete |
| `country` | ✅ Auto-set to Nigeria | Complete |

**Removed from Frontend:**
- ❌ `fullName` (doesn't exist in backend)
- ❌ `rememberMe` (not in backend schema)

### 4. Dependencies Installed
```bash
npm install axios @react-native-async-storage/async-storage
```

## 🚀 Quick Start

### Start Backend Server
```bash
cd backend
npm start
# Server runs on http://localhost:5000
```

### Start Frontend App
```bash
cd frontend
npm start
# Choose platform: iOS, Android, or Web
```

## 🔧 Configuration

### Backend URL Configuration
Located in `frontend/services/api.ts`:

**Development:**
```typescript
const API_BASE_URL = 'http://localhost:5000/api';
```

**Production:**
```typescript
const API_BASE_URL = 'https://your-production-domain.com/api';
```

### For Android Emulator
If using Android emulator, use:
```typescript
const API_BASE_URL = 'http://10.0.2.2:5000/api';
```

### For Physical Device
Use your computer's local IP:
```typescript
const API_BASE_URL = 'http://192.168.x.x:5000/api';
```

## 📝 Testing the Integration

### 1. Test Registration
1. Open the app and navigate to Sign Up
2. Fill in all fields:
   - First Name: "John"
   - Last Name: "Doe"
   - Email: "john@example.com"
   - Phone: "08012345678"
   - Password: "password123"
   - Confirm Password: "password123"
   - Referral Code: (optional)
3. Tap "Create Account"
4. Should redirect to home screen on success

### 2. Test Login
1. Navigate to Login screen
2. Enter registered email and password
3. Tap "Continue"
4. Should redirect to home screen
5. Verify welcome message shows "Welcome, John"

### 3. Test Profile
1. Navigate to Profile tab
2. Should display "John Doe" and email
3. Tap Logout
4. Confirm logout
5. Should redirect to login screen

### 4. Test Data Persistence
1. Login successfully
2. Close and reopen the app
3. Should remain logged in (token persisted)

## 🔐 Authentication Flow

```
┌─────────────┐
│   Sign Up   │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────────────┐
│ POST /auth/register                 │
│ {                                   │
│   first_name, last_name,           │
│   email, phone_number,             │
│   password, referral_code          │
│ }                                   │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│ Response: { user, token }          │
│ Save to AsyncStorage               │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────┐
│ Home Screen │
└─────────────┘
```

## 📊 Available API Services

### Authentication
```typescript
import { authService } from '@/services/auth.service';

// Register
await authService.register({
  email, phone_number, password,
  first_name, last_name, referral_code
});

// Login
await authService.login({ email, password });

// Logout
await authService.logout();
```

### Wallet
```typescript
import { walletService } from '@/services/wallet.service';

// Get balance
const wallet = await walletService.getWallet();

// Top up
await walletService.topUp(amount, payment_method);
```

### Transactions
```typescript
import { transactionService } from '@/services/transaction.service';

// Get transactions
const transactions = await transactionService.getTransactions(page, limit);

// Purchase airtime
await transactionService.purchaseAirtime({
  phone_number, amount, operator_id
});

// Purchase data
await transactionService.purchaseData({
  phone_number, plan_id, operator_id
});
```

### User Profile
```typescript
import { userService } from '@/services/user.service';

// Get profile
const profile = await userService.getProfile();

// Update profile
await userService.updateProfile({ first_name, last_name, ... });

// Update password
await userService.updatePassword(currentPassword, newPassword);
```

## 🐛 Troubleshooting

### "Network Error"
- Ensure backend server is running on port 5000
- Check API_BASE_URL in `services/api.ts`
- For Android emulator, use `10.0.2.2` instead of `localhost`
- For physical device, use your computer's local IP

### "Registration Failed"
- Verify all required fields are filled
- Check email format is valid
- Ensure phone number is 10-15 digits
- Password must be at least 6 characters

### "Invalid Credentials"
- Ensure you're using a registered email
- Check password is correct
- Verify backend database has the user

### Token Not Persisting
- Check AsyncStorage permissions
- Verify token is being saved in auth service
- Check browser/app storage in dev tools

## 📁 File Structure

```
frontend/
├── services/
│   ├── api.ts                    # Base axios client
│   ├── auth.service.ts           # Authentication
│   ├── wallet.service.ts         # Wallet operations
│   ├── transaction.service.ts    # Transactions
│   └── user.service.ts          # User profile
├── screens/
│   ├── LoginScreen.js            # ✅ Updated
│   └── SignupScreen.js           # ✅ Updated
├── app/(tabs)/
│   ├── index.tsx                 # ✅ Updated
│   └── profile.tsx               # ✅ Updated
└── API_INTEGRATION.md            # Full documentation

backend/
├── src/
│   ├── controllers/
│   │   └── auth.controller.ts    # Handles register/login
│   ├── models/
│   │   └── user.model.ts         # User schema
│   └── routes/
│       └── auth.routes.ts        # /auth endpoints
└── README.md
```

## ✨ Next Features to Implement

1. **Wallet Integration**
   - Display actual balance from backend
   - Implement top-up flow

2. **Transaction History**
   - Show real transactions
   - Add filters and search

3. **Airtime/Data Purchase**
   - Connect quick top-up form to API
   - Add operator selection
   - Show purchase confirmation

4. **User Profile Edit**
   - Enable profile editing
   - Add photo upload
   - Implement address fields

5. **OTP Verification**
   - Add OTP verification screen
   - Implement resend OTP

6. **Forgot Password**
   - Add forgot password flow
   - Implement password reset

## 📞 Support

For issues or questions:
1. Check the API_INTEGRATION.md for detailed documentation
2. Review backend README.md for API endpoints
3. Verify field mappings match backend schema

---

**Integration Complete! 🎉**
The frontend now properly communicates with the backend using the correct field names and API structure.
