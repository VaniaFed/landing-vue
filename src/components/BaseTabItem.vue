<script>
export default {
  props: {
    active: Boolean,
  },
  components: {},
};
</script>

<template>
  <div :class="['base-tab-item', active && 'base-tab-item_active']">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.base-tab-item {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  color: $gray-0;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 120%;

  @include media-tablet {
    font-size: 12px;
  }

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    width: 20px;
    height: 2px;
    margin: 0 auto;
  }

  &_active {
    color: $black;
  }

  &_active::after {
    background: linear-gradient(90deg, #16ff00 0%, #4dffc9 99.91%);
  }

  &:not(.base-tab-item_active) {
    &:hover {
      color: $black;
    }

    &:hover::after {
      background: $black;
    }
  }
}
</style>
