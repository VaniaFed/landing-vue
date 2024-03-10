<script>
export default {
  props: {
    level: {
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

<style scoped lang="scss">
.great {
  font-size: 70px;
  font-weight: 600;
  line-height: 70px;

  @include media-tablet {
    font-size: 40px;
    line-height: 40px;
  }

  @include media-mobile-large {
    font-size: 30px;
    line-height: 30px;
  }
}

.medium_40 {
  font-size: 40px;
  font-weight: 500;
  line-height: 44px;

  @include media-tablet {
    font-size: 30px;
    line-height: 33px;
  }
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
