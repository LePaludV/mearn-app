import express from express
import { getFeedPosts, getUserPosts, likePost} from '../controllers/posts'
import { verifiedToken } from '../middlewares/auth'

const router = express.Router()

/* READ */
router.get('/',verifiedToken,getFeedPosts);
router.get('/:userId/posts',verifiedToken,getUserPosts)

/*UPDATE */
router.patch('/:id/like',verifiedToken,likePost)
