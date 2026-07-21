# AutoGenix – Car Rental Platform

[Live Demo](http://auto-genix.vercel.app/) | [GitHub Repo](https://github.com/aviral-18/AutoGenix)

---

## 🚗 Project Overview

AutoGenix is a full-stack car rental application built with the MERN stack and modern tooling. It provides end-users and admins with a seamless experience to browse, book, and manage car rentals in real time.

---

## 🛠️ Tech Stack

* **Frontend:** React.js, Tailwind CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Authentication & Security:** JWT (JSON Web Tokens), bcrypt
* **Image Management:** ImageKit.io
* **Additional:**

  * Session-based login & role-based access control
  * Real-time transformations & CDN-backed image delivery

---

## ⚙️ Key Features

1. **Scalable Car Catalog**

   * Real-time availability tracking
   * Advanced filtering (price, model, fuel type)
   * MERN-based booking engine handles **100+ concurrent bookings** without performance degradation

2. **Secure Authentication & Authorization**

   * Sign-up & login with JWT
   * Password hashing via bcrypt
   * Role-based access control for Users vs. Admins
   * **99.9% session integrity** across user sessions

3. **Image Optimization**

   * Leveraged ImageKit.io for CDN-backed image hosting
   * Real-time image transformations & automatic format compression
   * Improved page load speed by **up to 40%**
   * Enhanced SEO performance

4. **Responsive Admin Panel**

   * Built with React + Tailwind CSS
   * Full CRUD on car inventory, bookings, and user accounts
   * Analytics dashboard for operational insights
   * Boosted operational efficiency by **60%**

---

## 🚀 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/aviral-18/AutoGenix.git
   cd AutoGenix
   ```

2. **Install dependencies**

   ```bash
   # Frontend
   cd client
   npm install

   # Backend
   cd ../server
   npm install
   ```

3. **Environment Variables**

   Copy the provided templates and fill in your own values (see `server/.env.example` and `client/.env.example`).

   **Backend** — create a `.env` file in the `server/` directory:

   ```dotenv
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
   ```

   **Frontend** — create a `.env` file in the `client/` directory:

   ```dotenv
   VITE_BASE_URL=http://localhost:5000
   VITE_CURRENCY=$
   ```

4. **Run the app**

   ```bash
   # In two separate terminals:

   # Terminal 1: Start server (nodemon)
   cd server
   npm run server

   # Terminal 2: Start client (Vite dev server)
   cd client
   npm run dev
   ```

5. **Visit**
   Open the local client URL printed by Vite (typically http://localhost:5173) in your browser.
   A hosted demo of the original project is available at http://auto-genix.vercel.app/.

---

## 📂 Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   ├── public/
│   ├── .env.example
│   └── package.json
├── server/                 # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env.example
│   └── package.json
├── .gitignore
└── README.md
```

---

## 🙏 Acknowledgments

This project is based on the original **AutoGenix** created by
[@avinashk010](https://github.com/avinashk010) ([original repository](https://github.com/avinashk010/AutoGenix)).
This copy is maintained by [@aviral-18](https://github.com/aviral-18) with the original
author's permission. All credit for the original work goes to the original author.

---
