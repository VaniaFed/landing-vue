<script>
export default {
  props: {
    size: {
      type: String,
      default: "18",
    },
    weight: {
      type: String,
      default: "400",
    },
  },
};
</script>

<template>
  <p :class="[`paragraph_${size}`, `paragraph_${weight}`]">
    <slot />
  </p>
</template>

<style scoped lang="scss"></style>
