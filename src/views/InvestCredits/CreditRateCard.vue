<script>
import BaseStack from "@/components/BaseStack.vue";

export default {
  props: {},
  components: {
    BaseStack,
  },
};
</script>

<template>
  <div class="credit-rate-card">
    <h3 class="heading_24 credit-rate-card__title">
      Льготная ставка в&nbsp;рамках программы
    </h3>
    <BaseStack asRow gap="43" class="credit-rate-card__list">
      <div class="rate-item">
        <div class="rate-item__header">
          <h4 class="heading_24 rate-item__from">от</h4>
          <h4 class="heading_40 rate-item__amount">3%</h4>
        </div>
        <span class="plain_18 rate-item__text">действует первые три года</span>
      </div>
      <div class="rate-item">
        <div class="rate-item__header">
          <h5 class="heading_24 rate-item__from">от</h5>
          <h5 class="heading_40 rate-item__amount">11%</h5>
        </div>
        <span class="plain_16 rate-item__text">далее</span>
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
