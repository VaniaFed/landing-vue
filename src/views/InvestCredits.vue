<script>
import BaseHeading from "@/components/BaseHeading.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import BaseSection from "@/components/BaseSection.vue";
import BaseStack from "@/components/BaseStack.vue";
import CircleIcon from "@/components/CircleIcon.vue";
import IconCart from "@/components/icons/IconCart.vue";
import IconGears from "@/components/icons/IconGears.vue";
import IconMspBank from "@/components/icons/IconMspBank.vue";
import IconPartners from "@/components/icons/IconPartners.vue";

export default {
  props: {},
  components: {
    BaseSection,
    BaseHeading,
    BaseParagraph,
    BaseStack,
    CircleIcon,
    IconMspBank,
    IconCart,
    IconGears,
    IconPartners,
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
    title="Льготные кредиты на&nbsp;инвестиционные цели для&nbsp;субъектов МСП"
    class="invest-credits"
    headerClass="invest-credits__header"
  >
    <BaseParagraph class="invest-credits__text">
      — это мера финансовой поддержки, реализуемая Правительством Москвы,
      Корпорацией МСП и МСП Банк.
    </BaseParagraph>
    <div class="invest-credits__top">
      <div class="credit-subjects invest-credits__credit-subjects">
        <div class="credit-subjects__item">
          <div class="credit-subjects__icons">
            <CircleIcon class="credit-subjects__icon-button">
              <IconMspBank class="credit-subjects__icon" />
            </CircleIcon>
            <CircleIcon class="credit-subjects__icon-button">
              <img
                class="icon-msp-corp"
                src="/images/msp-corp.png"
                alt="Корпорация МСП"
              />
            </CircleIcon>
          </div>
          <div class="credit-subjects__texting">
            <BaseParagraph weight="500" class="credit-subjects__title"
              >МСП Банк и&nbsp;Корпорация МСП</BaseParagraph
            >
            <BaseParagraph class="credit-subjects__text"
              >выдают заемные средства</BaseParagraph
            >
          </div>
        </div>
        <div class="credit-subjects__item">
          <div class="credit-subjects__icons">
            <CircleIcon class="credit-subjects__icon-button">
              <img
                class="icon-msk-gov"
                src="/images/moscow-government.png"
                alt="Правительство Москвы"
              />
            </CircleIcon>
          </div>
          <div class="credit-subjects__texting">
            <BaseParagraph weight="500" class="credit-subjects__title"
              >Правительство Москвы</BaseParagraph
            >
            <BaseParagraph class="credit-subjects__text"
              >субсидирует ставку по кредиту</BaseParagraph
            >
          </div>
        </div>
      </div>
      <div class="credit-rate invest-credits__credit-rate">
        <BaseHeading class="credit-rate__title" variant="medium_24"
          >Льготная ставка в&nbsp;рамках программы</BaseHeading
        >
        <BaseStack asRow gap="43" class="credit-rate__list">
          <div class="rate-item">
            <div class="rate-item__header">
              <BaseHeading class="rate-item__from" variant="medium_24"
                >от</BaseHeading
              >
              <BaseHeading class="rate-item__amount" variant="medium_40"
                >3%</BaseHeading
              >
            </div>
            <BaseParagraph class="rate-item__text"
              >действует первые три года</BaseParagraph
            >
          </div>
          <div class="rate-item">
            <div class="rate-item__header">
              <BaseHeading class="rate-item__from" variant="medium_24"
                >от</BaseHeading
              >
              <BaseHeading class="rate-item__amount" variant="medium_40"
                >11%</BaseHeading
              >
            </div>
            <BaseParagraph class="rate-item__text">далее</BaseParagraph>
          </div>
        </BaseStack>
      </div>
    </div>
    <div class="opportunities">
      <BaseHeading class="opportunities__title" variant="medium_32"
        >На что можно потратить льготный кредит</BaseHeading
      >
      <BaseStack spaceBetween asRow class="opportunities__list">
        <div class="opportunities__item" v-for="oppItem in opportunities">
          <CircleIcon class="invest-credits__circle-icon">
            <component :is="oppItem.iconName" class="invest-credits__icon" />
          </CircleIcon>
          <BaseParagraph class="opportunities__text">
            {{ oppItem.text }}
          </BaseParagraph>
        </div>
      </BaseStack>
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.invest-credits {
  &:deep(.invest-credits__header) {
    max-width: 818px;
    margin-bottom: 20px !important;
  }

  &__text {
    max-width: 638px;
    line-height: 120% !important;

    @include media-tablet {
      margin-bottom: 40px;
    }

    @include media-mobile-large {
      line-height: 140% !important;
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
    }

    @include media-tablet {
      gap: 29px;
      margin-top: 0;
      margin-bottom: 40px;
    }

    @include media-mobile-large {
      flex-direction: column;
      align-items: flex-start;
      gap: 40px;
    }
  }

  &__credit-rate {
    flex-grow: 1;
  }

  &__credit-subjects {
    margin-bottom: 13px;

    @include media-tablet {
      margin-bottom: 0;
    }
  }

  &__circle-icon {
    width: 94px !important;
    height: 94px !important;
    box-shadow: $shadow-2;

    @include media-tablet {
      width: 60px !important;
      height: 60px !important;
    }
  }

  &__icon {
    width: 54px;

    @include media-tablet {
      width: 34.47px;
    }
  }
}

.credit-subjects {
  display: flex;
  gap: 90px;

  @include media-laptop {
    gap: 30px;
  }

  @include media-tablet {
    flex-direction: column;
    gap: 20px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @include media-tablet {
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }

    @include media-mobile-large {
      gap: 16px;
    }
  }

  &__icons {
    display: flex;

    :not(:first-child) {
      margin-left: -10px;

      @include media-tablet {
        margin-left: -19px;
      }

      @include media-mobile-large {
        margin-left: 0;
        margin-top: -8px;
      }
    }

    @include media-mobile-large {
      flex-direction: column;
    }
  }

  &__icon-button {
    background: $gray-4;

    @include media-mobile-large {
      width: 46px;
      height: 46px;
    }
  }

  &__icon {
    width: 58.2px;

    @include media-mobile-large {
      width: 30px;
    }
  }

  &__title {
    @include media-tablet {
      max-width: 189px;
      line-height: 120%;
    }

    @include media-mobile-large {
      font-size: 16px;
      line-height: 112%;
    }
  }

  &__text {
    margin-top: 10px;

    @include media-tablet {
      margin-top: 6px;
      max-width: 170px;
      line-height: 120%;
    }

    @include media-mobile-large {
      max-width: none;
      line-height: 140%;
    }
  }
}

.credit-rate {
  padding: 40px;
  background: $gray-4;
  border-radius: 30px;

  @include media-laptop {
    padding: 30px;
    padding-bottom: 40px;
  }

  @include media-mobile-large {
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
    @include media-mobile-large {
      font-size: 30px;
    }
  }
}

.icon-msp-corp {
  width: 50px;

  @include media-mobile-large {
    width: 23px;
  }
}

.icon-msk-gov {
  height: 52px;

  @include media-mobile-large {
    height: 24px;
  }
}

.opportunities {
  padding: 40px;
  box-shadow: $shadow-2;
  border-radius: 30px;

  @include media-tablet {
    padding: 40px 30px;
  }

  @include media-mobile-large {
    padding: 30px 20px;
    border-radius: 20px;
  }

  &__title {
    margin-bottom: 30px;

    @include media-tablet {
      line-height: 110%;
    }

    @include media-mobile-large {
      margin-bottom: 20px;
      font-size: 20px;
    }
  }

  &__list {
    display: flex;
    @media (max-width: 720px) {
      flex-direction: column !important;
    }

    @include media-mobile-large {
      gap: 16px !important;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 20px;

    @include media-tablet {
      gap: 16px;
    }
  }

  &__text {
    max-width: 251px;

    @include media-tablet {
      font-size: 14px;
      line-height: 120%;
    }
  }
}
</style>
