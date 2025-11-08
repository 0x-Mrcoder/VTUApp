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

async function addBalanceToAllUsers() {
  try {
    // Connect to MongoDB
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/connecta_vtu';
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(mongoUri);
    console.log('✅ Connected to MongoDB\n');

    // Get amount from command line or use default 150
    const amount = parseFloat(process.argv[2] || '150');

    // Get all users
    const users = await User.find({});
    console.log(`👥 Found ${users.length} users\n`);

    let successCount = 0;
    let errorCount = 0;

    for (const user of users) {
      try {
        // Find or create wallet
        let wallet = await Wallet.findOne({ user_id: user._id });

        if (!wallet) {
          wallet = await Wallet.create({
            user_id: user._id,
            balance: 0,
            currency: 'NGN'
          });
        }

        const oldBalance = wallet.balance;
        wallet.balance += amount;
        wallet.updated_at = new Date();
        await wallet.save();

        console.log(`✅ ${user.first_name} ${user.last_name} (${user.email})`);
        console.log(`   💰 ₦${oldBalance.toFixed(2)} → ₦${wallet.balance.toFixed(2)}\n`);
        
        successCount++;
      } catch (error) {
        console.error(`❌ Error updating ${user.email}:`, error);
        errorCount++;
      }
    }

    console.log('\n📊 Summary:');
    console.log(`   ✅ Successfully updated: ${successCount} users`);
    console.log(`   ❌ Failed: ${errorCount} users`);
    console.log(`   💵 Total amount added: ₦${(amount * successCount).toFixed(2)}`);

    await mongoose.disconnect();
    console.log('\n✅ Done!');
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

addBalanceToAllUsers();
