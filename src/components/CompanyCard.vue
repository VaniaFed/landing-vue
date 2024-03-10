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
      <BaseParagraph weight="500">
        {{ title }}
      </BaseParagraph>
      <BaseHeading level="h4" variant="medium_24" class="company-card__code">
        {{ code }}
      </BaseHeading>
      <BaseParagraph size="14" class="company-card__details">
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

  &__code {
    margin-top: 10px;
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
