<script>
export default {
  props: {},
};
</script>

<template>
  <a v-bind="$attrs" class="link">
    <slot />
  </a>
</template>

<style scoped lang="scss">
.link {
  position: relative;
  display: inline-block;
  font: inherit;
  background: transparent;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 1px;
    background: $gradient-green;
  }

  &:hover {
    background: $gradient-green;
  }
}
</style>
