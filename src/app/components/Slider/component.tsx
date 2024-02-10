'use client'
import useSwipe from '@/app/lib/hooks/useSwipe'
import { useEffect, useState } from 'react'
import Background from '../Background/component'
import CenterImage from '../CenterImage/component'
import Cursor from '../Cursor/component'
import InfoBox from '../InfoBox/component'
import Thumbnail from '../Thumbnail/component'
import { Title, Wrapper } from './styles'
import { TSliderData } from './types'

export default function Slider({ data }: { data: TSliderData }) {
  const { projects, title } = data
  const [activeProjectId, setActiveProjectId] = useState(0)

  const projectCount = projects.length

  const prevProjectId =
    activeProjectId - 1 < 0 ? projectCount - 1 : activeProjectId - 1

  const nextProjectId =
    activeProjectId + 1 >= projectCount ? 0 : activeProjectId + 1

  const handleClick = (direction: 'Previous' | 'Next') => {
    setActiveProjectId(direction === 'Previous' ? prevProjectId : nextProjectId)
  }

  const handleSwipe = useSwipe({
    onSwipedLeft: () => {
      setActiveProjectId(prevProjectId)
    },
    onSwipedRight: () => {
      setActiveProjectId(nextProjectId)
    },
  })

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setActiveProjectId(prevProjectId)
      } else if (e.key === 'ArrowRight') {
        setActiveProjectId(nextProjectId)
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [prevProjectId, nextProjectId])

  return (
    <>
      <Wrapper {...handleSwipe}>
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
          direction="Next"
          image={projects[nextProjectId].image}
          handleClick={handleClick}
        />
        <Thumbnail
          direction="Previous"
          image={projects[prevProjectId].image}
          handleClick={handleClick}
        />
        <Cursor activeProjectId={activeProjectId} projectCount={projectCount} />
      </Wrapper>
    </>
  )
}
