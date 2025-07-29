# Backend Dockerfile
FROM node:18-alpine AS backend-base

# Install pnpm
RUN npm install -g pnpm@8.15.0

# Set working directory
WORKDIR /app

# Copy package files
COPY backend/package*.json ./

# Install dependencies
RUN pnpm install --frozen-lockfile --prod && pnpm store prune

# Copy source code
COPY backend/ .

# Create logs directory
RUN mkdir -p logs

# Expose port
EXPOSE 5000

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Change ownership
RUN chown -R nodejs:nodejs /app
USER nodejs

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node healthcheck.js

# Start the application
CMD ["pnpm", "start"]

# Frontend Dockerfile
FROM node:18-alpine AS frontend-build

# Install pnpm
RUN npm install -g pnpm@8.15.0

WORKDIR /app

# Copy package files
COPY frontend/package*.json ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY frontend/ .

# Build the application
RUN pnpm run build

# Production stage
FROM nginx:alpine AS frontend-production

# Copy built assets
COPY --from=frontend-build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY docker/nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
