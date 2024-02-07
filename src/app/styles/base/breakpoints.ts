export const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopM: 1150,
  laptopL: 1440,
  desktop: 2560,
}

export const device = {
  mobileS: `@media (min-width: ${size.mobileS}px)`,
  mobileM: `@media (min-width: ${size.mobileM}px)`,
  mobileL: `@media (min-width: ${size.mobileL}px)`,
  tablet: `@media (min-width: ${size.tablet}px)`,
  laptop: `@media (min-width: ${size.laptop}px)`,
  laptopM: `@media (min-width: ${size.laptopM}px)`,
  laptopL: `@media (min-width: ${size.laptopL}px)`,
  desktop: `@media (min-width: ${size.desktop}px)`,
}
