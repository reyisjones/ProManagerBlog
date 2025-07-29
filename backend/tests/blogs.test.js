const request = require('supertest');
const app = require('../server');
const Blog = require('../src/models/Blog');
const User = require('../src/models/User');

describe('Blog API', () => {
  let authToken;
  let userId;

  beforeEach(async () => {
    // Create a test user and get auth token
    const userData = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
      role: 'admin'
    };

    const userResponse = await request(app)
      .post('/api/v1/auth/register')
      .send(userData);

    authToken = userResponse.body.token;
    userId = userResponse.body.data.user._id;
  });

  describe('GET /api/v1/blogs', () => {
    beforeEach(async () => {
      // Create test blogs
      await Blog.create([
        {
          title: 'Test Blog 1',
          content: 'This is test content for blog 1',
          category: 'basics',
          author: userId,
          published: true,
          publishedAt: new Date()
        },
        {
          title: 'Test Blog 2',
          content: 'This is test content for blog 2',
          category: 'methodologies',
          author: userId,
          published: true,
          publishedAt: new Date()
        },
        {
          title: 'Draft Blog',
          content: 'This is draft content',
          category: 'tools',
          author: userId,
          published: false
        }
      ]);
    });

    it('should return all published blogs', async () => {
      const response = await request(app)
        .get('/api/v1/blogs')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveLength(2);
      expect(response.body.data[0]).toHaveProperty('title');
      expect(response.body.data[0]).toHaveProperty('content');
      expect(response.body.data[0].published).toBe(true);
    });

    it('should filter blogs by category', async () => {
      const response = await request(app)
        .get('/api/v1/blogs?category=basics')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveLength(1);
      expect(response.body.data[0].category).toBe('basics');
    });

    it('should search blogs by title', async () => {
      const response = await request(app)
        .get('/api/v1/blogs?search=Test Blog 1')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveLength(1);
      expect(response.body.data[0].title).toBe('Test Blog 1');
    });

    it('should paginate results', async () => {
      const response = await request(app)
        .get('/api/v1/blogs?page=1&limit=1')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveLength(1);
      expect(response.body.pagination).toHaveProperty('page', 1);
      expect(response.body.pagination).toHaveProperty('limit', 1);
    });
  });

  describe('GET /api/v1/blogs/:id', () => {
    let blogId;

    beforeEach(async () => {
      const blog = await Blog.create({
        title: 'Single Blog Test',
        content: 'This is content for single blog test',
        category: 'basics',
        author: userId,
        published: true,
        publishedAt: new Date()
      });
      blogId = blog._id;
    });

    it('should return a single blog by ID', async () => {
      const response = await request(app)
        .get(`/api/v1/blogs/${blogId}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.title).toBe('Single Blog Test');
      expect(response.body.data.views).toBe(1); // Should increment views
    });

    it('should return 404 for non-existent blog', async () => {
      const fakeId = '507f1f77bcf86cd799439011';
      const response = await request(app)
        .get(`/api/v1/blogs/${fakeId}`)
        .expect(404);

      expect(response.body.success).toBe(false);
    });

    it('should return 400 for invalid blog ID', async () => {
      const response = await request(app)
        .get('/api/v1/blogs/invalid-id')
        .expect(400);

      expect(response.body.success).toBe(false);
    });
  });

  describe('POST /api/v1/blogs', () => {
    it('should create a new blog post', async () => {
      const blogData = {
        title: 'New Test Blog',
        content: 'This is content for the new test blog',
        category: 'methodologies',
        tags: ['test', 'new'],
        published: true
      };

      const response = await request(app)
        .post('/api/v1/blogs')
        .set('Authorization', `Bearer ${authToken}`)
        .send(blogData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.title).toBe(blogData.title);
      expect(response.body.data.slug).toBe('new-test-blog');
      expect(response.body.data.author).toBe(userId);
    });

    it('should require authentication', async () => {
      const blogData = {
        title: 'Unauthorized Blog',
        content: 'This should not be created',
        category: 'basics'
      };

      const response = await request(app)
        .post('/api/v1/blogs')
        .send(blogData)
        .expect(401);

      expect(response.body.success).toBe(false);
    });

    it('should validate required fields', async () => {
      const invalidBlogData = {
        content: 'Missing title and category'
      };

      const response = await request(app)
        .post('/api/v1/blogs')
        .set('Authorization', `Bearer ${authToken}`)
        .send(invalidBlogData)
        .expect(400);

      expect(response.body.success).toBe(false);
    });
  });

  describe('PUT /api/v1/blogs/:id', () => {
    let blogId;

    beforeEach(async () => {
      const blog = await Blog.create({
        title: 'Blog to Update',
        content: 'Original content',
        category: 'basics',
        author: userId,
        published: false
      });
      blogId = blog._id;
    });

    it('should update an existing blog post', async () => {
      const updateData = {
        title: 'Updated Blog Title',
        content: 'Updated content',
        published: true
      };

      const response = await request(app)
        .put(`/api/v1/blogs/${blogId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send(updateData)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.title).toBe(updateData.title);
      expect(response.body.data.published).toBe(true);
    });

    it('should not allow unauthorized updates', async () => {
      const updateData = {
        title: 'Unauthorized Update'
      };

      const response = await request(app)
        .put(`/api/v1/blogs/${blogId}`)
        .send(updateData)
        .expect(401);

      expect(response.body.success).toBe(false);
    });
  });

  describe('DELETE /api/v1/blogs/:id', () => {
    let blogId;

    beforeEach(async () => {
      const blog = await Blog.create({
        title: 'Blog to Delete',
        content: 'This blog will be deleted',
        category: 'basics',
        author: userId,
        published: true
      });
      blogId = blog._id;
    });

    it('should delete an existing blog post', async () => {
      const response = await request(app)
        .delete(`/api/v1/blogs/${blogId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body.success).toBe(true);

      // Verify blog is deleted
      const deletedBlog = await Blog.findById(blogId);
      expect(deletedBlog).toBeNull();
    });

    it('should require authentication for deletion', async () => {
      const response = await request(app)
        .delete(`/api/v1/blogs/${blogId}`)
        .expect(401);

      expect(response.body.success).toBe(false);
    });
  });
});
