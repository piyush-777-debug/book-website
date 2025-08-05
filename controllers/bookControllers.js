import bookModel from "../models/Book.js";

export const addbook = async (req, res) => {
  try {
    const { title, author, genre } = req.body;
    const book = new bookModel({
      title,
      author,
      genre,
      user: req.user._id
    });
    await book.save();
    res.redirect('/books');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getbooks = async (req, res, returnData = false) => {
  try {
    const books = await bookModel.find({ user: req.user._id });
    if (returnData) return books;
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const book = await bookModel.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id
    });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.redirect('/books');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
