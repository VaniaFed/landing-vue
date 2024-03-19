export default function useMobile(initBreakpoints) {
  const breakpoints = initBreakpoints || {
    desktopSmall: 1440,
    laptop: 1280,
    tablet: 1024,
    mobile: 768,
  };

  if (screen.width <= breakpoints.mobile) {
    return "mobile";
  } else if (screen.width <= breakpoints.tablet) {
    return "tablet";
  } else if (screen.width <= breakpoints.laptop) {
    return "laptop";
  } else if (screen.width <= breakpoints.desktopSmall) {
    return "desktop-small";
  }

  return "desktop";
}
