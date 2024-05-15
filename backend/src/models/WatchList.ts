import mongoose, { Document, Schema } from 'mongoose';

interface IWatchlist extends Document {
  userId: string;
  symbols: string[];
}

const WatchlistSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  symbols: { type: [String], required: true }
});

export default mongoose.model<IWatchlist>('Watchlist', WatchlistSchema);
