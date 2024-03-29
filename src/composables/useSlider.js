import { onMounted, ref } from "vue";

export function useSlider(slidesCount, initialGapSize = 0) {
  const sliderContentRef = ref(null);
  const currentIndex = ref(0);
  const slideWidth = ref(0);
  const gapSize = ref(initialGapSize);
  const isDown = ref(false);
  const scrollLeft = ref(0);
  const currentX = ref(0);
  const direction = ref(null);

  const ANIMATION_DURATION = 500;

  const slideTo = (index) => {
    if (!(index >= 0 && index < slidesCount)) {
      return;
    }

    let finalScrollPosition = index * (slideWidth.value + gapSize.value);

    move(finalScrollPosition, ANIMATION_DURATION);
  };

  const onMouseDown = (e) => {
    isDown.value = true;
    if (e.clientX) {
      currentX.value = e.clientX;
    }
    scrollLeft.value = sliderContentRef.value.scrollLeft;
  };

  const onMouseUp = (e) => {
    isDown.value = false;

    const dx = Math.abs(e.clientX - currentX.value);

    const newScrollLeft =
      direction.value === "right"
        ? sliderContentRef.value.scrollLeft + dx
        : sliderContentRef.value.scrollLeft - dx;

    // Определяем индекс ближайшей карточки (округляем к ближайшему целому)
    const closestCardIndex = Math.round(newScrollLeft / slideWidth.value);

    // Вычисляем целевое расстояние для анимации, оно должно соответствовать позиции одной из карточек
    const targetDistance =
      closestCardIndex * (slideWidth.value + gapSize.value);

    move(targetDistance, ANIMATION_DURATION);
  };

  const onMouseMove = (e) => {
    if (!isDown.value) {
      return;
    }

    sliderContentRef.value.scrollLeft =
      scrollLeft.value + currentX.value - e.clientX;

    if (currentX.value > e.clientX) {
      direction.value = "right";
    } else {
      direction.value = "left";
    }
  };

  const move = (distance, time) => {
    const startTime = Date.now();

    const animateScroll = () => {
      const elapsed = Date.now() - startTime;
      const fraction = elapsed / time;

      if (elapsed >= time) {
        sliderContentRef.value.scrollLeft = distance;
      } else {
        const currentScrollPosition = sliderContentRef.value.scrollLeft;
        const distanceToScroll = distance - currentScrollPosition;
        sliderContentRef.value.scrollLeft =
          currentScrollPosition + distanceToScroll * fraction;

        currentIndex.value = Math.ceil(
          currentScrollPosition / slideWidth.value
        );
        window.requestAnimationFrame(animateScroll);
      }
    };

    window.requestAnimationFrame(animateScroll);
  };

  onMounted(() => {
    const sliderItem = document.querySelector(".slider-item");
    slideWidth.value = sliderItem.clientWidth;

    window.addEventListener("resize", () => {
      if (sliderContentRef.value) {
        slideWidth.value = sliderItem.clientWidth;
        sliderContentRef.value.scrollLeft =
          currentIndex.value * slideWidth.value;
      }
    });
  });

  return {
    currentIndex,
    sliderContentRef,
    slideTo,
    onMouseDown,
    onMouseUp,
    onMouseMove,
  };
}
