<template>
  <div class="content-wrapper" style="min-height:100vh;">
    <div class="main-panel">
      <div class="content">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10">
            <div class="card card-user" style="margin-top:2rem;">
              <div class="card-body text-center">
                <h1 class="card-title mb-2">Welcome to the Project Management Blog</h1>
                <p class="mb-3">Explore articles on productivity, AI tools, DevOps, and more.</p>
                <router-link to="/blog/sample-article" class="btn btn-primary">
                  Read: Boosting Development Productivity with AI & Modern Tooling
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No script logic needed for this simple page
</script>

<style scoped>
.content-wrapper {
  min-height: 100vh;
}
.card-user {
  margin-top: 2rem;
}
</style>
