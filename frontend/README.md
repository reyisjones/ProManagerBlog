# Project Management Blog - Frontend

Modern Vue.js 3 frontend application for the Project Management Blog platform, built with Vite, Tailwind CSS, and TypeScript.

## 🚀 Features

- **Vue 3 Composition API**: Modern Vue.js development
- **TypeScript Support**: Type-safe development
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **State Management**: Pinia for efficient state management
- **Routing**: Vue Router 4 with route guards
- **Testing**: Comprehensive test suite with Vitest
- **Performance**: Code splitting and lazy loading
- **PWA Ready**: Progressive Web App capabilities
- **Accessibility**: WCAG compliant components

## 📁 Project Structure

```
frontend/
├── public/                   # Static assets
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/           # Reusable Vue components
│   │   ├── common/          # Common UI components
│   │   ├── blog/            # Blog-specific components
│   │   ├── auth/            # Authentication components
│   │   ├── tools/           # Productivity tools components
│   │   └── charts/          # Chart components
│   ├── views/               # Page components
│   │   ├── Home.vue
│   │   ├── BlogList.vue
│   │   ├── BlogDetail.vue
│   │   ├── Dashboard.vue
│   │   └── Tools.vue
│   ├── router/              # Vue Router configuration
│   │   ├── index.ts
│   │   └── guards.ts
│   ├── stores/              # Pinia stores
│   │   ├── auth.ts
│   │   ├── blog.ts
│   │   ├── comments.ts
│   │   └── app.ts
│   ├── composables/         # Vue composables
│   │   ├── useApi.ts
│   │   ├── useAuth.ts
│   │   └── useBlog.ts
│   ├── utils/               # Utility functions
│   │   ├── api.ts
│   │   ├── helpers.ts
│   │   ├── constants.ts
│   │   └── validators.ts
│   ├── assets/              # Assets (images, styles)
│   │   ├── css/
│   │   ├── images/
│   │   └── icons/
│   ├── types/               # TypeScript type definitions
│   │   ├── api.ts
│   │   ├── blog.ts
│   │   └── user.ts
│   ├── App.vue             # Root component
│   └── main.ts             # Application entry point
├── tests/                   # Test files
│   ├── unit/               # Unit tests
│   ├── integration/        # Integration tests
│   └── e2e/               # End-to-end tests
├── .storybook/             # Storybook configuration
├── package.json
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── vitest.config.ts        # Vitest configuration
└── README.md
```

## 🛠️ Tech Stack

### Core

- **Vue.js 3**: Progressive JavaScript framework
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and dev server
- **Vue Router 4**: Official router for Vue.js
- **Pinia**: State management library

### UI & Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Headless UI**: Unstyled, accessible UI components
- **Heroicons**: Beautiful hand-crafted SVG icons
- **Chart.js**: Simple yet flexible charting library

### Development Tools

- **Vitest**: Fast unit test framework
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Storybook**: Component development environment

### Features

- **Axios**: HTTP client for API calls
- **VueUse**: Collection of essential Vue Composition Utilities
- **Day.js**: Lightweight date library
- **Vue Toastification**: Toast notifications
- **Prism.js**: Syntax highlighting
- **Markdown-it**: Markdown parser
- **DOMPurify**: HTML sanitization

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Navigate to frontend directory**

   ```bash
   cd frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Configuration**

   ```bash
   cp .env.example .env.local
   ```

   Update the `.env.local` file:

   ```env
   VITE_API_BASE_URL=http://localhost:5000/api/v1
   VITE_APP_TITLE=Project Management Blog
   VITE_APP_DESCRIPTION=Your source for project management insights
   VITE_ENABLE_ANALYTICS=false
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`

## 🎨 UI Components

### Common Components

```vue
<!-- Button Component -->
<AppButton
  variant="primary"
  size="lg"
  :loading="isLoading"
  @click="handleClick"
>
  Save Post
</AppButton>

<!-- Card Component -->
<AppCard class="p-6">
  <template #header>
    <h3>Blog Post Title</h3>
  </template>
  <p>Blog post content...</p>
  <template #footer>
    <AppButton variant="outline">Read More</AppButton>
  </template>
</AppCard>
```

### Blog Components

```vue
<!-- Blog Card -->
<BlogCard
  :post="post"
  :show-excerpt="true"
  @like="handleLike"
  @share="handleShare"
/>

<!-- Comment Thread -->
<CommentThread
  :comments="comments"
  :can-reply="isAuthenticated"
  @add-comment="handleAddComment"
