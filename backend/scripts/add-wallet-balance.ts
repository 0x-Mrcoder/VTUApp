import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env') });

// Import models
import { User } from '../src/models/user.model.js';
import { Wallet } from '../src/models/wallet.model.js';

async function addWalletBalance() {
  try {
    // Connect to MongoDB
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/connecta_vtu';
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(mongoUri);
    console.log('✅ Connected to MongoDB');

    // Get email or phone from command line arguments
    const identifier = process.argv[2]; // email or phone number
    const amount = parseFloat(process.argv[3] || '150');

    if (!identifier) {
      console.log('Usage: npm run add-balance <email_or_phone> [amount]');
      console.log('Example: npm run add-balance user@example.com 150');
      process.exit(1);
    }

    // Find user by email or phone
    const user = await User.findOne({
      $or: [
        { email: identifier },
        { phone_number: identifier }
      ]
    });

    if (!user) {
      console.error('❌ User not found with email/phone:', identifier);
      process.exit(1);
    }

    console.log(`👤 Found user: ${user.first_name} ${user.last_name} (${user.email})`);

    // Find or create wallet
    let wallet = await Wallet.findOne({ user_id: user._id });

    if (!wallet) {
      wallet = await Wallet.create({
        user_id: user._id,
        balance: 0,
        currency: 'NGN'
      });
      console.log('💳 Created new wallet');
    }

    const oldBalance = wallet.balance;
    wallet.balance += amount;
    wallet.updated_at = new Date();
    await wallet.save();

    console.log(`💰 Wallet updated:`);
    console.log(`   Old balance: ₦${oldBalance.toFixed(2)}`);
    console.log(`   Added: ₦${amount.toFixed(2)}`);
    console.log(`   New balance: ₦${wallet.balance.toFixed(2)}`);

    await mongoose.disconnect();
    console.log('✅ Done!');
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

addWalletBalance();
