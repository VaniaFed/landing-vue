<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
$padding: 32px;
$padding-mobile: 20px;

.container {
  max-width: calc(1240px - $padding);
  width: 100%;
  margin: 0 auto;
  padding: 0 $padding;

  @include media-mobile {
    padding: 0 $padding-mobile;
  }
}
</style>
