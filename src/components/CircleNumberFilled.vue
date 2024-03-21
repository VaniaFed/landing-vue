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
  <div class="circle-number-filled">
    <span class="circle-number-filled__title">{{ number }}</span>
  </div>
</template>

<style scoped lang="scss">
.circle-number-filled {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: $green;
  border-radius: 60px;

  @include media-tablet {
    width: 40px;
    height: 40px;
  }

  @include media-mobile {
    width: 30px;
    height: 30px;
  }

  &__title {
    font-size: 36px;
    font-weight: 500;
    line-height: 110%;

    @include media-tablet {
      font-size: 24px;
    }

    @include media-mobile {
      font-size: 16px;
      line-height: 120%;
    }
  }
}
</style>
