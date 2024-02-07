'use client'
import { useState } from 'react'
import { TSliderData } from '../../../../types/types'
import Background from '../Background/component'
import Thumbnail from '../Thumbnail/component'

export default function Slider({ data }: { data: TSliderData }) {
  const { projects } = data
  const [activeProjectId, setActiveProjectId] = useState(0)

  const projectCount = projects.length

  const nextProjectId =
    activeProjectId + 1 >= projectCount ? 0 : activeProjectId + 1
  const prevProjectId =
    activeProjectId - 1 < 0 ? projectCount - 1 : activeProjectId - 1

  const handleClick = (direction: 'isPrev' | 'isNext') => {
    setActiveProjectId(direction === 'isPrev' ? prevProjectId : nextProjectId)
  }

  console.log(activeProjectId)

  return (
    <>
      <Background image={projects[activeProjectId].image} />
      <Thumbnail direction="isPrev" handleClick={handleClick} />
      <Thumbnail direction="isNext" handleClick={handleClick} />
    </>
  )
}
