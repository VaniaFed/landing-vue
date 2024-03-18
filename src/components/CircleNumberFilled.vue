<script>
import BaseHeading from "@/components/BaseHeading.vue";

export default {
  props: {
    number: {
      type: String,
      required: true,
    },
  },
  components: {
    BaseHeading,
  },
};
</script>

<template>
  <div class="circle-number-filled">
    <BaseHeading
      variant="heading_36"
      class="circle-number-filled__title"
      level="h3"
    >
      {{ number }}
    </BaseHeading>
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
    @include media-tablet {
      font-size: 24px;
    }

    @include media-mobile {
      font-size: 16px;
    }
  }
}
</style>
