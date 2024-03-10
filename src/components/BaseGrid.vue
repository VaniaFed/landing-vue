<script>
export default {
  props: {},
};
</script>

<template>
  <div class="base-grid">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.base-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>
