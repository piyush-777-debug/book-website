import express from "express";
import { registerUser, loginUser } from "../controllers/authControllers.js";

const router = express.Router();

//Show Register page
router.get("/register", (req, res) => {
  res.render("register");
});

// Show login page
router.get("/login", (req, res) => {
  res.render("login");
});

router.post('/register',registerUser);
router.post('/login',loginUser);

router.get('/logout',(req,res)=>{
  res.clearCookie("token");
  res.redirect('/auth/login');
})
export default router;