import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env') });

// Import models
import { User } from '../src/models/user.model.js';
import { Wallet } from '../src/models/wallet.model.js';

async function listUsers() {
  try {
    // Connect to MongoDB
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/connecta_vtu';
    await mongoose.connect(mongoUri);

    // Get all users
    const users = await User.find({}).select('email phone_number first_name last_name').limit(10);

    console.log(`\n📋 Found ${users.length} users:\n`);
    
    for (const user of users) {
      const wallet = await Wallet.findOne({ user_id: user._id });
      console.log(`👤 ${user.first_name} ${user.last_name}`);
      console.log(`   📧 Email: ${user.email}`);
      console.log(`   📱 Phone: ${user.phone_number}`);
      console.log(`   💰 Balance: ₦${wallet?.balance || 0}\n`);
    }

    await mongoose.disconnect();
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

listUsers();
