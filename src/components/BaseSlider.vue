<script setup>
import { useSlider } from "@/composables/useSlider";
import useDeviceDetection from "@/hooks/useDeviceDetection.js";
import { onMounted, ref } from "vue";

const props = defineProps({
  count: {
    type: Number,
    required: true,
  },
  sliderOn: {
    type: String,
  },
});

const slideWidth = ref(0);
const gapSize = ref(10);

const shouldUseSlider = () => {
  if (props.sliderOn === undefined) {
    return true;
  }

  const device = useDeviceDetection();
  if (device === props.sliderOn) {
    return true;
  }

  return false;
};

const {
  currentIndex,
  sliderContentRef,
  slideTo,
  onMouseDown,
  onMouseUp,
  onMouseMove,
} = useSlider(props.count, slideWidth, gapSize);

onMounted(() => {
  const sliderItem = document.querySelector(".slider-item");
  slideWidth.value = sliderItem.clientWidth;
});
</script>

<template>
  <template v-if="shouldUseSlider()">
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
  overflow: hidden;
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
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    min-height: 10px;
    padding: 0 30px;
  }
}

.circle {
  width: 6px;
  height: 6px;
  background: $black;
  border-radius: 12px;

  &_active {
    width: 10px;
    height: 10px;
    background: $green;
  }
}
</style>
