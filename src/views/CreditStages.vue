<script>
import BaseSection from "@/components/BaseSection.vue";
import BaseStack from "@/components/BaseStack.vue";
import CircleNumberOutlined from "@/components/CircleNumberOutlined.vue";
import CircleIcon from "@/components/CircleIcon.vue";
import IconLogoCompact from "@/components/icons/IconLogoCompact.vue";
import IconMspBank from "@/components/icons/IconMspBank.vue";
import IconCheckMark from "@/components/icons/IconCheckMark.vue";

export default {
  props: {},
  components: {
    BaseSection,
    BaseStack,
    CircleNumberOutlined,
    CircleIcon,
    IconLogoCompact,
    IconMspBank,
    IconCheckMark,
  },

  data() {
    return {
      investCards: [
        {
          title: "В Московском инновационном кластере",
          iconName: "IconLogoCompact",
          additionalClass: "invest-card_green",
          items: [
            {
              text: "Подтверждаете статус участника Реестра стартапов или МИК и статус субъекта МСП",
            },
            {
              text: "Подтверждаете отсутствие отрицательных значений чистых активов и чистой прибыли за последний отчётный период",
            },
            {
              text: "Подтверждаете вид деятельности: наука, ИТ или промышленность",
            },
            {
              text: "Подтверждаете Реализацию проекта на территории Москвы",
            },
          ],
        },
        {
          title: "В МСП Банке",
          iconName: "IconMspBank",
          additionalClass: "invest-card_blue",
          items: [
            {
              text: "Предоставляете необходимую информацию по кредитной заявке",
            },
            {
              text: "Банк проводит оценку заявителя и кредитной заявки по внутренним критериям и принимает решение",
            },
            {
              text: "Подписываете кредитный договор и банк зачисляет деньги на ваш счёт",
            },
          ],
        },
      ],
    };
  },
};
</script>

<template>
  <BaseSection
    title="Отбор заявок на&nbsp;получение льготного&nbsp;инвестиционного кредита"
    tagLabel="проходит в 2 этапа"
    withPlus
    class="credit-stages"
    headerClass="credit-stages__header"
    headingClass="credit-stages__heading"
  >
    <div
      v-for="(card, i) in investCards"
      :class="{
        'invest-card': true,
        'credit-stages__item': true,
        [card.additionalClass]: card.additionalClass,
      }"
    >
      <div class="invest-card__meta">
        <header class="invest-card__header">
          <CircleNumberOutlined :number="i + 1" class="invest-card__number" />
          <h3 class="heading_24 invest-card__title">{{ card.title }}</h3>
        </header>
        <CircleIcon class="invest-card__btn-icon">
          <component :is="card.iconName" class="invest-card__icon" />
        </CircleIcon>
      </div>
      <BaseStack class="invest-card__content" gap="10">
        <div v-for="item in card.items" class="invest-card__item">
          <CircleIcon class="invest-card__circle-icon">
            <IconCheckMark class="check-mark" />
          </CircleIcon>
          <span class="plain_18 invest-card__text">{{ item.text }}</span>
        </div>
      </BaseStack>
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.credit-stages {
  padding-top: 80px;

  @include media-mobile {
    padding: 0;
    padding-top: 40px;
  }

  &:deep(.credit-stages__header) {
    @include media-mobile {
      padding: 20px;
      padding-bottom: 0;
    }
  }

  &:deep(.credit-stages__heading) {
    @include media-tablet {
      font-size: 24px;
    }

    @include media-mobile {
      font-size: 20px;
    }
  }

  &__header {
    padding: 20px;
  }

  &__item {
    display: flex;
    justify-content: space-between;

    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    @include media-laptop {
      flex-direction: column;
    }

    @include media-mobile {
      margin-bottom: 4px;
    }
  }
}

.invest-card {
  overflow: hidden;
  position: relative;
  padding: 40px;
  padding-right: 50px;
  background: $green-2;
  border-radius: 60px;

  @include media-laptop {
    padding: 30px;
    border-radius: 30px;
  }

  @include media-mobile {
    padding: 30px 20px 20px;
  }

  &_blue {
    background: $blue-2;
    border-radius: 30px;

    &:deep(.invest-card__number) {
      border-color: $blue;
    }

    & .invest-card__meta {
      gap: 64px;
    }

    & .invest-card__content {
      padding: 0;
      max-width: 550px;
      margin-right: 10px;

      @include media-tablet {
        max-width: none;
        margin: 0;
      }
    }
  }

  &_green::after,
  &_blue::after {
    z-index: 1;
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }

  &_green::after {
    background: url("/images/vectors-green.svg") no-repeat;
    background-position: top right;
    background-size: 815px;

    @include media-tablet {
      bottom: 5px;
      left: 122px;
      background-position: bottom left;
    }

    @include media-mobile {
      left: 0;
      bottom: 0;
      background-position: center -10px;
      background-size: 1215px;
    }
  }

  &_blue::after {
    left: 374px;
    background: url("/images/vectors-blue.svg") no-repeat;
    background-position: top left;
    background-size: 70%;

    @include media-tablet {
      left: 185px;
      background-position: left;
      background-size: 890px;
    }

    @include media-mobile {
      bottom: 105px;
      left: 171px;
      background-size: 934px;
    }
  }

  &__meta,
  &__content {
    z-index: 2;
    position: relative;
  }

  &__meta {
    display: flex;
    flex-direction: column;
    gap: 156px;

    @include media-laptop {
      flex-direction: row;
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 20px;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 21px;
    max-width: 417px;

    @include media-laptop {
      max-width: none;
    }

    @include media-mobile {
      gap: 10px;
    }
  }

  &__number {
    flex-shrink: 0;
  }

  &__title {
    line-height: 110%;

    @include media-mobile {
      font-size: 20px;
    }
  }

  &__btn-icon {
    @include media-laptop {
      width: 61px;
      height: 61px;
    }

    @include media-mobile {
      display: none;
    }
  }

  &__icon {
    height: 38px;

    @include media-laptop {
      height: 23px;
    }
  }

  &__circle-icon {
    width: 30px;
    height: 30px;
    background: $gradient-green;
    box-shadow: $shadow-2;
  }

  &__content {
    padding: 25px 0;

    @include media-laptop {
      padding: 0;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 20px;
    max-width: 560px;
    padding: 25px 30px;
    background: $white;
    border-radius: 20px;
    box-shadow: $shadow-2;

    @include media-laptop {
      max-width: none;
    }

    @include media-mobile {
      padding: 20px;
    }
  }

  &__text {
    line-height: 120%;

    @include media-mobile {
      line-height: 140%;
    }
  }
}

.check-mark {
  width: 16px;
  fill: $black;
}
</style>
