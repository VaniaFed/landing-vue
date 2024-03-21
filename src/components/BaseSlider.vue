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
    const index = ref(0);
    const slideWidth = ref(0);
    const gapSize = ref(10);
    const isDown = ref(false);
    const scrollLeft = ref(0);
    const currentX = ref(0);
    const direction = ref(null);

    return {
      sliderContentRef,
      index,
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
      if (this.index > 0) {
        this.index--;
        this.sliderContentRef.scrollLeft -= this.slideWidth + this.gapSize;
      }
    },
    next() {
      if (this.index < this.count - 1) {
        this.index++;
        this.sliderContentRef.scrollLeft += this.slideWidth + this.gapSize;
      }
    },
    slideTo(index) {
      if (!(index >= 0 && index < this.count)) {
        return;
      }

      let finalScrollPosition = index * (this.slideWidth + this.gapSize);

      const ANIMATION_DURATION = 500;

      this.move(finalScrollPosition, ANIMATION_DURATION);
    },
    mouseDown(e) {
      this.isDown = true;
      if (e.clientX) {
        this.currentX = e.clientX;
      }
      this.scrollLeft = this.sliderContentRef.scrollLeft;
    },
    move(distance, time) {
      const startTime = Date.now();

      const animateScroll = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const fraction = elapsed / time;

        if (elapsed >= time) {
          clearInterval(animateScroll);
          this.sliderContentRef.scrollLeft = distance;
        } else {
          const currentScrollPosition = this.sliderContentRef.scrollLeft;
          const distanceToScroll = distance - currentScrollPosition;
          this.sliderContentRef.scrollLeft =
            currentScrollPosition + distanceToScroll * fraction;

          this.index = Math.floor(currentScrollPosition / this.slideWidth);
        }
      }, 500 / 60);
    },
    mouseUp(e) {
      this.isDown = false;

      const dx = Math.abs(e.clientX - this.currentX);

      // Новая позиция скролла с учетом перемещения
      const newScrollLeft =
        this.direction === "right"
          ? this.sliderContentRef.scrollLeft + dx
          : this.sliderContentRef.scrollLeft - dx;

      // Определяем индекс ближайшей карточки (округляем к ближайшему целому)
      const closestCardIndex = Math.round(newScrollLeft / this.slideWidth);

      // Вычисляем целевое расстояние для анимации, оно должно соответствовать позиции одной из карточек
      const targetDistance =
        closestCardIndex * (this.slideWidth + this.gapSize);

      const time = 500;

      this.move(targetDistance, time);
    },
    updateIndex() {
      this.index = Math.abs(
        Math.floor(
          this.sliderContentRef.scrollLeft + this.slideWidth * (this.index + 1)
        )
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
          v-for="(, i) in count"
          :class="{
            circle: true,
            circle_active: i === index,
          }"
          @click="slideTo(i)"
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
