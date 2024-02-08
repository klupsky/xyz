'use client'
import { IndexDot, IndexDotsWrapper, Wrapper } from './styles'
import { TIndexProps } from './types'

export default function Index({
  projectId,
  activeProjectId,
  projectCount,
}: TIndexProps) {
  const IndexDots = Array.from({ length: projectCount }, (_, index) => (
    <IndexDot key={index} $isactive={index === activeProjectId} />
  ))

  return (
    <Wrapper>
      {projectId} of {projectCount}
      <IndexDotsWrapper>{IndexDots}</IndexDotsWrapper>
    </Wrapper>
  )
}
