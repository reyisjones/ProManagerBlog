import { defineComponent, h, VNode } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    return (): VNode =>
      h('div', { class: 'content-wrapper', style: { minHeight: '100vh' } }, [
        h('div', { class: 'main-panel' }, [
          h('div', { class: 'content' }, [
            h('div', { class: 'row justify-content-center' }, [
              h('div', { class: 'col-lg-8 col-md-10' }, [
                h('div', { class: 'card card-user', style: { marginTop: '2rem' } }, [
                  h('div', { class: 'card-body text-center' }, [
                    h('h1', { class: 'card-title mb-2' }, 'Welcome to the Project Management Blog'),
                    h('p', { class: 'mb-3' }, 'Explore articles on productivity, AI tools, DevOps, and more.'),
                    h('router-link', { to: '/blog/sample-article', class: 'btn btn-primary' }, 'Read: Boosting Development Productivity with AI & Modern Tooling'),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]);
  },
});
