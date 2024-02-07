export const SIZE = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopM: 1150,
  laptopL: 1440,
  desktop: 2560,
}

export const DEVICE = {
  mobileS: `@media (min-width: ${SIZE.mobileS}px)`,
  mobileM: `@media (min-width: ${SIZE.mobileM}px)`,
  mobileL: `@media (min-width: ${SIZE.mobileL}px)`,
  tablet: `@media (min-width: ${SIZE.tablet}px)`,
  laptop: `@media (min-width: ${SIZE.laptop}px)`,
  laptopM: `@media (min-width: ${SIZE.laptopM}px)`,
  laptopL: `@media (min-width: ${SIZE.laptopL}px)`,
  desktop: `@media (min-width: ${SIZE.desktop}px)`,
}
