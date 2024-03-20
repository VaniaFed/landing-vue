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
    const gapSize = ref(10);
    const isDown = ref(false);
    const scrollLeft = ref(0);
    const currentX = ref(0);
    const direction = ref(null);

    return {
      sliderContentRef,
      currentSlideIndex,
      slideWidth,
      gapSize,
      isDown,
      scrollLeft,
      currentX,
      direction,
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
        this.sliderContentRef.scrollLeft -= this.slideWidth + this.gapSize;
      }
    },
    next() {
      if (this.currentSlideIndex < this.count - 1) {
        this.currentSlideIndex++;
        this.sliderContentRef.scrollLeft += this.slideWidth + this.gapSize;
      }
    },
    slideTo(index) {
      if (index >= 0 && index < this.count) {
        this.currentSlideIndex = index;
        this.sliderContentRef.scrollLeft =
          (this.slideWidth + this.gapSize) * index;
      }
    },
    mouseDown(e) {
      this.isDown = true;
      if (e.clientX) {
        this.currentX = e.clientX;
      }
      this.scrollLeft = this.sliderContentRef.scrollLeft;
    },
    mouseUp(e) {
      this.isDown = false;

      const TIME = 500;
      const distance = Math.abs(e.clientX - this.currentX);
      const speed = (distance / TIME) * 60;

      const slide = () => {
        if (this.direction === "right") {
          this.sliderContentRef.scrollLeft += speed;
        } else {
          this.sliderContentRef.scrollLeft -= speed;
        }
      };

      const intervalId = setInterval(() => {
        slide();
        this.updateIndex();
      }, TIME / 60);

      setTimeout(() => {
        clearInterval(intervalId);
      }, TIME);
    },
    updateIndex() {
      this.currentSlideIndex = Math.ceil(
        (this.sliderContentRef.scrollLeft - this.gapSize) / this.slideWidth
      );
    },
    mouseMove(e) {
      if (!this.isDown) {
        return;
      }

      this.sliderContentRef.scrollLeft =
        this.scrollLeft + this.currentX - e.clientX;

      if (this.currentX > e.clientX) {
        this.direction = "right";
      } else {
        this.direction = "left";
      }

      this.updateIndex();
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
            @mousedown="mouseDown($event)"
            @mouseup="mouseUp($event)"
            @mousemove="mouseMove($event)"
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
