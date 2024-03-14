<script>
import BaseHeading from "@/components/BaseHeading.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import BaseSection from "@/components/BaseSection.vue";
import CircleNumberFilled from "@/components/CircleNumberFilled.vue";

export default {
  props: {},
  components: {
    BaseSection,
    BaseHeading,
    BaseParagraph,
    CircleNumberFilled,
  },
  data() {
    return {
      steps: [
        {
          title: "Регистрация на\u00A0i.moscow и\u00A0подача заявки",
          text: "Укажите сведения о\u00A0заёмщике, параметры кредита, приложив бухгалтерскую отчётность и\u00A0документ, подтверждающий право собственности или\u00A0иное право на\u00A0объект капитального строительства/земельный участок",
        },
        {
          title: "Отбор заявок в\u00A0Фонде МИК",
          text: "Специалисты Московского инновационного кластера проверят, чтобы\u00A0ваша заявка соответствовала требования для\u00A0получения льготного кредита",
        },
        {
          title: "Передача заявки в\u00A0МСП Банк",
          text: "Фонд\u00A0МИК передаёт отобранные заявки в\u00A0МСП\u00A0банк, который откроет доступ для\u00A0работы с\u00A0заявкой, назначит менеджера. Он\u00A0поможет в\u00A0работе с\u00A0заявкой",
        },
        {
          title: "Решение кредитного комитета",
          text: "Кредитный комитет МСП\u00A0банка примет решение по\u00A0вашей кредитной заявке и\u00A0уведомит об\u00A0этом",
        },
      ],
    };
  },
};
</script>

<template>
  <BaseSection
    title="Как получить льготный кредит"
    withPlus
    class="how-to-get-credit"
    headerClass="how-to-get-credit__header"
  >
    <div class="steps">
      <div class="steps__item" v-for="(step, i) in steps">
        <CircleNumberFilled :number="i + 1" class="steps__circle" />
        <div class="steps__texting">
          <BaseHeading variant="medium_24" class="steps__title" level="h3">{{
            step.title
          }}</BaseHeading>
          <BaseParagraph size="16" class="steps__text">{{
            step.text
          }}</BaseParagraph>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.how-to-get-credit {
  & :deep(.how-to-get-credit__header) {
    margin-bottom: 60px;

    @include media-tablet {
      margin-bottom: 30px;
    }

    @include media-mobile-large {
      margin-bottom: 20px;
    }
  }
}

$circle-size: 60px;
$circle-tablet-size: 40px;
$circle-mobile-size: 30px;

$border-size: 2px;

.steps {
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 40px;

  @include media-tablet {
    flex-direction: column;
    gap: 34px;
  }

  @include media-mobile-large {
    gap: 16px;
  }

  &::after {
    z-index: 2;
    content: "";
    position: absolute;
    top: calc($circle-size / 2 - $border-size / 2);
    left: 0;
    right: 0;
    height: 2px;
    border: 1px dashed $gray-12;

    @include media-tablet {
      left: calc($circle-tablet-size / 2 - $border-size / 2);
      top: 0;
      right: unset;
      bottom: 0;
      height: 100%;
    }

    @include media-mobile-large {
      left: calc($circle-mobile-size / 2 - $border-size / 2);
    }
  }

  &__item {
    z-index: 3;
    position: relative;
    display: flex;
    flex-direction: column;
    flex-basis: 0;
    flex-grow: 1;
    gap: 20px;

    &:last-child {
      z-index: 5;
      background: $white;
    }

    @include media-tablet {
      flex-direction: row;
    }

    @include media-mobile-large {
      gap: 16px;
    }
  }

  &__circle {
    flex-shrink: 0;
  }

  &__texting {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @include media-tablet {
      flex-direction: row;
    }

    @include media-mobile-large {
      flex-direction: column;
      gap: 4px;
    }
  }

  &__title {
    line-height: 120%;

    @include media-tablet {
      flex: 1 0 170px;
      font-size: 16px;
    }

    @include media-mobile-large {
      flex-basis: auto;
      font-size: 14px;
    }
  }

  &__text {
    line-height: 140% !important;
    font-size: 16px;

    @include media-tablet {
      line-height: 120% !important;
    }

    @include media-mobile-large {
      font-size: 12px;
    }
  }
}
</style>