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
  <p :class="[$style['paragraph_' + size], $style['paragraph_' + weight]]">
    <slot></slot>
  </p>
</template>

<style module lang="scss">
.paragraph_400 {
  font-weight: 400;
}

.paragraph_500 {
  font-weight: 500;
}

.paragraph_14 {
  font-size: 14px;
  line-height: 16.8px;
}

.paragraph_16 {
  font-size: 16px;
  line-height: 22.4px;
}

.paragraph_18 {
  font-size: 18px;
  line-height: 21.6px;
}
</style>
