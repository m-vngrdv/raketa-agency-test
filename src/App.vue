<template>
  <div id="app">
    <div class="content">
      <the-nav />

      <div class="container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import TheNav from '@/components/TheNav'

export default {
  components: {
    TheNav,
  },
}
</script>

<style lang="scss">
.content {
  display: flex;
}

.container {
  width: 100%;
  max-width: 900px;
  padding: 40px 68px;
}
</style>
