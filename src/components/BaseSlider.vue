<script>
import useDeviceDetection from "@/hooks/useDeviceDetection.js";
import { ref } from "vue";
export default {
  props: {
    count: {
      type: Number,
      required: true,
    },
    sliderOn: {
      type: String,
    },
  },
  components: {},
  setup(props) {
    const sliderContentRef = ref(null);
    const currentSlideIndex = ref(0);
    const slideWidth = ref(0);

    return {
      sliderContentRef,
      currentSlideIndex,
      slideWidth,
    };
  },
  methods: {
    shouldUseSlider() {
      if (this.sliderOn === undefined) {
        return true;
      }

      const device = useDeviceDetection();
      if (device === this.sliderOn) {
        return true;
      }

      return false;
    },
    prev() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
        this.sliderContentRef.scrollLeft -= this.slideWidth + 10;
      }
    },
    next() {
      if (this.currentSlideIndex < this.count - 1) {
        this.currentSlideIndex++;
        this.sliderContentRef.scrollLeft += this.slideWidth + 10;
      }
    },
    slideTo(index) {
      if (index >= 0 && index < this.count) {
        this.currentSlideIndex = index;
        this.sliderContentRef.scrollLeft = (this.slideWidth + 10) * index;
      }
    },
    dragStart(e) {
      this.dragX = e.clientX;
    },
    dragEnd(e) {
      if (this.dragX >= e.clientX) {
        this.next();
      } else {
        this.prev();
      }
    },
  },
  mounted() {
    const sliderItem = document.querySelector(".slider-item");
    this.slideWidth = sliderItem.clientWidth;
  },
};
</script>

<template>
  <template v-if="shouldUseSlider()">
    <div class="slider">
      <div class="slider__content-wrapper">
        <transition name="fade" :duration="1000">
          <div
            class="slider__content"
            ref="sliderContentRef"
            draggable="true"
            @dragstart="dragStart($event)"
            @dragend="dragEnd($event)"
          >
            <slot />
          </div>
        </transition>
      </div>
      <div class="slider__circles">
        <button
          v-for="(, index) in count"
          :class="{
            circle: true,
            circle_active: index === currentSlideIndex,
          }"
          @click="slideTo(index)"
        ></button>
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
  gap: 20px;
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
