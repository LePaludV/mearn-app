import express from 'express';
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from '../controllers/users.js';
import { verifiedToken } from '../middlewares/auth.js';

const router = express.Router();

/* READ */
router.get('/:id', verifiedToken, getUser);
router.get('/:id/friends', verifiedToken, getUserFriends);

/* UPDATE */
router.patch('/:id/:friendId', verifiedToken, addRemoveFriend);

export default router;
