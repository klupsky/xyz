'use client'

import { useState } from 'react'
import { TSliderData } from '../../../../types/types'
import Background from '../Background/component'

export default function Slider({ data }: { data: TSliderData }) {
  const { title, projects } = data
  const [activeProjectId, setActiveProjectId] = useState(1)

  const projectCount = projects.length

  const nextProjectId =
    activeProjectId + 1 >= projectCount ? 0 : activeProjectId + 1
  const prevProjectId =
    activeProjectId - 1 < 0 ? projectCount - 1 : activeProjectId - 1

  return (
    <>
      <Background image={projects[activeProjectId].image} />
    </>
  )
}
