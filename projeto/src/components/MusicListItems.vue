<template>
  <div class="musicList">
      <article class="musicItem" v-for="item in items" :key="item.id"> {{item.name}}
      </article>
  </div>
</template>

<script lang="ts">

export default {
  name: 'MusicListItems',
  props: {
    items: Array
  }
}
</script>

<style scoped>
    .musicList .musicItem {

    }
</style>