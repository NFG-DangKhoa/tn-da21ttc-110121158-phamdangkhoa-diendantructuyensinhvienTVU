const express = require('express');
const router = express.Router();
const forumRulesController = require('../controllers/forumRulesController');
const { protect, admin } = require('../middlewares/authMiddleware');
const isAdminMiddleware = require('../middlewares/isAdminMiddleware');

/**
 * @route GET /api/forum-rules
 * @desc Lấy quy định diễn đàn hiện tại
 * @access Public
 */
router.get('/', forumRulesController.getCurrentRules);

/**
 * @route PUT /api/forum-rules
 * @desc Cập nhật quy định diễn đàn
 * @access Admin
 */
router.put('/', protect, isAdminMiddleware, forumRulesController.updateRules);

/**
 * @route GET /api/forum-rules/history
 * @desc Lấy lịch sử các phiên bản quy định
 * @access Admin
 */
router.get('/history', protect, isAdminMiddleware, forumRulesController.getRulesHistory);

/**
 * @route POST /api/forum-rules/agree
 * @desc User đồng ý với quy định diễn đàn
 * @access Private
 */
router.post('/agree', protect, forumRulesController.agreeToRules);

/**
 * @route GET /api/forum-rules/check-agreement
 * @desc Kiểm tra user đã đồng ý quy định chưa
 * @access Private
 */
router.get('/check-agreement', protect, forumRulesController.checkRulesAgreement);

module.exports = router;
