// config/logger.ts
import winston from 'winston';
import path from 'path';
import { config } from './env.js';

// Custom format for console with colors
const consoleFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.colorize(),
  winston.format.printf(({ timestamp, level, message, ...meta }) => {
    const metaStr = Object.keys(meta).length ? JSON.stringify(meta, null, 2) : '';
    return `${timestamp} [${level}]: ${message} ${metaStr}`;
  })
);

// Custom format for files (JSON)
const fileFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.errors({ stack: true }),
  winston.format.json()
);

export const logger = winston.createLogger({
  level: config.logLevel,
  format: fileFormat,
  transports: [
    // Console output with colors
    new winston.transports.Console({
      format: consoleFormat,
    }),
    // Error logs only
    new winston.transports.File({ 
      filename: path.join('logs', 'error.log'), 
      level: 'error',
      format: fileFormat
    }),
    // Warning logs and above
    new winston.transports.File({ 
      filename: path.join('logs', 'warn.log'), 
      level: 'warn',
      format: fileFormat
    }),
    // All logs
    new winston.transports.File({ 
      filename: path.join('logs', 'combined.log'),
      format: fileFormat
    }),
    // Request logs specifically
    new winston.transports.File({ 
      filename: path.join('logs', 'requests.log'),
      format: fileFormat
    }),
  ],
  // Handle uncaught exceptions
  exceptionHandlers: [
    new winston.transports.File({ filename: path.join('logs', 'exceptions.log') })
  ],
  // Handle unhandled promise rejections
  rejectionHandlers: [
    new winston.transports.File({ filename: path.join('logs', 'rejections.log') })
  ]
});
