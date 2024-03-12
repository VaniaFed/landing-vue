export default function useMobile(initBreakpoints) {
  const breakpoints = initBreakpoints || {
    laptop: 1024,
    tablet: 768,
    mobile: 420,
  };

  if (screen.width <= breakpoints.mobile) {
    return "mobile";
  } else if (screen.width <= breakpoints.tablet) {
    return "tablet";
  } else if (screen.width <= breakpoints.laptop) {
    return "laptop";
  }

  return "desktop";
}
