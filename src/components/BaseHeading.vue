<script>
export default {
  props: {
    level: {
      type: String,
      default: "h2",
    },
    variant: {
      type: String,
      default: "heading_40",
    },
  },
};
</script>

<template>
  <h1 v-if="level === 'h1'" :class="variant">
    <slot />
  </h1>
  <h2 v-else-if="level === 'h2'" :class="variant">
    <slot />
  </h2>
  <h3 v-else-if="level === 'h3'" :class="variant">
    <slot />
  </h3>
  <h4 v-else-if="level === 'h4'" :class="variant">
    <slot />
  </h4>
  <h5 v-else-if="level === 'h5'" :class="variant">
    <slot />
  </h5>
  <h6 v-else-if="level === 'h6'" :class="variant">
    <slot />
  </h6>
</template>

<style scoped lang="scss"></style>
