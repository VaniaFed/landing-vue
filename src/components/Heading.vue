<script>
export default {
  props: {
    size: {
      type: String,
      default: "h1",
    },
    variant: {
      type: String,
      default: "medium_40",
    },
  },
};
</script>

<template>
  <h1 v-if="size === 'h1'" :class="[$style[variant]]">
    <slot></slot>
  </h1>
  <h2 v-else-if="size === 'h2'" :class="[$style[variant]]">
    <slot></slot>
  </h2>
  <h3 v-else-if="size === 'h3'" :class="[$style[variant]]">
    <slot></slot>
  </h3>
  <h4 v-else-if="size === 'h4'" :class="[$style[variant]]">
    <slot></slot>
  </h4>
  <h5 v-else-if="size === 'h5'" :class="[$style[variant]]">
    <slot></slot>
  </h5>
  <h6 v-else-if="size === 'h6'" :class="[$style[variant]]">
    <slot></slot>
  </h6>
</template>

<style module lang="scss">
.great {
  font-size: 70px;
  font-weight: 600;
  line-height: 70px;
}

.medium_40 {
  font-size: 40px;
  font-weight: 500;
  line-height: 44px;
}

.medium_32 {
  font-size: 32px;
  font-weight: 500;
  line-height: 38.4px;
}

.medium_24 {
  font-size: 24px;
  font-weight: 500;
  line-height: 28.8px;
}
</style>
