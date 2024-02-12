'use client'
import {
  CenterImageVariants,
  HoverTapFocusVariants,
  TitleVariants,
} from '@/app/lib/animations'
import { AnimatePresence, motion } from 'framer-motion'
import Index from '../Index/component'
import {
  BackgroundTitle,
  FrontTitle,
  ImageOuterWrapper,
  ImageWrapper,
  TopTitle,
  Wrapper,
} from './styles'
import { TCenterImageProps } from './types'

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
        <BackgroundTitle variants={TitleVariants}>{title}</BackgroundTitle>
        <ImageOuterWrapper variants={CenterImageVariants}>
          <ImageWrapper
            src={`/${src}.jpg`}
            alt={alt}
            whileHover={HoverTapFocusVariants.hover}
            whileTap={HoverTapFocusVariants.tap}
            whileFocus={HoverTapFocusVariants.focus}
          />
        </ImageOuterWrapper>
        <TopTitle variants={TitleVariants}>
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
