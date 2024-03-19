<script>
import BaseCard from "@/components/BaseCard.vue";

export default {
  props: {
    title: String,
    code: String,
    details: String,
  },
  components: {
    BaseCard,
  },
};
</script>

<template>
  <BaseCard class="company-card">
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>

    <template v-slot:content>
      <span class="plain_18 plain_500 company-card__title">
        {{ title }}
      </span>
      <h4 class="heading_24 company-card__code">{{ code }}</h4>
      <span class="plain_14 company-card__details" v-if="details">
        {{ details }}
      </span>
    </template>
  </BaseCard>
</template>

<style lang="scss" scoped>
.company-card {
  box-shadow: $shadow-2;

  @include media-tablet {
    flex-direction: row;
    gap: 20px;
  }

  @include media-mobile {
    flex-direction: column;
    gap: 14px;
  }

  &__title {
    line-height: 120%;

    @include media-mobile {
      font-size: 14px;
    }
  }

  &__code {
    margin-top: 10px;

    @include media-tablet {
      line-height: 110%;
    }

    @include media-mobile {
      font-size: 18px;
      line-height: 120%;
    }
  }

  &__details {
    display: block;
    margin-top: 20px;
    color: $gray-0;

    @include media-mobile {
      margin-top: 16px;
      font-size: 12px;
    }
  }
}
</style>
