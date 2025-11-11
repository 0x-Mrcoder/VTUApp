# Admin Login Credentials

## ✅ Correct Credentials (Use These!)

```
Email: admin@vtuapp.com
Password: Admin@123456
```

## ❌ Wrong Credentials (Don't Use)
- admin@connectavtu.com (This user does NOT exist)
- Any other email address

## 🔑 Important Notes

1. **Admin account created** in MongoDB by the seed script
2. **Email is case-sensitive** - Use exactly: `admin@vtuapp.com`
3. **Password is case-sensitive** - Use exactly: `Admin@123456`
4. Account status: **active** ✅

## 📍 Login URL

- **Frontend**: http://localhost:5174/login
- **Backend API**: http://localhost:5000/api/admin/login

## 🔄 Reset Admin Password

If you need to reset the admin password, run:

```bash
cd /home/amee/Desktop/VTUApp/backend
npm run build
npx tsx src/scripts/seed-admin.ts
```

This will:
1. Reset the password to `Admin@123456`
2. Create the role if it doesn't exist
3. Update the existing admin user

## 🚀 Login Process

1. Go to http://localhost:5174/login
2. Enter: `admin@vtuapp.com`
3. Enter password: `Admin@123456`
4. Click "Sign In"
5. You should be redirected to the dashboard in ~1 second

## ⚠️ Server Status

Make sure both servers are running:

**Backend Server** (port 5000):
```bash
cd /home/amee/Desktop/VTUApp/backend
npm start
```

**Frontend Dev Server** (port 5174):
```bash
cd /home/amee/Desktop/VTUApp/admin
npm run dev
```

---

**Created**: 2025-11-11
**Admin Email**: admin@vtuapp.com
