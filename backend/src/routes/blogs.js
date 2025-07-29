const express = require('express');
const { protect, authorize, optionalAuth } = require('../middleware/auth');
const {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
  searchBlogs,
  getBlogsByCategory,
  likeBlog,
  uploadBlogImage,
} = require('../controllers/blogController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Blog:
 *       type: object
 *       required:
 *         - title
 *         - content
 *         - category
 *         - author
 *       properties:
 *         _id:
 *           type: string
 *         title:
 *           type: string
 *         content:
 *           type: string
 *         excerpt:
 *           type: string
 *         slug:
 *           type: string
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *         category:
 *           type: string
 *           enum: [basics, methodologies, tools, productivity, case-studies]
 *         author:
 *           type: string
 *         featured:
 *           type: boolean
 *         published:
 *           type: boolean
 *         publishedAt:
 *           type: string
 *           format: date-time
 *         featuredImage:
 *           type: string
 *         readTime:
 *           type: number
 *         views:
 *           type: number
 *         likesCount:
 *           type: number
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

/**
 * @swagger
 * /api/v1/blogs:
 *   get:
 *     summary: Get all published blogs
 *     tags: [Blogs]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           default: -publishedAt
 *     responses:
 *       200:
 *         description: List of blogs
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 count:
 *                   type: number
 *                 pagination:
 *                   type: object
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Blog'
 */
router.get('/', optionalAuth, getBlogs);

/**
 * @swagger
 * /api/v1/blogs/search:
 *   get:
 *     summary: Search blogs
 *     tags: [Blogs]
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Search results
 */
router.get('/search', searchBlogs);

/**
 * @swagger
 * /api/v1/blogs/category/{category}:
 *   get:
 *     summary: Get blogs by category
 *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blogs in category
 */
router.get('/category/:category', getBlogsByCategory);

/**
 * @swagger
 * /api/v1/blogs/{id}:
 *   get:
 *     summary: Get single blog
 *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blog details
 *       404:
 *         description: Blog not found
 */
router.get('/:id', optionalAuth, getBlog);

/**
 * @swagger
 * /api/v1/blogs:
 *   post:
 *     summary: Create new blog
 *     tags: [Blogs]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *               - category
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               category:
 *                 type: string
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *               published:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Blog created successfully
 *       401:
 *         description: Not authorized
 */
router.post('/', protect, authorize('admin', 'author'), createBlog);

/**
 * @swagger
 * /api/v1/blogs/{id}:
 *   put:
 *     summary: Update blog
 *     tags: [Blogs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blog updated successfully
 *       404:
 *         description: Blog not found
 */
router.put('/:id', protect, authorize('admin', 'author'), updateBlog);

/**
 * @swagger
 * /api/v1/blogs/{id}:
 *   delete:
 *     summary: Delete blog
 *     tags: [Blogs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blog deleted successfully
 *       404:
 *         description: Blog not found
 */
router.delete('/:id', protect, authorize('admin', 'author'), deleteBlog);

/**
 * @swagger
 * /api/v1/blogs/{id}/like:
 *   post:
 *     summary: Like/unlike blog
 *     tags: [Blogs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blog like toggled
 */
router.post('/:id/like', protect, likeBlog);

/**
 * @swagger
 * /api/v1/blogs/{id}/image:
 *   post:
 *     summary: Upload blog image
 *     tags: [Blogs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Image uploaded successfully
 */
router.post('/:id/image', protect, authorize('admin', 'author'), uploadBlogImage);

module.exports = router;
