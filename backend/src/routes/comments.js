const express = require('express');
const { protect, authorize } = require('../middleware/auth');
const {
  getComments,
  getComment,
  addComment,
  updateComment,
  deleteComment,
} = require('../controllers/commentController');

const router = express.Router({ mergeParams: true });

/**
 * @swagger
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       required:
 *         - comment
 *         - blog
 *         - user
 *       properties:
 *         _id:
 *           type: string
 *         comment:
 *           type: string
 *         blog:
 *           type: string
 *         user:
 *           type: string
 *         parentComment:
 *           type: string
 *         approved:
 *           type: boolean
 *         createdAt:
 *           type: string
 *           format: date-time
 */

/**
 * @swagger
 * /api/v1/blogs/{blogId}/comments:
 *   get:
 *     summary: Get comments for a blog
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: blogId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of comments
 */
router.get('/', getComments);

/**
 * @swagger
 * /api/v1/blogs/{blogId}/comments:
 *   post:
 *     summary: Add comment to blog
 *     tags: [Comments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: blogId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - comment
 *             properties:
 *               comment:
 *                 type: string
 *               parentComment:
 *                 type: string
 *     responses:
 *       201:
 *         description: Comment added successfully
 */
router.post('/', protect, addComment);

/**
 * @swagger
 * /api/v1/comments/{id}:
 *   get:
 *     summary: Get single comment
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Comment details
 */
router.get('/:id', getComment);

/**
 * @swagger
 * /api/v1/comments/{id}:
 *   put:
 *     summary: Update comment
 *     tags: [Comments]
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
 *         description: Comment updated successfully
 */
router.put('/:id', protect, updateComment);

/**
 * @swagger
 * /api/v1/comments/{id}:
 *   delete:
 *     summary: Delete comment
 *     tags: [Comments]
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
 *         description: Comment deleted successfully
 */
router.delete('/:id', protect, deleteComment);

module.exports = router;
