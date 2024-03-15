<script>
export default {
  props: {},
  components: {},
};
</script>

<template>
  <div class="circle-icon">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.circle-icon {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background: $white;
  border-radius: 100px;
}
</style>
