<script>
export default {
  props: {},
};
</script>

<template>
  <div class="base-card">
    <div class="base-card__icon">
      <slot name="icon" />
    </div>
    <div class="base-card__content">
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-card {
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
  padding: 30px;
  box-shadow: $shadow;
  border-radius: 30px;

  &__icon {
    width: 70px;
    height: 70px;
    flex-shrink: 0;
  }
}
</style>
