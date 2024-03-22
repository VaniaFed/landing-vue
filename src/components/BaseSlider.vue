<script setup>
import { computed } from "vue";
import { useSlider } from "@/composables/useSlider";
import useDeviceDetection from "@/hooks/useDeviceDetection.js";

const props = defineProps({
  count: {
    type: Number,
    required: true,
  },
  sliderOn: {
    type: String,
  },
});

const shouldUseSlider = computed(() => {
  if (props.sliderOn === undefined) {
    return true;
  }

  const device = useDeviceDetection();
  if (device === props.sliderOn) {
    return true;
  }

  return false;
});

const {
  currentIndex,
  sliderContentRef,
  slideTo,
  onMouseDown,
  onMouseUp,
  onMouseMove,
} = useSlider(props.count);
</script>

<template>
  <template v-if="shouldUseSlider">
    <div class="slider">
      <div
        class="slider__content"
        ref="sliderContentRef"
        @mousedown="onMouseDown($event)"
        @mouseup="onMouseUp($event)"
        @mousemove="onMouseMove($event)"
      >
        <slot />
      </div>
      <div class="slider__circles">
        <button
          v-for="(, i) in count"
          :class="{ circle: true, circle_active: i === currentIndex }"
          @click="slideTo(i)"
        />
      </div>
    </div>
  </template>
  <template v-else>
    <slot />
  </template>
</template>

<style scoped lang="scss">
.slider {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: -20px;

  &__content {
    overflow-x: auto;
    flex: 0 0 100%;
    padding: 20px;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__circles {
    position: absolute;
    bottom: -40px;
    left: 0;
    right: 0;
    width: 100%;
    display: none;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 30px;

    @include media-mobile {
      display: flex;
    }
  }
}

.circle {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6px;
  height: 6px;
  background: $black;
  border-radius: 12px;

  &:after {
    position: absolute;
    content: "";
    width: 30px;
    height: 100px;
  }

  &_active {
    width: 10px;
    height: 10px;
    background: $green;
  }
}
</style>
