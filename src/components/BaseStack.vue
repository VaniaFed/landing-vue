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
    spaceBetween: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div
    :class="{
      stack: true,
      stack_row: asRow,
      'stack_space-between': spaceBetween,
    }"
    :style="{ gap: `${gap}px` }"
  >
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

.stack_space-between {
  justify-content: space-between;
}
</style>
