import express from "express";
import { addbook, getbooks, deleteBook } from "../controllers/bookControllers.js";
import isLoggedIn from "../middlewares/authMiddlewares.js";

const router = express.Router();

router.get('/',isLoggedIn, async (req,res) => {
    const books = await getbooks(req,res,true);
    res.render('dashboard', { books });
})

router.post('/',isLoggedIn,addbook);

router.delete("/:id", isLoggedIn, deleteBook);

export default router;