<script>
import BaseSection from "@/components/BaseSection.vue";
import Opportunities from "./Opportunities.vue";
import CreditSubjects from "./CreditSubjects.vue";
import CreditRateCard from "./CreditRateCard.vue";

export default {
  props: {},
  components: {
    CreditSubjects,
    CreditRateCard,
    Opportunities,
    BaseSection,
  },
  data() {
    return {
      opportunities: [
        {
          text: "Модернизацию и\u00A0расширение производства",
          iconName: "IconGears",
        },
        { text: "Приобретение нового оборудования", iconName: "IconCart" },
        {
          text: "Приобретение производственных площадей",
          iconName: "IconPartners",
        },
      ],
    };
  },
};
</script>

<template>
  <BaseSection
    class="invest-credits"
    headerClass="invest-credits__header"
    title="Льготные кредиты на&nbsp;инвестиционные цели для&nbsp;субъектов МСП"
    withPlus
  >
    <div class="plain_18 invest-credits__text">
      — это мера финансовой поддержки, реализуемая Правительством Москвы,
      Корпорацией МСП и МСП Банк.
    </div>
    <div class="invest-credits__top">
      <CreditSubjects class="invest-credits__credit-subjects" />
      <CreditRateCard class="invest-credits__credit-rate-card" />
    </div>
    <Opportunities :items="opportunities"
      >На что можно потратить льготный кредит</Opportunities
    >
  </BaseSection>
</template>

<style scoped lang="scss">
.invest-credits {
  padding-top: 80px;

  @include media-tablet {
    padding-top: 40px;
  }

  &__text {
    max-width: 638px;
    line-height: 120%;

    @include media-tablet {
      margin-bottom: 40px;
    }

    @include media-mobile {
      line-height: 140%;
      margin-bottom: 20px;
    }
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: -3px;
    margin-bottom: 55px;
    gap: 105px;

    @include media-laptop {
      gap: 60px;
      align-items: flex-start;
      margin-top: 24px;
    }

    @include media-tablet {
      gap: 29px;
      margin-top: 0;
      margin-bottom: 20px;
    }

    @include media-mobile {
      flex-direction: column;
      gap: 20px;
      margin-bottom: 40px;
    }
  }

  &:deep(.invest-credits__credit-rate-card) {
    flex-grow: 1;
  }

  &:deep(.invest-credits__header) {
    max-width: 818px;
    margin-bottom: 20px;
  }

  &:deep(.invest-credits__credit-subjects) {
    margin-bottom: 13px;

    @include media-mobile {
      margin-bottom: 0;
    }
  }
}
</style>
