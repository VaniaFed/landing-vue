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
    <slot />
  </p>
</template>

<style module lang="scss">
@mixin paragraph_14 {
  font-size: 14px;
  line-height: 16.8px;
}

@mixin paragraph_16 {
  font-size: 16px;
  line-height: 22.4px;
}

.paragraph_400 {
  font-weight: 400;
}

.paragraph_500 {
  font-weight: 500;
}

.paragraph_14 {
  @include paragraph_14;
}

.paragraph_16 {
  @include paragraph_16;

  @include media-tablet {
    @include paragraph_14;
  }
}

.paragraph_18 {
  font-size: 18px;
  line-height: 21.6px;

  @include media-tablet {
    @include paragraph_16;
  }

  @include media-mobile {
    @include paragraph_14;
  }
}
</style>
