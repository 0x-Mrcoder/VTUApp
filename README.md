# VTU App

A comprehensive Virtual Top-Up (VTU) application built with React Native, providing seamless access to mobile services including airtime purchase, data bundles, bill payments, and transaction history.

## Features

- 📱 **Airtime Purchase**: Buy airtime for all major Nigerian networks (MTN, Glo, Airtel, 9mobile)
- 🌐 **Data Bundles**: Purchase data plans with various options
- 💡 **Bill Payment**: Pay for electricity, cable TV, internet, and water bills
- 📊 **Transaction History**: View all your past transactions
- 💰 **Wallet Management**: Track your wallet balance
- 🔐 **User Authentication**: Secure login and registration

## Screenshots

The app includes:
- Login & Registration screens
- Dashboard with wallet balance and quick access to services
- Dedicated screens for airtime, data, and bill payments
- Transaction history with detailed records

## Tech Stack

- **React Native** (v0.82.1)
- **TypeScript** for type safety
- **React Navigation** for seamless navigation
- **React Native Gesture Handler** for enhanced interactions
- **React Native Safe Area Context** for proper device handling

## Prerequisites

- Node.js (v20 or higher)
- npm or yarn
- React Native development environment setup
  - For Android: Android Studio and SDK
  - For iOS: Xcode (macOS only)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/0x-Mrcoder/VTUApp.git
cd VTUApp
```

2. Install dependencies:
```bash
npm install
```

3. For iOS (macOS only):
```bash
cd ios
pod install
cd ..
```

## Running the App

### Android
```bash
npm run android
```

### iOS (macOS only)
```bash
npm run ios
```

### Start Metro Bundler
```bash
npm start
```

## Project Structure

```
VTUApp/
├── src/
│   ├── navigation/
│   │   └── AppNavigator.tsx    # Navigation configuration
│   ├── screens/
│   │   ├── LoginScreen.tsx     # Login screen
│   │   ├── RegisterScreen.tsx  # Registration screen
│   │   ├── HomeScreen.tsx      # Dashboard/Home screen
│   │   ├── AirtimeScreen.tsx   # Airtime purchase
│   │   ├── DataScreen.tsx      # Data bundle purchase
│   │   ├── BillsScreen.tsx     # Bill payment
│   │   └── HistoryScreen.tsx   # Transaction history
│   ├── components/             # Reusable components
│   └── types/                  # TypeScript type definitions
├── android/                    # Android native code
├── ios/                        # iOS native code
├── App.tsx                     # Main app component
└── index.js                    # App entry point
```

## Available Scripts

- `npm start` - Start the Metro bundler
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS simulator (macOS only)
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## Features Overview

### Authentication
- User login and registration
- Form validation
- Secure authentication flow

### Home Dashboard
- Wallet balance display
- Quick access to all services
- Recent transaction overview
- Fund wallet option

### Services

#### Airtime Purchase
- Support for all major networks
- Quick amount selection
- Phone number validation
- Instant purchase confirmation

#### Data Bundles
- Multiple data plans
- Network selection
- Plan comparison
- Easy purchase flow

#### Bill Payment
- Electricity bills
- Cable TV subscriptions
- Internet services
- Water bills
- Account/meter number validation

#### Transaction History
- Complete transaction records
- Status indicators (completed, pending, failed)
- Transaction details
- Amount and date information

## Development

This is a demo application showcasing React Native capabilities for a VTU service. In a production environment, you would need to:

1. Integrate with a real payment gateway
2. Connect to VTU service APIs
3. Implement proper authentication and authorization
4. Add data persistence (local storage, backend)
5. Implement error handling and retry logic
6. Add loading states and animations
7. Implement push notifications
8. Add analytics and monitoring

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or contributions, please open an issue in the GitHub repository.

## Author

Built with ❤️ by 0x-Mrcoder
