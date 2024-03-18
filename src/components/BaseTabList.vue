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
  computed: {
    filteredItems() {
      const device = useDeviceDetection();
      if (this.hideInactiveOn.includes(device)) {
        return this.items.filter((item) => item.active);
      }

      return this.items;
    },
  },
};
</script>

<template>
  <div class="base-tab-list">
    <template v-for="(item, index) in filteredItems" :key="item.text">
      <BaseTabItem :active="item.active">
        <a :href="item.link">
          {{ item.text }}
        </a>
      </BaseTabItem>
      <BaseDivider
        v-if="filteredItems.length !== 1 && index !== filteredItems.length - 1"
      />
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
