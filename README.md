# Project Management Blog

A comprehensive project management blog web application built with Node.js, Express, Vue.js 3, and MongoDB.

## 🚀 Features

- **Blog & News Posting**: Create and manage project management content
- **Comments System**: Interactive commenting on blog posts
- **Project Management Best Practices**: Curated content sections
- **Productivity Tools**: Daily planner, time tracker, and reporting dashboard
- **Admin Authentication**: JWT-based authentication for administrative features
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🏗️ Project Structure

```
project-management-blog/
├── backend/                 # Node.js + Express API
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── models/          # MongoDB models
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Custom middleware
│   │   ├── utils/           # Utility functions
│   │   └── config/          # Configuration files
│   ├── tests/               # Backend tests
│   ├── package.json
│   └── server.js
├── frontend/                # Vue.js 3 SPA
│   ├── src/
│   │   ├── components/      # Vue components
│   │   ├── views/           # Page views
│   │   ├── router/          # Vue Router configuration
│   │   ├── store/           # State management
│   │   └── utils/           # Frontend utilities
│   ├── tests/               # Frontend tests
│   ├── package.json
│   └── vite.config.js
├── shared/                  # Shared utilities and interfaces
├── docs/                    # Documentation
├── .github/                 # GitHub Actions workflows
├── docker-compose.yml       # Docker configuration
├── README.md
└── package.json             # Workspace management
```

## 🛠️ Tech Stack

### Backend

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Testing**: Jest + Supertest
- **Security**: Helmet, CORS, Rate Limiting
- **Documentation**: Swagger/OpenAPI

### Frontend

- **Framework**: Vue.js 3 (Composition API)
- **Routing**: Vue Router 4
- **State Management**: Pinia
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Testing**: Vitest + Vue Test Utils
- **Charts**: Chart.js

### DevOps & Tools

- **Linting**: ESLint + Prettier
- **Git Hooks**: Husky
- **CI/CD**: GitHub Actions
- **Containerization**: Docker
- **Monitoring**: Morgan (logging), Winston
- **Performance**: Compression middleware

## 🚦 Getting Started

### Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **pnpm**: Version 8.0.0 or higher (for faster package management)
- **MongoDB**: Version 6.0 or higher
- **Git**: For version control

### Installing pnpm

If you don't have pnpm installed, you can install it globally:

```bash
npm install -g pnpm@8.15.0
# or using the install script
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/reyisjones/ProManagerBlog.git
   cd project-management-blog
   ```

2. **Install dependencies**

   ```bash
   # Install workspace dependencies
   pnpm install

   # Install backend dependencies
   cd backend && pnpm install

   # Install frontend dependencies
   cd ../frontend && pnpm install
   ```

3. **Environment Configuration**

   ```bash
   # Copy environment files
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env
   ```

4. **Start the development servers**

   ```bash
   # Start backend (from root)
   pnpm run dev:backend

   # Start frontend (from root)
   pnpm run dev:frontend

   # Or start both concurrently
   pnpm run dev
   ```

## 📊 Content Categories

### Basics

- What is Project Management?
- Roles: PM vs Product Owner
- Project Lifecycle Phases

### Methodologies

- Agile Development
- Scrum Framework
- Kanban Methodology
- Waterfall Model

### Tools & Software

- Jira Administration
- Asana Workflows
- Trello Best Practices
- Microsoft Project

### Productivity & Tools

- Time Tracking Solutions
- Team Retrospectives
- Reporting Dashboards
- Performance Metrics

### Case Studies

- Success Stories
- Lessons from Failures
- Industry-Specific Examples

## 🔧 Productivity Tools

### Daily Planner

- Todo list with priority levels
- Status tracking (pending, in-progress, completed)
- Due date management

### Time Tracker

- Start/stop timers for tasks
- Project-based time logging
- Weekly/monthly summaries

### Reporting Dashboard

- Blog post analytics
- Comment engagement metrics
- Tag popularity charts
- User activity reports

## 💻 Development

### Why pnpm?

This project uses **pnpm** instead of npm for faster and more efficient dependency management:

- **Speed**: Up to 2x faster installations than npm
- **Disk Space**: Efficient storage with content-addressable storage
- **Strict**: Better dependency resolution and no phantom dependencies
- **Monorepo Support**: Built-in workspace support with `pnpm-workspace.yaml`

### Development Commands

```bash
# Install all dependencies (monorepo)
pnpm install -r

# Start development servers
pnpm dev                    # Both frontend and backend
pnpm run dev:backend        # Backend only
pnpm run dev:frontend       # Frontend only

# Building
pnpm run build              # Build both projects
pnpm run build:backend      # Build backend only
pnpm run build:frontend     # Build frontend only

# Testing
pnpm test                   # Run all tests
pnpm run test:backend       # Backend tests only
pnpm run test:frontend      # Frontend tests only
pnpm run test:coverage      # Tests with coverage reports

# Code Quality
pnpm run lint               # Lint all projects
pnpm run lint:fix           # Fix linting issues
pnpm run format             # Format code with Prettier

# Maintenance
pnpm run clean              # Clean all node_modules and dist folders
pnpm install:all            # Reinstall all dependencies
```

### Project Structure Benefits

- **Monorepo**: Shared dependencies and consistent tooling
- **Type Safety**: TypeScript across frontend and backend
- **Fast Builds**: Vite for frontend, optimized Node.js for backend
- **Hot Reload**: Instant feedback during development

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run backend tests
pnpm run test:backend

# Run frontend tests
pnpm run test:frontend

# Run tests with coverage
pnpm run test:coverage
```

## 🔒 Security

- JWT-based authentication
- Input validation and sanitization
- Rate limiting on API endpoints
- CORS configuration
- Security headers with Helmet
- Environment variable protection

## 📈 Performance

- Database query optimization
- Response compression
- Static asset caching
- Code splitting (frontend)
- Lazy loading components
- Image optimization

## 🚀 Deployment

### Docker

The Docker configuration uses pnpm for faster builds:

```bash
# Build and run with Docker Compose
docker-compose up -d
```

**Docker Benefits with pnpm:**

- Faster container builds due to efficient dependency resolution
- Smaller image sizes with `--frozen-lockfile` for reproducible builds
- Better caching of dependency layers

### Production Build

```bash
# Build frontend
pnpm run build:frontend

# Build backend
pnpm run build:backend
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email reyisnieves@example.com or create an issue in the GitHub repository.

## 🙏 Acknowledgments

- Vue.js community for excellent documentation
- Express.js for the robust backend framework
- MongoDB for flexible data storage
- All contributors and maintainers
