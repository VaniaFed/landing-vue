<script>
export default {
  props: {},
  components: {},
};
</script>

<template>
  <button class="icon-button">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.icon-button {
  padding: 12px;
  cursor: pointer;
  border-radius: 50px;

  &:active {
    background: $gray-3;
  }
}
</style>
