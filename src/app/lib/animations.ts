export const ImageVariants = {
  enter: {
    y: -100,
    opacity: 0,
  },
  center: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 100,
    opacity: 0,
  },
}
export const TitleVariants = {
  enter: {
    y: 100,
    opacity: 0,
  },
  center: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -100,
    opacity: 0,
  },
}

export const HoverTapFocusVariants = {
  hover: { scale: 1.1, transition: { duration: 0.2, ease: 'easeInOut' } },
  tap: { scale: 1.1, transition: { duration: 0.2, ease: 'easeInOut' } },
  focus: { scale: 1.1, transition: { duration: 0.2, ease: 'easeInOut' } },
}
