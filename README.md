# 📚 Book-Website

A simple Book Management Application built with **Node.js**, **Express**, **MongoDB**, and **EJS**, styled using **Tailwind CSS**.  
The app allows users to **register, log in, add books, view their collection, and delete books**.  
Authentication is handled via **JWT tokens stored in cookies**.

---

## 🔰 Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express.js](https://img.shields.io/badge/Express.js-5.x-lightgrey)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-brightgreen)

---

<h2>📸 Project Screenshots:</h2>
<img src="./assests/Screenshot (16).png" alt="One Screenshot" width="800">
<img src="./assests/Screenshot (18).png" alt="Dashboard Screenshot" width="800">

---

## 🧐 Features

- 🔐 **User authentication** (Register / Login / Logout)  
- 📖 **Add, view, and delete books**  
- 🛡️ **JWT-based authentication** with cookies  
- 🎨 **Tailwind CSS** for modern responsive UI  
- 🗂️ **MVC project structure** with Express routes and controllers  
- 🗑️ **Method override** support for DELETE requests  

---

💻 Built With
- Backend: Node.js, Express.js
- Frontend: EJS, Tailwind CSS
- Database: MongoDB (via Mongoose)
- Authentication: JWT, bcrypt
- Middleware: cookie-parser, cors, method-override

---

## 🛠️ Installation Steps

1️⃣ Clone the repository  
```bash
git clone https://github.com/yourusername/book-app.git
cd book-app

2️⃣ Install Dependencies
```bash
npm install

3️⃣ Create .env File
```bash
MONGO_URI=mongodb://localhost:27017/bookapp
JWT_SECRET=your_jwt_secret_key
PORT=5000

4️⃣ Run the app
```bash
nodemon server.js

