import express from 'express';
import { getFeedPosts, getUserPosts, likePost } from '../controllers/posts.js';
import { verifiedToken } from '../middlewares/auth.js';

const router = express.Router();

/* READ */
router.get('/', verifiedToken, getFeedPosts);
router.get('/:userId/posts', verifiedToken, getUserPosts);

/*UPDATE */
router.patch('/:id/like', verifiedToken, likePost);

export default router;
