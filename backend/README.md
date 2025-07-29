# Project Management Blog - Backend API

RESTful API backend for the Project Management Blog application built with Node.js, Express, and MongoDB.

## 🚀 Features

- **RESTful API**: Clean and consistent API design
- **Authentication**: JWT-based authentication system
- **Security**: Comprehensive security middleware stack
- **Validation**: Input validation and sanitization
- **Testing**: Complete test suite with Jest and Supertest
- **Documentation**: OpenAPI/Swagger documentation
- **Performance**: Optimized with compression and caching
- **Monitoring**: Request logging and error tracking

## 📁 Project Structure

```
backend/
├── src/
│   ├── controllers/          # Route controllers
│   │   ├── authController.js
│   │   ├── blogController.js
│   │   ├── commentController.js
│   │   ├── userController.js
│   │   └── reportController.js
│   ├── models/               # MongoDB models
│   │   ├── User.js
│   │   ├── Blog.js
│   │   ├── Comment.js
│   │   └── Category.js
│   ├── routes/               # API routes
│   │   ├── auth.js
│   │   ├── blogs.js
│   │   ├── comments.js
│   │   ├── users.js
│   │   └── reports.js
│   ├── middleware/           # Custom middleware
│   │   ├── auth.js
│   │   ├── validation.js
│   │   ├── errorHandler.js
│   │   └── security.js
│   ├── utils/                # Utility functions
│   │   ├── logger.js
│   │   ├── email.js
│   │   └── helpers.js
│   ├── config/               # Configuration
│   │   ├── database.js
│   │   └── swagger.js
│   └── scripts/              # Database scripts
│       ├── seedDatabase.js
│       └── migrate.js
├── tests/                    # Test files
│   ├── setup.js
│   ├── auth.test.js
│   ├── blogs.test.js
│   └── comments.test.js
├── docs/                     # API documentation
├── package.json
├── server.js                 # Entry point
├── .env.example             # Environment variables template
└── README.md
```

## 🛠️ Tech Stack

- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: Helmet, CORS, Rate Limiting, Input Sanitization
- **Validation**: Joi, Express Validator
- **Testing**: Jest, Supertest, MongoDB Memory Server
- **Documentation**: Swagger/OpenAPI
- **Logging**: Winston, Morgan
- **File Upload**: Multer
- **Email**: Nodemailer

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- MongoDB (local or MongoDB Atlas)
- Git

### Installation

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/pm-blog
   JWT_SECRET=your-super-secret-jwt-key
   JWT_EXPIRE=7d
   EMAIL_HOST=smtp.mailtrap.io
   EMAIL_PORT=587
   EMAIL_USER=your-email-user
   EMAIL_PASS=your-email-password
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:5000`

## 📚 API Endpoints

### Authentication
```
POST   /api/auth/register     # Register new user
POST   /api/auth/login        # User login
POST   /api/auth/logout       # User logout
GET    /api/auth/me           # Get current user
POST   /api/auth/forgot       # Forgot password
PUT    /api/auth/reset/:token # Reset password
```

### Blog Posts
```
GET    /api/blogs             # Get all blog posts
GET    /api/blogs/:id         # Get single blog post
POST   /api/blogs             # Create blog post (auth required)
PUT    /api/blogs/:id         # Update blog post (auth required)
DELETE /api/blogs/:id         # Delete blog post (auth required)
GET    /api/blogs/search      # Search blog posts
GET    /api/blogs/category/:category # Get posts by category
```

### Comments
```
GET    /api/blogs/:id/comments        # Get comments for a post
POST   /api/blogs/:id/comments        # Add comment to post
PUT    /api/comments/:id              # Update comment (auth required)
DELETE /api/comments/:id              # Delete comment (auth required)
```

### Reports & Analytics
```
GET    /api/reports/summary           # Get blog summary stats
GET    /api/reports/popular-tags      # Get popular tags
GET    /api/reports/post-analytics    # Get post analytics
```

### Users (Admin only)
```
GET    /api/users                     # Get all users
GET    /api/users/:id                 # Get single user
PUT    /api/users/:id                 # Update user
DELETE /api/users/:id                 # Delete user
```

## 🧪 Testing

### Run Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Structure
```javascript
// Example test file
describe('Blog API', () => {
  beforeEach(async () => {
    // Setup test data
  });

  describe('GET /api/blogs', () => {
    it('should return all blog posts', async () => {
      const res = await request(app)
        .get('/api/blogs')
        .expect(200);
      
      expect(res.body.success).toBe(true);
      expect(res.body.data).toBeInstanceOf(Array);
    });
  });
});
```

## 🔒 Security Features

### Authentication & Authorization
- JWT-based authentication
- Role-based access control (Admin/User)
- Password hashing with bcrypt
- Secure password reset flow

### Input Validation
- Request validation with Joi
- MongoDB injection prevention
- XSS protection
- Parameter pollution prevention

### Security Headers
- Helmet.js for security headers
- CORS configuration
- Rate limiting
- Request size limits

### Example Security Middleware
```javascript
// Rate limiting
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

// Input sanitization
const mongoSanitize = require('express-mongo-sanitize');
app.use(mongoSanitize());
```

## 📈 Performance Optimization

### Database
- MongoDB indexing
- Query optimization
- Pagination for large datasets
- Connection pooling

### Caching
- Response compression
- ETags for conditional requests
- Static file caching

### Monitoring
- Request logging with Morgan
- Error tracking with Winston
- Performance metrics collection

## 🐳 Docker Support

### Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 5000

USER node

CMD ["npm", "start"]
```

### Build and Run
```bash
# Build Docker image
docker build -t pm-blog-backend .

# Run container
docker run -p 5000:5000 --env-file .env pm-blog-backend
```

## 📖 API Documentation

### Swagger/OpenAPI
API documentation is available at `/api-docs` when running the server.

### Generate Documentation
```bash
npm run docs
```

## 🌱 Database Seeding

### Seed Sample Data
```bash
npm run seed
```

This will create:
- Sample blog posts
- Categories
- Sample users
- Comments

## 🔧 Scripts

```bash
npm run dev          # Start development server with nodemon
npm run start        # Start production server
npm run test         # Run test suite
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run seed         # Seed database with sample data
npm run security:audit # Check for security vulnerabilities
```

## 🚀 Deployment

### Environment Variables for Production
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/pm-blog
JWT_SECRET=super-secure-production-secret
CORS_ORIGIN=https://yourdomain.com
```

### Process Management
Consider using PM2 for production:
```bash
npm install -g pm2
pm2 start server.js --name "pm-blog-api"
```

## 📊 Monitoring & Logging

### Log Levels
- **Error**: Application errors
- **Warn**: Warning messages
- **Info**: General information
- **Debug**: Debug information

### Log Format
```json
{
  "timestamp": "2025-01-01T12:00:00.000Z",
  "level": "info",
  "message": "User registered successfully",
  "userId": "60d5ecb74b24c1001f647878",
  "ip": "192.168.1.1"
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Write tests for new features
4. Ensure all tests pass
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.
