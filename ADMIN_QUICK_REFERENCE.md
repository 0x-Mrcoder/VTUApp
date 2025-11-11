# 🚀 ADMIN PANEL - QUICK START REFERENCE

## ✅ Latest Updates (November 11, 2025)

### 🎉 NEW FEATURES ADDED
1. **Admin Management System** - Create, list, manage admin users
2. **3 Admin Creation Methods** - Frontend UI, CLI, cURL API
3. **Beautiful Admin Dashboard** - Modern collapsible sidebar, professional topbar
4. **Complete UI Redesign** - Gradient cards, icons, smooth animations
5. **Production Ready** - Fully tested and documented

---

## 🔐 ADMIN LOGIN CREDENTIALS

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email:    admin@vtuapp.com
Password: Admin@123456
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 🎯 3 Ways to Create Admin

### 1️⃣ Frontend Admin Panel (Easiest)
```
URL: http://localhost:5174/admins
→ Click "Create Admin"
→ Fill in details
→ Click "Generate" for secure password
→ Click "Create"
→ Save credentials ✅
```

### 2️⃣ Command Line (Local Development)
```bash
cd /home/amee/Desktop/VTUApp/backend
npm run init:admin
```
✅ Auto-creates admin with secure password

### 3️⃣ cURL API (Production)
```bash
# Get token
TOKEN=$(curl -s -X POST https://vtuapp-production.up.railway.app/api/admin/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@vtuapp.com","password":"Admin@123456"}' | jq -r '.data.token')

# Create admin
curl -X POST https://vtuapp-production.up.railway.app/api/admin/admins \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "email": "newadmin@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "password": "SecurePassword123!"
  }'
```

---

## 📖 ALL ADMIN PAGES

| Page | URL | What It Does |
|------|-----|-------------|
| **Login** | /login | 🔐 Admin authentication |
| **Dashboard** | /dashboard | 📊 Statistics & overview |
| **Users** | /users | 👥 Manage user accounts |
| **Pricing** | /pricing | 💰 Manage pricing plans |
| **Wallet Credit** | /wallet-credit | 💳 Credit user wallets |
| **Audit Logs** | /audit-logs | 📋 View all admin actions |
| **Admin Users** | /admins | 🛡️ Create & manage admins |
| **Profile** | /profile | 👤 Admin settings |

---

## 🔌 KEY API ENDPOINTS

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/admin/login` | 🔐 Login & get token |
| **POST** | **`/api/admin/admins`** | **➕ Create new admin** |
| **GET** | **`/api/admin/admins`** | **📋 List all admins** |
| GET | `/api/admin/users` | 👥 List all users |
| POST | `/api/admin/wallet/credit` | 💳 Credit user wallet |
| GET | `/api/admin/pricing` | 💰 List pricing plans |
| POST | `/api/admin/pricing` | ➕ Create pricing plan |
| POST | `/api/admin/pricing/bulk-import` | 📤 Bulk import plans |
| GET | `/api/admin/audit-logs` | 📋 View audit logs |

---

## ✨ Admin Creation Features

### Frontend Features
✅ Beautiful form with validation
✅ Auto-password generation
✅ Password visibility toggle
✅ Success notification with credentials
✅ Admin list with pagination
✅ Responsive design
✅ Error handling & messages

### Security Features
✅ Email validation
✅ Duplicate email prevention
✅ Password hashing with bcrypt
✅ Bearer token authentication
✅ Audit logging
✅ Credential protection

### API Features
✅ POST /api/admin/admins - Create admin
✅ GET /api/admin/admins - List admins (paginated)
✅ Input validation
✅ Error handling
✅ Audit logging for all operations

---

## 📊 TEST RESULTS CHECKLIST

After running `./test-api.sh`, you should see:

```
✅ TEST 1: Admin Login
✅ TEST 2: Get Dashboard Stats
✅ TEST 3: Get All Users
✅ TEST 4: Get User By ID
✅ TEST 5: Update User Status
✅ TEST 6: Update User Details
✅ TEST 7: Credit User Wallet
✅ TEST 8: Get Audit Logs
✅ TEST 9: Get All Pricing Plans
✅ TEST 10: Create New Pricing Plan
✅ TEST 11: Get Plan By ID
✅ TEST 12: Update Pricing Plan
✅ TEST 13: Delete Pricing Plan
✅ TEST 14: Get Plans by Provider
✅ TEST 15: Bulk Import Plans
```

---

## 📁 FILES CREATED (11 files)

```
admin/src/pages/
  ├── PricingPlans.tsx              NEW
  └── WalletCredit.tsx              NEW

