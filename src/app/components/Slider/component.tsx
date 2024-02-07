'use client'
import { useState } from 'react'
import Background from '../Background/component'
import MainImage from '../MainImage/component'
import Thumbnail from '../Thumbnail/component'
import { TSliderData } from './types'

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

  return (
    <>
      <Background image={projects[activeProjectId].image} />
      <Thumbnail direction="isPrev" handleClick={handleClick} />
      <Thumbnail direction="isNext" handleClick={handleClick} />
      <MainImage
        title={projects[activeProjectId].title}
        image={projects[activeProjectId].image}
        projectCount={projectCount}
        projectId={projects[activeProjectId].id}
        activeProjectId={activeProjectId}
      />
    </>
  )
}
