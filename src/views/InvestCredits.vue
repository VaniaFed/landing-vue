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
    title="Льготные кредиты на инвестиционные цели для субъектов МСП"
    class="invest-credits"
  >
    <div class="invest-credits__top">
      <div class="credit-subjects">
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
      <div>right</div>
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
