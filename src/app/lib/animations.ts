export const CenterImageVariants = {
  enter: {
    y: -100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  initial: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  exit: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}

export const TitleVariants = {
  enter: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  initial: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}

export const ImageVariants = {
  enter: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  initial: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}

export const HoverTapFocusVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 1.1 },
  focus: { scale: 1.1 },
}

export const OpacityVariants = {
  visible: {
    opacity: 1,
    transition: {
      opacity: { duration: 0.1, ease: 'easeInOut', delay: 0.3 },
      delay: 3,
    },
  },
  transparent: {
    opacity: 0.3,
    transition: {
      opacity: { duration: 0.3, ease: 'easeInOut' },
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      opacity: { duration: 0.3, ease: 'easeInOut' },
    },
  },
}

export const SizeVariants = {
  original: {
    scale: 1,
    transition: {
      opacity: { duration: 0.5, ease: 'easeInOut' },
    },
  },
  sizeUp: {
    scale: 1.25,
    transition: {
      opacity: { duration: 0.5, ease: 'easeInOut' },
      delay: 0.3,
    },
  },
}
