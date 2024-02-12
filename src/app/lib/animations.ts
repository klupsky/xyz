export const CenterImageVariants = {
  enter: {
    y: -500,
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
    y: 500,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}

export const TitleVariants = {
  enter: {
    y: 500,
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
    y: -500,
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
      duration: 0.3,
      delay: 0.5,
    },
  },
  transparent: {
    opacity: 0.3,
    transition: {
      duration: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
}

export const SizeVariants = {
  original: {
    height: 'var(--centerImage-height)',
    width: 'var(--centerImage-width)',
    transition: {
      duration: 0.5,
    },
  },
  sizeUp: {
    height: `var(--centerImage-height--open)`,
    width: 'auto',
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
}
