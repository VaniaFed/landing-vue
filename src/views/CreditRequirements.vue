<script>
import BaseSection from "@/components/BaseSection.vue";
import RequirementsCard from "@/components/RequirementsCard.vue";
import BaseLink from "@/components/BaseLink.vue";
import IconEdit from "@/components/icons/IconEdit.vue";
import IconClusterMember from "@/components/icons/IconClusterMember.vue";
import IconPriorities from "@/components/icons/IconPriorities.vue";
import IconCalendar from "@/components/icons/IconCalendar.vue";
import IconMap from "@/components/icons/IconMap.vue";
import IconChart from "@/components/icons/IconChart.vue";
import IconPortion from "@/components/icons/IconPortion.vue";
import IconMoney from "@/components/icons/IconMoney.vue";
import IconMoscow from "@/components/icons/IconMoscow.vue";

export default {
  props: {},
  components: {
    BaseSection,
    RequirementsCard,
    BaseLink,
    IconEdit,
    IconClusterMember,
    IconPriorities,
    IconCalendar,
    IconMap,
    IconChart,
    IconPortion,
    IconMoney,
    IconMoscow,
  },
  data() {
    return {
      cards: [
        {
          title:
            "Постановка на учет в качестве налогоплательщика на территории Москвы",
          iconName: "IconEdit",
        },
        {
          title: "Участник кластера",
          description:
            "Статус даёт полный доступ ко всем возможностям, инструментам и сервисам кластера. Подробнее на странице",
          link: {
            text: "«О кластере».",
            attrs: {
              href: "/about-the-cluster",
            },
          },
          iconName: "IconClusterMember",
        },
        {
          title:
            "Наличие статуса субъекта малого и\u00A0среднего предпринимательства",
          iconName: "IconPriorities",
        },
        {
          title:
            "Продолжительность регистрации в\u00A0качестве юрлица или ИП составляет не менее 12 месяцев до дня подачи заявки",
          iconName: "IconCalendar",
        },
        {
          title:
            "Площадка в Москве (земельный участок, объект капитального строительства в собственности/аренде), на которой планируется реализация инвестиционного проекта",
          iconName: "IconMap",
        },
        {
          title:
            "Положительные значения чистых активов и чистой прибыли за\u00A0последний отчетный период",
          iconName: "IconChart",
        },
        {
          title:
            "Доля расходов на оборотные средства при реализации проекта не более 30% (закупка сырья, материалов)от суммы кредита",
          iconName: "IconPortion",
        },
        {
          title:
            "Доля собственных средств в проекте не менее 25% от суммы бюджета проекта",
          iconName: "IconMoney",
        },
        {
          title: "Готовность реализации проекта на территории Москвы",
          iconName: "IconMoscow",
        },
      ],
    };
  },
};
</script>

<template>
  <BaseSection title="Требования для получения льготного кредита" withPlus>
    <div class="credit-requirements__layout">
      <RequirementsCard
        v-for="card in cards"
        :key="card.title"
        class="requirements-card"
      >
        <template v-slot:icon>
          <component :is="card.iconName" />
        </template>
        <template v-slot:content>
          <span class="plain_18 plain_500 requirements-card__title">
            {{ card.title }}
          </span>
          <p class="plain_16 requirements-card__text">
            {{ card.description }}
            <BaseLink v-if="card.link" v-bind="card.link.attrs">
              {{ card.link.text }}
            </BaseLink>
          </p>
        </template>
      </RequirementsCard>
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.credit-requirements__layout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @include media-laptop {
    grid-template-columns: repeat(2, 1fr);
  }

  @include media-tablet {
    gap: 16px;
  }

  @include media-tablet-small {
    grid-template-columns: repeat(1, 1fr);
  }
}

.requirements-card {
  &__title {
    @include media-mobile {
      font-size: 16px;
      line-height: 112%;
    }
  }

  &__text {
    margin-top: 8px;
  }
}
</style>