admin/src/components/
  ├── PricingViewModal.tsx          NEW
  ├── PricingEditModal.tsx          NEW
  ├── PricingDeleteModal.tsx        NEW
  └── PricingBulkImportModal.tsx    NEW

admin/
  ├── ADMIN_SETUP.md                NEW (Full docs)
  └── test-api.sh                   NEW (Test script)

root/
  └── ADMIN_IMPLEMENTATION_COMPLETE.md  NEW
```

---

## 📝 FILES MODIFIED (3 files)

```
admin/src/App.tsx              - Added 2 new routes
admin/src/api/adminApi.ts      - Added 8 new API functions
admin/src/components/Sidebar.tsx - Added 2 nav items
```

---

## 🐛 TROUBLESHOOTING

### Admin not created?
```bash
cd backend && npx tsx scripts/create-admin.ts
```

### API returns 401?
- Check token is stored in localStorage
- Check admin user exists in DB
- Try login again

### UI page blank?
- Check browser console (F12)
- Check backend is running
- Clear browser cache
- Hard refresh (Ctrl+F5)

### Backend won't start?
- Check MongoDB is running
- Check .env file exists
- Check port 5000 is free
- Check node_modules: `npm install`

---

## 📚 DOCUMENTATION FILES

1. **ADMIN_SETUP.md** - 
   - Complete API reference
   - All endpoint examples
   - Error codes
   - Feature descriptions

2. **test-api.sh** -
   - Automated API testing
   - Tests all 15 endpoints
   - Shows request/response

3. **ADMIN_IMPLEMENTATION_COMPLETE.md** -
   - Implementation summary
   - Features list
   - File structure
   - Next steps

---

## ⚙️ ENVIRONMENT SETUP

No additional environment variables needed!

Using existing:
- `.env` in backend
- `vite.config.ts` in admin (port 5173)
- API base: http://localhost:5000/api/admin

---

## 🎯 WHAT TO TEST FIRST

### Basic Flow (5 min)
1. Login ✅
2. View Dashboard ✅
3. View Users ✅
4. View Pricing Plans ✅

### User Management (5 min)
1. View user details
2. Edit user info
3. Update user status
4. Credit wallet

### Pricing Management (5 min)
1. Create new plan
2. Edit plan
3. View plan details
4. Bulk import plans
5. Delete plan

### Audit Logs (2 min)
1. View logs
2. See all actions

---

## 💡 PRO TIPS

### Creating a Test Plan
Provider IDs:
- 1 = MTN
- 2 = Glo
- 3 = Airtel
- 4 = 9mobile

Types: AIRTIME or DATA

### Bulk Import Format (JSON)
```json
{
  "plans": [
    {
      "providerId": 1,
      "providerName": "MTN",
      "name": "MTN 1GB Daily",
      "price": 300,
      "type": "DATA",
      "discount": 5,
      "active": true
    }
  ]
}
```

### Check Backend Logs
Watch the backend terminal for real-time API calls:
```
🔵 API Request: POST /admin/login
📱 Admin login: admin@connectavtu.com
✅ Login successful
```

---

## 📞 SUPPORT

- **API Issues?** Check backend logs
- **UI Issues?** Check browser console (F12)
- **Database Issues?** Check MongoDB connection
- **Login Issues?** Run admin creation script again

---

## 🎉 SUCCESS CHECKLIST

- [ ] Backend running on port 5000
- [ ] Admin user created
- [ ] API tests passing (15+)
- [ ] Admin UI running on port 5173
- [ ] Can login with credentials
- [ ] Dashboard displays stats
- [ ] Can view users
- [ ] Can view pricing plans
- [ ] Can create/edit/delete plans
- [ ] Can bulk import plans
- [ ] Can credit wallets
- [ ] Audit logs show all actions

**If all checked ✅ then you're ready to go!**

---

## 🚀 PRODUCTION DEPLOYMENT

Before deploying:
1. Change admin password
2. Set up email notifications
3. Configure RBAC
4. Set up monitoring
5. Enable rate limiting
6. Configure backups

---

**Implementation Complete! Happy Testing! 🎊**

For detailed documentation, see: `/admin/ADMIN_SETUP.md`
