'use client'
import { OpacityVariants } from '../../lib/animations'
import { IndexDot, IndexDotsWrapper, Wrapper } from './styles'
import { TIndexProps } from './types'

export default function Index({
  projectId,
  activeProjectId,
  projectCount,
  projectOpen,
}: TIndexProps) {
  const IndexDots = Array.from({ length: projectCount }, (_, index) => (
    <IndexDot key={`index-${index}`} $isactive={index === activeProjectId} />
  ))

  return (
    <Wrapper
      animate={projectOpen ? OpacityVariants.hidden : OpacityVariants.visible}
    >
      {projectId} of {projectCount}
      <IndexDotsWrapper>{IndexDots}</IndexDotsWrapper>
    </Wrapper>
  )
}
