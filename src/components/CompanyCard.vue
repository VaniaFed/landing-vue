<script>
import BaseCard from "@/components/BaseCard.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import BaseHeading from "@/components/BaseHeading.vue";

export default {
  props: {
    title: String,
    code: String,
    details: String,
  },
  components: {
    BaseHeading,
    BaseParagraph,
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
      <BaseParagraph weight="500" class="company-card__title">
        {{ title }}
      </BaseParagraph>
      <BaseHeading level="h5" variant="heading_24" class="company-card__code">
        {{ code }}
      </BaseHeading>
      <BaseParagraph size="14" class="company-card__details" v-if="details">
        {{ details }}
      </BaseParagraph>
    </template>
  </BaseCard>
</template>

<style lang="scss" scoped>
.company-card {
  box-shadow: $shadow-2;

  @include media-laptop {
    flex-direction: row;
    gap: 20px;
  }

  @include media-tablet-small {
    flex-direction: column;
    gap: 16px;
  }

  &__title {
    line-height: 120%;

    @include media-mobile {
    }
  }
  &__code {
    margin-top: 10px;

    @include media-tablet {
      line-height: 110%;
    }

    @include media-mobile {
      line-height: 120%;
    }
  }

  &__details {
    margin-top: 20px;
    color: $gray-0;

    @include media-tablet-small {
      margin-top: 16px;
    }
  }
}
</style>
