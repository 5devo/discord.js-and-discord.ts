import dotenv from 'dotenv';
import { BotConfig } from '../types';

dotenv.config();

if (!process.env.TOKEN || !process.env.CLIENT_ID) {
  throw new Error('Missing required environment variables');
}

export const config: BotConfig = {
  token: process.env.TOKEN,
  clientId: process.env.CLIENT_ID,
  guildId: process.env.GUILD_ID,
  mongodbUri: process.env.MONGODB_URI,
};

export const colors = {
  primary: '#5865F2',
  success: '#57F287',
  warning: '#FEE75C',
  error: '#ED4245',
  info: '#0099ff'
};

export const emojis = {
  success: '✅',
  error: '❌',
  warning: '⚠️',
  info: 'ℹ️',
  loading: '⏳',
  ping: '🏓'
};
