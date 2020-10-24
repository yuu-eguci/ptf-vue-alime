<template>
  <div id="locale-parent">
    <router-view />
  </div>
</template>

<script>
// router の親 component としてのみ使用される空っぽの component です。
// 詳細は router.js に記載しました。
export default {
  name: 'LocaleParent',
}
</script>

<style>
</style>
