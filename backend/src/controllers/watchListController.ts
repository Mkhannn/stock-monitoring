import { Request, Response } from 'express';
import Watchlist from '../models/WatchList';

interface User {
  id: string; // Assuming user has an id property
  // Define other properties of your user object here
}

declare module 'express' {
  export interface Request {
    user?: User; // Define the 'user' property
  }
}

export const createWatchlist = async (req: Request, res: Response) => {
  const { symbols } = req.body;
  try {
    const watchlist = new Watchlist({ userId: req.user?.id, symbols });
    await watchlist.save();
    res.status(201).json(watchlist);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getWatchlist = async (req: Request, res: Response) => {
  try {
    const watchlist = await Watchlist.findOne({ userId: req.user?.id });
    res.json(watchlist);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
