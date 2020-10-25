<template>
  <div id="load-external-script">
  </div>
</template>

<script>
export default {
  name: 'LoadExternalScript',

  props: ['url'],

  mounted () {
    const script = document.createElement('script');
    script.setAttribute('src', this.url);
    document.getElementById('load-external-script').append(script);
    },
}
</script>

<style>
</style>
