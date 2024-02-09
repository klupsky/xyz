'use client'
import { useState } from 'react'
import Background from '../Background/component'
import CenterImage from '../CenterImage/component'
import Cursor from '../Cursor/component'
import Index from '../Index/component'
import InfoBox from '../InfoBox/component'
import Thumbnail from '../Thumbnail/component'
import { DesktopCursorWrapper, Title, Wrapper } from './styles'
import { TSliderData } from './types'

export default function Slider({ data }: { data: TSliderData }) {
  const { projects, title } = data
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
      <Wrapper>
        <Background image={projects[activeProjectId].image} />
        <Title>{title}</Title>
        <CenterImage
          title={projects[activeProjectId].title}
          image={projects[activeProjectId].image}
          projectId={projects[activeProjectId].id}
          activeProjectId={activeProjectId}
          projectCount={projectCount}
        />

        <InfoBox
          date={projects[activeProjectId].date}
          client={projects[activeProjectId].client}
          artist={projects[activeProjectId].artist}
          slug={projects[activeProjectId].slug}
          cta={projects[activeProjectId].cta}
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
        <DesktopCursorWrapper>
          <Cursor />
        </DesktopCursorWrapper>
      </Wrapper>
    </>
  )
}
