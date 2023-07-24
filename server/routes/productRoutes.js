import express from 'express';

import {
  createProduct,
  createProductReview,
  deleteProduct,
  getProductById,
  getProducts,
  getTopProducts,
  updateProduct,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import Product from '../models/product.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/', protect, admin, createProduct);
router.post('/:id/reviews', protect, createProductReview);
router.get('/top', getTopProducts);
// router.post('/create', async (req, res) => {
//   const product = await Product.create({
//     user: req.body.user,
//     name: req.body.name,
//     image: req.body.image,
//     brand: req.body.brand,
//     category: req.body.category,
//     description: req.body.description,
//     price: req.body.price,
//     countInStock: req.body.countInStock
//   });
//   if (product) {
//     return res.json({product});
//   } else {
//     return res.status(400).json({error: 'error'})
//   }
  // Product.create({
  //   user: req.body.user,
  //   name: req.body.name,
  //   image: req.body.image,
  //   brand: req.body.brand,
  //   category: req.body.category,
  //   description: req.body.description,
  //   price: req.body.price,
  //   countInStock: req.body.countInStock
  // })
  // .then(product => {
  //   return res.json(product)
  // })
  // .catch(err => res.status(400).json({err: 'error'}));
  // return res.status(400).json({err: 'error'});
// });

router.get('/:id', getProductById);
router.delete('/:id', protect, admin, deleteProduct);
router.put('/:id', protect, admin, updateProduct);

export default router;
