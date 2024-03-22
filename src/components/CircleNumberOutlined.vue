<script>
export default {
  props: {
    number: {
      type: Number,
      required: true,
    },
  },
  components: {},
};
</script>

<template>
  <div class="circle-number-outlined">
    <span class="circle-number-outlined__title">{{ number }}</span>
  </div>
</template>

<style scoped lang="scss">
.circle-number-outlined {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid $green;
  border-radius: 60px;

  @include media-mobile {
    width: 43px;
    height: 43px;
  }

  &__title {
    font-size: 36px;
    font-weight: 500;

    @include media-mobile {
      font-size: 30px;
    }
  }
}
</style>
