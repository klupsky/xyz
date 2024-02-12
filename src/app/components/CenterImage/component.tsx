'use client'

import { AnimatePresence } from 'framer-motion'
import {
  CenterImageVariants,
  HoverTapFocusVariants,
  OpacityVariants,
  SizeVariants,
  TitleVariants,
} from '../../lib/animations'
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
  projectOpen,
}: TCenterImageProps) {
  const { src, alt } = image

  return (
    <Wrapper>
      <AnimatePresence>
        <BackgroundTitle
          variants={TitleVariants}
          animate={
            projectOpen ? OpacityVariants.hidden : OpacityVariants.visible
          }
        >
          {title}
        </BackgroundTitle>
        <ImageOuterWrapper
          variants={CenterImageVariants}
          animate={projectOpen ? SizeVariants.sizeUp : SizeVariants.original}
        >
          <ImageWrapper
            src={`/${src}@2x.jpg`}
            alt={alt}
            whileHover={!projectOpen && HoverTapFocusVariants.hover}
            whileTap={!projectOpen && HoverTapFocusVariants.tap}
            whileFocus={!projectOpen && HoverTapFocusVariants.focus}
          />
        </ImageOuterWrapper>
        <TopTitle variants={TitleVariants}>
          <FrontTitle
            animate={
              projectOpen ? OpacityVariants.hidden : OpacityVariants.visible
            }
          >
            {title}
          </FrontTitle>
          <Index
            projectId={projectId}
            activeProjectId={activeProjectId}
            projectCount={projectCount}
            projectOpen={projectOpen}
          />
        </TopTitle>
      </AnimatePresence>
    </Wrapper>
  )
}
