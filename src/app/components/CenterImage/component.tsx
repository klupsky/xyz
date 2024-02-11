'use client'
import { SIZE } from '@/app/styles/base/breakpoints'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Index from '../Index/component'
import {
  BackgroundTitle,
  FrontTitle,
  ImageWrapper,
  TopTitle,
  Wrapper,
} from './styles'
import { TCenterImageProps } from './types'

const ImageVariants = {
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
const TitleVariants = {
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

export default function CenterImage({
  image,
  title,
  projectId,
  activeProjectId,
  projectCount,
}: TCenterImageProps) {
  const { src, alt } = image

  return (
    <Wrapper>
      <AnimatePresence>
        <BackgroundTitle
          transition={{ duration: 0.5 }}
          variants={TitleVariants}
        >
          {title}
        </BackgroundTitle>

        <ImageWrapper
          whileHover="whileHover"
          transition={{ duration: 0.5 }}
          variants={ImageVariants}
        >
          <Image
            src={`/${src}.jpg`}
            alt={alt}
            sizes={`(min-width: ${SIZE.tablet}px) 100vw,
          80vw`}
            fill={true}
            priority
          />
        </ImageWrapper>
        <TopTitle transition={{ duration: 0.5 }} variants={TitleVariants}>
          <FrontTitle>{title}</FrontTitle>
          <Index
            projectId={projectId}
            activeProjectId={activeProjectId}
            projectCount={projectCount}
          />
        </TopTitle>
      </AnimatePresence>
    </Wrapper>
  )
}
