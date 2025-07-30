import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import MarkdownIt from 'markdown-it';
import prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import '@/assets/black-dashboard.css'; // Assumes Black Dashboard CSS is imported globally

// Metadata extracted from Prompt2.md
const articleMeta = {
  title: 'Boosting Development Productivity with AI & Modern Tooling',
  author: 'Admin',
  tags: ['productivity', 'AI tools', 'pnpm', 'devops', 'automation'],
  createdAt: '2025-07-29T10:00:00Z',
};

// Markdown content extracted from Prompt2.md (with escaped backticks and code blocks)
const markdownContent = `# Boosting Development Productivity with AI & Modern Tooling

In today’s fast-paced tech environment, development teams must embrace smarter tools and automation to deliver high-quality software faster. Below are key strategies and tools that project managers and developers can adopt today.

---

## 🧠 Use AI-Powered Coding Assistants

AI tools like **GitHub Copilot**, **Tabnine**, and **CodeWhisperer** provide autocomplete, doc generation, and unit test suggestions. They:
- Reduce boilerplate writing time
- Help junior developers follow best practices
- Accelerate prototyping and refactoring

> _“Copilot helps me turn TODOs into code in seconds.”_ — Senior Developer, Microsoft

---

## ⚙️ Switch to PNPM for Fast & Reliable Package Management

Traditional tools like \`npm\` or \`yarn\` are familiar but can be slow and inefficient in large monorepos.

**Why PNPM?**
- Faster installs using a content-addressable store
- Better disk usage (single cache for all projects)
- Immutable installs reduce production bugs

\`\`\`bash
# Install PNPM globally
npm install -g pnpm

# Convert your project
pnpm init
\`\`\`

---

## ⏱️ Automate Repetitive Tasks

Use tools like:

* **Husky** + **Lint-Staged**: Run formatters and linters pre-commit
* **ESLint + Prettier**: Enforce code quality
* **Nx**: Smart build and caching for monorepos
* **Vitest / Jest**: Blazing fast test runners

---

## 📊 Integrate Dashboards and CI/CD

Set up:

* GitHub Actions or Azure Pipelines
* Project Management dashboards (Trello, Jira, or GitHub Projects)
* Slack or Teams notifications for deployments

---

## 🧩 Suggested Tool Stack

| Area         | Tool                    |
| ------------ | ----------------------- |
| Code Assist  | GitHub Copilot, Tabnine |
| Package Mgmt | PNPM                    |
| CI/CD        | GitHub Actions          |
| Testing      | Vitest, Playwright      |
| Lint/Format  | ESLint, Prettier        |
| Project Mgmt | Linear, Jira, Trello    |
| Docs         | Docusaurus, MkDocs      |

---

## 🎯 Final Tips for Teams

* 🧪 Run tests early and often
* 📦 Use containerization (Docker) for parity
* 📂 Maintain clean Git history with conventional commits
* 🔁 Automate dependency upgrades using Renovate or Dependabot

Modern development is no longer about just writing code — it’s about creating efficient, maintainable ecosystems. Start small, and evolve your tooling with your team’s needs.
`;

export default defineComponent({
  name: 'BlogArticle',
  setup() {
    const route = useRoute();
    const html = ref('');
    const md = new MarkdownIt({
      html: true,
      linkify: true,
      highlight: (str, lang) => {
        if (lang && prism.languages[lang]) {
          try {
            return `<pre class="language-${lang}"><code>${prism.highlight(str, prism.languages[lang], lang)}</code></pre>`;
          } catch (__) {}
        }
        return `<pre class="language-plain"><code>${md.utils.escapeHtml(str)}</code></pre>`;
      },
    });

    onMounted(() => {
      html.value = md.render(markdownContent);
    });

    return () => (
      <div class="content-wrapper" style="min-height:100vh;">
        <div class="main-panel">
          <div class="content">
            <div class="row justify-content-center">
              <div class="col-lg-8 col-md-10">
                <div class="card card-user" style="margin-top:2rem;">
                  <div class="card-body">
                    <h1 class="card-title text-center mb-2">{articleMeta.title}</h1>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                      <span class="text-muted">By {articleMeta.author}</span>
                      <span class="badge bg-info">{new Date(articleMeta.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div class="mb-2">
                      {articleMeta.tags.map(tag => (
                        <span class="badge bg-secondary me-1" key={tag}>{tag}</span>
                      ))}
                    </div>
                    <div class="markdown-body" v-html={html.value}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
});
