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
          <span class="heading_24 rate-item__from">от</span>
          <span class="heading_40 rate-item__amount">3%</span>
        </div>
        <span class="plain_18 rate-item__text">действует первые три года</span>
      </div>
      <div class="rate-item">
        <div class="rate-item__header">
          <span class="heading_24 rate-item__from">от</span>
          <span class="heading_40 rate-item__amount">11%</span>
        </div>
        <span class="plain_18 rate-item__text">далее</span>
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

  @include media-tablet {
    margin-top: 17px;
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
      margin-bottom: 22px;
      font-size: 16px;
      line-height: 120%;
    }
  }

  &__list {
    @include media-laptop {
      gap: 28px !important;
    }

    @include media-mobile {
      gap: 12px !important;
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
    display: block;
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
