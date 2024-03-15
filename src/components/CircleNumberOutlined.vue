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
  <div class="circle-number-outlined">
    <BaseHeading level="h3" class="circle-number-outlined__title">
      {{ number }}
    </BaseHeading>
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
    @include media-tablet {
      font-size: 36px !important;
    }

    @include media-mobile {
      font-size: 30px !important;
    }
  }
}
</style>
