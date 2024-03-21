<script>
import BaseTabItem from "@/components/BaseTabItem.vue";
import BaseDivider from "@/components/BaseDivider.vue";
import useDeviceDetection from "@/hooks/useDeviceDetection.js";

export default {
  props: {
    items: {
      type: Object,
      required: true,
    },
    hideInactiveOn: {
      type: Object,
    },
  },
  components: { BaseTabItem, BaseDivider },
};
</script>

<template>
  <div class="base-tab-list">
    <template v-for="(item, index) in items" :key="item.text">
      <BaseTabItem :active="item.active">
        <a :href="item.link">
          {{ item.text }}
        </a>
      </BaseTabItem>
      <BaseDivider v-if="items.length !== 1 && index !== items.length - 1" />
    </template>
  </div>
</template>

<style scoped lang="scss">
$divider-width: 42px;
$divider-tablet-width: 22px;
$active-width: 20px;

.base-tab-list {
  display: flex;
  align-items: center;
}
</style>
