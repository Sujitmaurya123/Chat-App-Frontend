# 💬 ChatApp

ChatApp is a real-time messaging application that allows users to connect, communicate, and collaborate with friends or in groups. It includes core social and chat features such as user authentication, friend requests, group creation, and chat management.

---

## 🚀 Features

### 🛂 Authentication
- User **Sign Up** and **Login**
- JWT-based or session authentication
- Password hashing for security

### 👥 Friend System
- **Send**, **Accept**, or **Reject** friend requests
- View friend list and friend request notifications

### 💬 Chat System
- **One-to-One Messaging**
- **Group Chats** (create and manage chat groups)
- Typing indicators and read receipts (optional)
- Real-time updates using WebSockets or similar

### 🗑️ Chat Management
- Delete individual messages
- Delete full conversation (self-only or mutual)
- Leave or delete group chats

### 📦 User Dashboard
- View user profile and friend activity
- Manage groups and chat settings
- View recent chats and unread messages

---

## 🛠️ Tech Stack (Example)

- **Frontend:** React / 
- **Backend:** Node.js / Express
- **Database:** MongoDB 
- **Authentication:** JWT / OAuth
- **Real-time:** Socket.io / WebSockets
- **Storage:** Cloud Storage (for images/files)

---

## 📁 Project Screenshots show down
1.
![Login](<Screenshot 2025-04-07 222443.png>)

2. ![Home](<Screenshot 2025-04-07 222428.png>)

3. ![Dashboard](<Screenshot 2025-04-07 222552.png>)


---

## 🧪 Setup Instructions

1. **Clone the repo:**
   ```bash
   git clone https://github.com/Sujitmaurya123/Chat-App-Frontend
   git clone https://github.com/Sujitmaurya123/Chat-App-Backend

   cd chatApp

cd server && npm install
cd ../client && npm install

## SetUp .env Files


VITE_FIREBASE_KEY= 

VITE_AUTH_DOMAIN= 

VITE_PROJECT_ID=

VITE_STORAGE_BUCKET=

VITE_MESSAGING_SENDER_ID= 

VITE_APP_ID=

VITE_SERVER=

VITE_STRIPE_KEY=Stripe Publishable Key

# In server/
npm run dev

# In client/
npm run dev
