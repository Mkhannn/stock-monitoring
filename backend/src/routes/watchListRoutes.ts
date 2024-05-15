import { Router } from 'express';
import { createWatchlist, getWatchlist } from '../controllers/watchListController';
import authMiddleware from '../middlewares/authMidllerware';

const router = Router();

router.post('/', authMiddleware, createWatchlist);
router.get('/', authMiddleware, getWatchlist);

export default router;