/>
```

## 🧪 Testing

### Run Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

### Test Structure

```typescript
// Example component test
import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import BlogCard from "@/components/blog/BlogCard.vue";

describe("BlogCard", () => {
  it("renders blog post correctly", () => {
    const post = {
      title: "Test Post",
      excerpt: "Test excerpt",
      author: "Test Author",
    };

    const wrapper = mount(BlogCard, {
      props: { post },
    });

    expect(wrapper.text()).toContain("Test Post");
    expect(wrapper.text()).toContain("Test excerpt");
  });
});
```

## 🎯 State Management

### Pinia Store Example

```typescript
// stores/blog.ts
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Blog } from "@/types/blog";

export const useBlogStore = defineStore("blog", () => {
  const blogs = ref<Blog[]>([]);
  const currentBlog = ref<Blog | null>(null);
  const loading = ref(false);

  const publishedBlogs = computed(() =>
    blogs.value.filter((blog) => blog.published),
  );

  const fetchBlogs = async () => {
    loading.value = true;
    try {
      const response = await api.get("/blogs");
      blogs.value = response.data.data;
    } finally {
      loading.value = false;
    }
  };

  return {
    blogs,
    currentBlog,
    loading,
    publishedBlogs,
    fetchBlogs,
  };
});
```

## 🚀 Performance Optimization

### Code Splitting

```typescript
// router/index.ts
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/blog/:slug",
    name: "BlogDetail",
    component: () => import("@/views/BlogDetail.vue"),
  },
];
```

### Lazy Loading

```vue
<template>
  <Suspense>
    <template #default>
      <LazyComponent />
    </template>
    <template #fallback>
      <LoadingSpinner />
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const LazyComponent = defineAsyncComponent(
  () => import("@/components/HeavyComponent.vue"),
);
</script>
```

## 🔒 Authentication

### Route Guards

```typescript
// router/guards.ts
import { useAuthStore } from "@/stores/auth";

export const requireAuth = (to, from, next) => {
  const authStore = useAuthStore();

  if (!authStore.isAuthenticated) {
    next("/login");
  } else {
    next();
  }
};

export const requireAdmin = (to, from, next) => {
  const authStore = useAuthStore();

  if (!authStore.isAdmin) {
    next("/unauthorized");
  } else {
    next();
  }
};
```

## 📱 Responsive Design

### Tailwind CSS Classes

```vue
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
    >
      <!-- Card content -->
    </div>
  </div>
</template>
```

### Mobile-First Approach

```css
/* Base styles for mobile */
.nav-menu {
  @apply flex flex-col space-y-2;
}

/* Tablet and up */
@media (min-width: 768px) {
  .nav-menu {
    @apply flex-row space-y-0 space-x-4;
  }
}
```

## 🎨 Theming

### CSS Custom Properties

```css
:root {
  --color-primary: #3b82f6;
  --color-secondary: #64748b;
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
}

[data-theme="dark"] {
  --color-primary: #60a5fa;
  --color-secondary: #94a3b8;
}
```

## 📊 Analytics & Monitoring

### Performance Monitoring

```typescript
// utils/performance.ts
export const trackPageView = (pageName: string) => {
  if (import.meta.env.VITE_ENABLE_ANALYTICS === "true") {
    // Analytics tracking code
  }
};

export const trackEvent = (eventName: string, properties?: object) => {
  if (import.meta.env.VITE_ENABLE_ANALYTICS === "true") {
    // Event tracking code
  }
};
```

## 🔧 Build & Deployment

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Docker Build

```bash
# Build Docker image
npm run docker:build

# Run Docker container
npm run docker:run
```

### Bundle Analysis

```bash
# Analyze bundle size
npm run analyze
```

## 🧩 Storybook

### Component Documentation

```bash
# Start Storybook
npm run storybook

# Build Storybook
npm run build-storybook
```

### Story Example

```typescript
// stories/Button.stories.ts
import type { Meta, StoryObj } from "@storybook/vue3";
import AppButton from "@/components/common/AppButton.vue";

const meta: Meta<typeof AppButton> = {
  title: "Common/Button",
  component: AppButton,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};
```

## 🤝 Contributing

1. Follow the existing code style
2. Write tests for new features
3. Update documentation
4. Use conventional commits
5. Ensure all tests pass

### Code Style

- Use TypeScript for type safety
- Follow Vue 3 Composition API patterns
- Use Tailwind CSS for styling
- Write meaningful component names

## 📝 License

This project is licensed under the MIT License.
