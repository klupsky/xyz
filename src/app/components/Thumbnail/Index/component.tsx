'use client'
import { Wrapper } from './styles'
import { TIndexProps } from './types'

export default function Index({ id, projectCount }: TIndexProps) {
  return (
    <Wrapper>
      {id} of {projectCount}
    </Wrapper>
  )
}
