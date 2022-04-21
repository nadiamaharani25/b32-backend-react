const express = require('express');

const router = express.Router();

// Controller
const {
  addUsers,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/user');

const {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product');

const {
  getTransactions,
  addTransaction,
  notification,
} = require('../controllers/transaction');

const {
  getCategories,
  addCategory,
  updateCategory,
  getCategory,
  deleteCategory,
} = require('../controllers/category');

// Profile
const { getProfile } = require('../controllers/profile');

// Auth
const { register, login, checkAuth } = require('../controllers/auth');

// Middleware
const { auth } = require('../middlewares/auth');
const { uploadFile } = require('../middlewares/uploadFile');

// User
router.post('/user', addUsers);
router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.delete('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

// Profile
router.get('/profile', auth, getProfile);

// Product
router.get('/products', auth, getProducts);
router.get('/product/:id', auth, getProduct);
router.post('/product', auth, uploadFile('image'), addProduct);
router.patch('/product/:id', auth, uploadFile('image'), updateProduct);
router.delete('/product/:id', auth, deleteProduct);

// Transaction
router.get('/transactions', auth, getTransactions);
router.post('/transaction', auth, addTransaction);

// Notification
router.post('/notification', notification);

// Categories
router.get('/categories', getCategories);
router.get('/category/:id', getCategory);
router.post('/category', addCategory);
router.patch('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);

// Auth
router.post('/register', register);
router.post('/login', login);
router.get('/check-auth', auth, checkAuth);

module.exports = router;
