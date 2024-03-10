<script>
export default {};
</script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
$padding: 80px;
$padding-tablet: 32px;
$padding-mobile: 20px;

.container {
  max-width: calc($desktop-large-breakpoint - ($padding / 2));
  width: 100%;
  margin: 0 auto;
  padding: 0 $padding;

  @include media-tablet {
    padding: 0 $padding-tablet;
  }

  @include media-mobile-large {
    padding: 0 $padding-mobile;
  }
}
</style>
