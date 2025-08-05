<h1 align="center" id="title">Book-Website</h1>

<p id="description">A simple Book Management Application built with Node.js Express MongoDB and EJS styled using Tailwind CSS. The app allows users to register log in add books view their collection and delete books. Authentication is handled via JWT tokens stored in cookies.</p>

<p align="center"><img src="![Node.js](https://img.shields.io/badge/Node.js-18.x-green)" alt="shields"><img src="![Express](https://img.shields.io/badge/Express.js-5.x-lightgrey)" alt="shields"><img src="![MongoDB](https://img.shields.io/badge/MongoDB-6.x-brightgreen)" alt="shields"></p>

<h2>Project Screenshots:</h2>

<img src="https://drive.google.com/uc?export=view&amp;id=1YbXvW5meoml95ZbO4QwiwlrPoyna9rAw" alt="project-screenshot" width="1920" height="1080/">

<img src="https://drive.google.com/uc?export=view&amp;id=1-vQKlsPtZ-dNFyNPEVEktKpCQuxZEBzH" alt="project-screenshot" width="1920" height="1080/">

  
  
<h2>🧐 Features</h2>

Here're some of the project's best features:

*   🔐 User authentication (Register / Login / Logout)
*   📖 Add view and delete books
*   🛡️ JWT-based authentication with cookies
*   🎨 Tailwind CSS for modern responsive UI
*   🗂️ MVC project structure with Express routes and controllers
*   🗑️ Method override support for DELETE requests

<h2>🛠️ Installation Steps:</h2>

<p>1. Clone the repository</p>

```
git clone https://github.com/yourusername/book-app.git cd book-app
```

<p>2. Install Dependencies</p>

```
npm install
```

<p>3. Create .env File</p>

```
MONGO_URI=mongodb://localhost:27017/bookapp JWT_SECRET=your_jwt_secret_key PORT=5000
```

<p>4. Run the app</p>

```
nodemon server.js
```

  
  
<h2>💻 Built with</h2>

Technologies used in the project:

*   Backend: Node.js Express.js
*   Frontend: EJS + Tailwind CSS
*   Database: MongoDB (via Mongoose)
*   Authentication: JWT bcrypt
*   Middleware: cookie-parser cors method-override