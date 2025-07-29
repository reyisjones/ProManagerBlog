const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [200, 'Title cannot be more than 200 characters']
  },
  content: {
    type: String,
    required: [true, 'Please add content'],
    minlength: [10, 'Content must be at least 10 characters']
  },
  excerpt: {
    type: String,
    maxlength: [300, 'Excerpt cannot be more than 300 characters']
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    index: true
  },
  tags: [{
    type: String,
    lowercase: true,
    trim: true,
    index: true
  }],
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: ['basics', 'methodologies', 'tools', 'productivity', 'case-studies'],
    lowercase: true,
    index: true
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  featured: {
    type: Boolean,
    default: false,
    index: true
  },
  published: {
    type: Boolean,
    default: false,
    index: true
  },
  publishedAt: {
    type: Date,
    index: true
  },
  featuredImage: {
    type: String,
    default: 'no-photo.jpg'
  },
  readTime: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0,
    index: true
  },
  likes: [{
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  meta: {
    title: {
      type: String,
      maxlength: [60, 'Meta title cannot be more than 60 characters']
    },
    description: {
      type: String,
      maxlength: [160, 'Meta description cannot be more than 160 characters']
    },
    keywords: [String]
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Create indexes for better performance
blogSchema.index({ title: 'text', content: 'text', tags: 'text' });
blogSchema.index({ createdAt: -1 });
blogSchema.index({ published: 1, publishedAt: -1 });
blogSchema.index({ category: 1, published: 1 });
blogSchema.index({ tags: 1, published: 1 });

// Virtual for comments count
blogSchema.virtual('commentsCount', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'blog',
  count: true
});

// Virtual for likes count
blogSchema.virtual('likesCount').get(function() {
  return this.likes ? this.likes.length : 0;
});

// Pre-save middleware to generate slug
blogSchema.pre('save', function(next) {
  if (this.isModified('title')) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .trim('-'); // Remove leading/trailing hyphens
  }
  
  // Calculate read time (average 200 words per minute)
  if (this.isModified('content')) {
    const wordCount = this.content.split(/\s+/).length;
    this.readTime = Math.ceil(wordCount / 200);
  }
  
  // Generate excerpt if not provided
  if (this.isModified('content') && !this.excerpt) {
    this.excerpt = this.content.substring(0, 200) + '...';
  }
  
  // Set published date when publishing
  if (this.isModified('published') && this.published && !this.publishedAt) {
    this.publishedAt = new Date();
  }
  
  next();
});

// Static method to get published blogs
blogSchema.statics.getPublished = function() {
  return this.find({ published: true }).sort({ publishedAt: -1 });
};

// Static method to search blogs
blogSchema.statics.search = function(query) {
  return this.find({
    $and: [
      { published: true },
      {
        $or: [
          { title: { $regex: query, $options: 'i' } },
          { content: { $regex: query, $options: 'i' } },
          { tags: { $in: [new RegExp(query, 'i')] } }
        ]
      }
    ]
  }).sort({ publishedAt: -1 });
};

// Instance method to increment views
blogSchema.methods.incrementViews = function() {
  this.views += 1;
  return this.save();
};

// Instance method to toggle like
blogSchema.methods.toggleLike = function(userId) {
  const existingLike = this.likes.find(like => like.user.toString() === userId.toString());
  
  if (existingLike) {
    this.likes = this.likes.filter(like => like.user.toString() !== userId.toString());
  } else {
    this.likes.push({ user: userId });
  }
  
  return this.save();
};

module.exports = mongoose.model('Blog', blogSchema);
