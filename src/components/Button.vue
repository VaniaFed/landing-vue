<script>
export default {
  props: { variant: String },
};
</script>

<template>
  <button :class="[$style.button, $style.variant]" v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<style module lang="scss">
.button {
  padding: 8px 21px;
  text-align: center;
  background: $white;
  color: $black;
  box-shadow: $shadow;
  border-radius: 3px;
  user-select: none;
  font: 500 16px/24px "TT Firs Neue";
  cursor: pointer;

  &:hover {
    box-shadow: $shadow-hover;
  }

  @include media-tablet {
    font-size: 14px;
    line-height: 16.8px;
  }
}

.primary {
  background: $gradient-green;

  &:hover {
    background: $aqua;
  }

  &:active {
    background: $green;
  }
}
</style>
