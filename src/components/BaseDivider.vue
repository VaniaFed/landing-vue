<script>
export default {
  props: {
    direction: {
      type: String,
      default: "vert",
    },
  },
  components: {},
};
</script>

<template>
  <div class="divider"></div>
</template>

<style scoped lang="scss">
.divider {
  display: flex;
  align-items: center;
  width: 2px;
  height: 12px;
  margin: 0 20px;
  background: $gray-15;
  border-radius: 10px;

  @include media-tablet {
    margin: 0 10px;
  }
}
</style>
