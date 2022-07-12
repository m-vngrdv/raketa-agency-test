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
  @include respond-to('md') {
    flex-direction: column;
  }
}

.container {
  width: 100%;
  max-width: 900px;
  padding: 40px 68px 60px;
  @include respond-to('md') {
    max-width: 920px;
    padding: 40px 20px 60px;
  }
  @include respond-to('sm') {
    max-width: 100%;
    padding: 20px 15px;
  }
}
</style>
