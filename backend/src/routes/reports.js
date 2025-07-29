const express = require('express');
const { protect, authorize } = require('../middleware/auth');
const {
  getBlogSummary,
  getPopularTags,
  getPostAnalytics,
  getUserActivity,
  getCommentEngagement,
} = require('../controllers/reportController');

const router = express.Router();

/**
 * @swagger
 * /api/v1/reports/summary:
 *   get:
 *     summary: Get blog summary statistics
 *     tags: [Reports]
 *     responses:
 *       200:
 *         description: Blog summary stats
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     postCount:
 *                       type: number
 *                     commentCount:
 *                       type: number
 *                     userCount:
 *                       type: number
 *                     totalViews:
 *                       type: number
 */
router.get('/summary', getBlogSummary);

/**
 * @swagger
 * /api/v1/reports/popular-tags:
 *   get:
 *     summary: Get popular tags
 *     tags: [Reports]
 *     responses:
 *       200:
 *         description: List of popular tags
 */
router.get('/popular-tags', getPopularTags);

/**
 * @swagger
 * /api/v1/reports/post-analytics:
 *   get:
 *     summary: Get post analytics (Admin only)
 *     tags: [Reports]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Post analytics data
 */
router.get('/post-analytics', protect, authorize('admin'), getPostAnalytics);

/**
 * @swagger
 * /api/v1/reports/user-activity:
 *   get:
 *     summary: Get user activity report (Admin only)
 *     tags: [Reports]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User activity data
 */
router.get('/user-activity', protect, authorize('admin'), getUserActivity);

/**
 * @swagger
 * /api/v1/reports/comment-engagement:
 *   get:
 *     summary: Get comment engagement metrics
 *     tags: [Reports]
 *     responses:
 *       200:
 *         description: Comment engagement data
 */
router.get('/comment-engagement', getCommentEngagement);

module.exports = router;
