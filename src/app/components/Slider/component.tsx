'use client'
import { useState } from 'react'
import Background from '../Background/component'
import CenterImage from '../CenterImage/component'
import Index from '../Index/component'
import Thumbnail from '../Thumbnail/component'
import { TSliderData } from './types'

export default function Slider({ data }: { data: TSliderData }) {
  const { projects } = data
  const [activeProjectId, setActiveProjectId] = useState(0)

  const projectCount = projects.length

  const prevProjectId =
    activeProjectId - 1 < 0 ? projectCount - 1 : activeProjectId - 1

  const nextProjectId =
    activeProjectId + 1 >= projectCount ? 0 : activeProjectId + 1

  const handleClick = (direction: 'isPrev' | 'isNext') => {
    setActiveProjectId(direction === 'isPrev' ? prevProjectId : nextProjectId)
  }

  return (
    <>
      <Background image={projects[activeProjectId].image} />
      <CenterImage
        title={projects[activeProjectId].title}
        image={projects[activeProjectId].image}
      />
      <Index
        projectId={projects[activeProjectId].id}
        activeProjectId={activeProjectId}
        projectCount={projectCount}
      />
      <Thumbnail
        direction="isPrev"
        image={projects[prevProjectId].image}
        handleClick={handleClick}
      />
      <Thumbnail
        direction="isNext"
        image={projects[nextProjectId].image}
        handleClick={handleClick}
      />
    </>
  )
}
