<script>
import BaseSection from "@/components/BaseSection.vue";
import BaseCard from "@/components/BaseCard.vue";
import IconDrilling from "@/components/icons/IconDrilling.vue";
import IconCommunication from "@/components/icons/IconCommunication.vue";
import IconFreelancer from "@/components/icons/IconFreelancer.vue";
import BaseStack from "@/components/BaseStack.vue";
import CompanyCard from "@/components/CompanyCard.vue";

export default {
  components: {
    BaseSection,
    BaseStack,
    BaseCard,
    IconDrilling,
    IconCommunication,
    IconFreelancer,
    CompanyCard,
  },
  data() {
    return {
      cards: [
        {
          title: "Компании, занимающиеся обрабатывающим производством",
          code: "ОВЭД 10-33*",
          details: "* за исключением ОВЭД 12 — производство табачных изделий",
          iconName: "IconDrilling",
          additionalClass: "credit-can-get__small-card",
        },
        {
          title: "Компании из сферы информации и связи",
          code: "ОВЭД 58-63",
          iconName: "IconCommunication",
        },
        {
          title:
            "Компании, занимающиеся профессиональной, научной и технической деятельностью",
          code: "ОВЭД 71, 72, 74",
          iconName: "IconFreelancer",
        },
      ],
    };
  },
};
</script>

<template>
  <BaseSection
    class="credit-can-get"
    title="Если вы не состоите в Реестре стартапов и&nbsp;технологических компаний, то льготный кредит могут получить:"
    withPlus
  >
    <BaseStack asRow class="credit-can-get__layout">
      <CompanyCard
        v-for="card in cards"
        :title="card.title"
        :code="card.code"
        :details="card.details"
        :key="card.title"
        :class="card.additionalClass"
      >
        <template v-slot:icon>
          <component :is="card.iconName" />
        </template>
      </CompanyCard>
    </BaseStack>
  </BaseSection>
</template>

<style lang="scss" scoped>
.credit-can-get__layout {
  @include media-laptop {
    flex-direction: column;
  }

  @include media-tablet {
    gap: 10px !important;
  }
}

.credit-can-get__small-card {
  max-width: 370px;

  @include media-laptop {
    max-width: none;
  }
}
</style>
