<template>
  <div id="load-external-script">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LoadExternalScript',

  props: {
    url: { type: String, required: true },
  },

  mounted () {
    const script = document.createElement('script');
    script.setAttribute('src', this.url);
    this.$el.append(script);
    },
})
</script>

<style>
</style>
