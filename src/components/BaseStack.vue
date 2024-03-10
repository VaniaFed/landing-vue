<script>
export default {
  props: {
    asRow: {
      type: Boolean,
      default: false,
    },
    gap: {
      type: String,
      default: "20",
    },
  },
};
</script>

<template>
  <div :class="['stack', asRow && 'stack_row']" :style="{ gap: `${gap}px` }">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.stack {
  display: flex;
  flex-direction: column;
}

.stack_row {
  flex-direction: row;
}
</style>
