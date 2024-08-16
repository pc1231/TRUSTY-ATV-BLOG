import { Router } from 'express';
import * as postsCtrl from '../controllers/posts.js'; // This path should be correct

const router = Router();

router.get('/new', postsCtrl.new);
router.post('/', postsCtrl.create);

export {
  router
};
