<script>
import BaseHeading from "@/components/BaseHeading.vue";

export default {
  props: {
    number: {
      type: String,
      required: true,
    },
  },
  components: {
    BaseHeading,
  },
};
</script>

<template>
  <div class="circle-number-outlined">
    <BaseHeading level="h3">
      {{ number }}
    </BaseHeading>
  </div>
</template>

<style scoped lang="scss">
.circle-number-outlined {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid $green;
}
</style>
