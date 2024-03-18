<script>
import BaseStack from "@/components/BaseStack.vue";
import BaseHeading from "@/components/BaseHeading.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";

export default {
  props: {},
  components: {
    BaseStack,
    BaseHeading,
    BaseParagraph,
  },
};
</script>

<template>
  <div class="credit-rate-card">
    <BaseHeading class="credit-rate-card__title" variant="heading_24" level="h3"
      >Льготная ставка в&nbsp;рамках программы</BaseHeading
    >
    <BaseStack asRow gap="43" class="credit-rate-card__list">
      <div class="rate-item">
        <div class="rate-item__header">
          <BaseHeading class="rate-item__from" variant="heading_24" level="h4"
            >от</BaseHeading
          >
          <BaseHeading class="rate-item__amount" variant="heading_40" level="h4"
            >3%</BaseHeading
          >
        </div>
        <BaseParagraph class="rate-item__text"
          >действует первые три года</BaseParagraph
        >
      </div>
      <div class="rate-item">
        <div class="rate-item__header">
          <BaseHeading class="rate-item__from" variant="heading_24" level="h5"
            >от</BaseHeading
          >
          <BaseHeading class="rate-item__amount" variant="heading_40" level="h5"
            >11%</BaseHeading
          >
        </div>
        <BaseParagraph class="rate-item__text">далее</BaseParagraph>
      </div>
    </BaseStack>
  </div>
</template>

<style scoped lang="scss">
.credit-rate-card {
  padding: 40px;
  background: $gray-4;
  border-radius: 30px;

  @include media-laptop {
    padding: 30px;
    padding-bottom: 40px;
  }

  @include media-mobile {
    width: 100%;
    padding: 30px 20px 32px;
    border-radius: 20px;
  }

  &__title {
    margin-bottom: 24px;
    max-width: 266px;

    @include media-tablet {
      max-width: 194px;
      margin-bottom: 22px;
      font-size: 16px;
      line-height: 120%;
    }
  }

  &__list {
    @include media-laptop {
      gap: 28px !important;
    }
  }
}

.rate-item {
  &__header {
    display: flex;
    align-items: baseline;
    gap: 6px;
  }

  &__text {
    margin-top: 2px;

    @include media-tablet {
      max-width: 132px;
      line-height: 120%;
    }
  }
  &__amount {
    @include media-mobile {
      font-size: 30px;
    }
  }
}
</style>
