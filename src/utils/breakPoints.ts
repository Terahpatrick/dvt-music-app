const size = {
  mobileS: "320",
  mobileM: "375",
  mobileL: "425",
  tablet: "820",
  laptop: "1024",
  laptopL: "1440",
  desktop: "2560",
};

const device = {
  mobileS: `(max-width: ${size.mobileS}px)`,
  mobileM: `(max-width: ${size.mobileM}px)`,
  mobileL: `(max-width: ${size.mobileL}px)`,
  tablet: `(max-width: ${size.tablet}px)`,
  laptop: `(max-width: ${size.laptop}px)`,
  laptopL: `(max-width: ${size.laptopL}px)`,
  desktop: `(max-width: ${size.desktop}px)`,
  desktopL: `(max-width: ${size.desktop}px)`,
};

const isDesktop = (width: number) => width > +size.laptopL;
const isLaptop = (width: number) =>
  width > +size.tablet && width <= +size.laptopL;
const isTablet = (width: number) =>
  width > +size.mobileL && width <= +size.tablet;
const isMobile = (width: number) =>
  width > +size.mobileS && width <= +size.mobileL;

export { size, device, isDesktop, isLaptop, isTablet, isMobile };
