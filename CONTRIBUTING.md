# Contributing to Project Management Blog

Thank you for considering contributing to the Project Management Blog! We welcome contributions from the community and are pleased to have you join us.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Guidelines](#development-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)
- [Testing](#testing)
- [Documentation](#documentation)

## 🤝 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

### Our Standards

- **Be respectful**: Treat everyone with respect and kindness
- **Be inclusive**: Welcome newcomers and help them learn
- **Be constructive**: Provide helpful feedback and suggestions
- **Be professional**: Maintain a professional tone in all interactions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MongoDB (local or cloud)
- Git

### Development Setup

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/project-management-blog.git
   cd project-management-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   cd backend && npm install
   cd ../frontend && npm install
   ```

3. **Set up environment variables**
   ```bash
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env.local
   ```

4. **Start development servers**
   ```bash
   npm run dev
   ```

## 🛠️ How to Contribute

### Types of Contributions

We welcome several types of contributions:

- **Bug fixes**
- **Feature enhancements**
- **Documentation improvements**
- **Test coverage improvements**
- **Performance optimizations**
- **Security improvements**
- **UI/UX improvements**

### Before You Start

1. **Check existing issues**: Look for existing issues or discussions
2. **Create an issue**: If none exists, create a new issue to discuss your idea
3. **Get feedback**: Wait for feedback from maintainers before starting work
4. **Assign yourself**: Comment on the issue to let others know you're working on it

## 💻 Development Guidelines

### Code Style

#### Backend (Node.js)
- Use ESLint and Prettier configurations
- Follow RESTful API design principles
- Write meaningful commit messages
- Use semantic versioning
- Include JSDoc comments for functions

```javascript
/**
 * Create a new blog post
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>}
 */
const createBlog = async (req, res) => {
  // Implementation
};
```

#### Frontend (Vue.js)
- Use TypeScript for type safety
- Follow Vue 3 Composition API patterns
- Use Tailwind CSS for styling
- Write meaningful component names
- Include prop types and documentation

```vue
<script setup lang="ts">
interface Props {
  /** The blog post to display */
  post: BlogPost
  /** Whether to show the full content */
  showFullContent?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showFullContent: false
})
</script>
```

### Git Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write code following the style guidelines
   - Add tests for new functionality
   - Update documentation as needed

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new blog filtering feature"
   ```

4. **Push your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

### Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

**Types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

**Examples:**
```
feat(blog): add search functionality
fix(auth): resolve JWT token expiration issue
docs: update API documentation
test(blog): add tests for blog creation
```

## 🔄 Pull Request Process

1. **Ensure your code follows the guidelines**
   - Run linting: `npm run lint`
   - Run tests: `npm test`
   - Check formatting: `npm run format`

2. **Update documentation**
   - Update README if needed
   - Add inline code documentation
   - Update API documentation

3. **Create a pull request**
   - Use a clear and descriptive title
   - Fill out the pull request template
   - Link related issues
   - Add screenshots for UI changes

4. **Respond to feedback**
   - Address reviewer comments
   - Update your branch as needed
   - Be responsive to feedback

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] New tests added for new functionality
- [ ] Manual testing completed

## Screenshots (if applicable)
[Add screenshots here]

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Tests added/updated
```

## 🐛 Issue Guidelines

### Bug Reports

When reporting bugs, please include:

- **Environment**: OS, Node.js version, browser
- **Steps to reproduce**: Clear steps to reproduce the issue
- **Expected behavior**: What you expected to happen
- **Actual behavior**: What actually happened
- **Screenshots**: If applicable
- **Additional context**: Any other relevant information

### Feature Requests

When requesting features, please include:

- **Problem**: What problem does this solve?
- **Solution**: Describe your proposed solution
- **Alternatives**: Any alternative solutions considered
- **Additional context**: Any other relevant information

## 🧪 Testing

### Writing Tests

- **Backend**: Use Jest and Supertest
- **Frontend**: Use Vitest and Vue Test Utils
- **Coverage**: Aim for >80% code coverage
- **Integration**: Include integration tests for critical paths

### Running Tests

```bash
# Run all tests
npm test

# Run backend tests
npm run test:backend

# Run frontend tests
npm run test:frontend

# Run tests with coverage
npm run test:coverage
```

### Test Guidelines

1. **Unit Tests**: Test individual functions and components
2. **Integration Tests**: Test API endpoints and user workflows
3. **E2E Tests**: Test complete user journeys
4. **Performance Tests**: Test performance-critical features

## 📚 Documentation

### Types of Documentation

1. **Code Documentation**: Inline comments and JSDoc
2. **API Documentation**: OpenAPI/Swagger specifications
3. **User Documentation**: README and usage guides
4. **Developer Documentation**: Setup and contribution guides

### Documentation Standards

- Use clear and concise language
- Include code examples
- Keep documentation up to date
- Use proper markdown formatting

## 🎯 Development Best Practices

### Security

- Never commit secrets or credentials
- Validate all user inputs
- Use parameterized queries
- Follow OWASP guidelines
- Regular security audits

### Performance

- Optimize database queries
- Use appropriate caching strategies
- Minimize bundle sizes
- Optimize images and assets
- Monitor performance metrics

### Accessibility

- Follow WCAG guidelines
- Use semantic HTML
- Provide alternative text for images
- Ensure keyboard navigation
- Test with screen readers

## 🚀 Release Process

1. **Version bumping**: Use semantic versioning
2. **Changelog**: Update CHANGELOG.md
3. **Testing**: Ensure all tests pass
4. **Documentation**: Update documentation
5. **Release notes**: Write comprehensive release notes

## 📞 Getting Help

- **Discord**: Join our Discord server
- **Issues**: Create a GitHub issue
- **Email**: Contact maintainers directly
- **Documentation**: Check existing documentation

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Annual contributor highlights
- Social media shoutouts

Thank you for contributing to Project Management Blog! 🎉
