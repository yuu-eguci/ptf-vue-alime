<template>
  <div id="locale-parent">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

// router の親 component としてのみ使用される空っぽの component です。
// 詳細は router.ts に記載しました。
export default Vue.extend({
  name: 'LocaleParent',
})
</script>

<style>
</style>
