'use client'
import useSwipe from '@/app/lib/hooks/useSwipe'
import { AnimatePresence, motion } from 'framer-motion'
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
        <AnimatePresence>
          <motion.div
            key={`project-${projects[activeProjectId].id}`}
            initial="enter"
            animate="initial"
            exit="exit"
          >
            <Background image={projects[activeProjectId].image} />
            <Title>{title}</Title>
            <CenterImage
              title={projects[activeProjectId].title}
              image={projects[activeProjectId].image}
              projectId={projects[activeProjectId].id}
              activeProjectId={activeProjectId}
              projectCount={projectCount}
            />
          </motion.div>
        </AnimatePresence>
        <InfoBox
          date={projects[activeProjectId].date}
          client={projects[activeProjectId].client}
          artist={projects[activeProjectId].artist}
          slug={projects[activeProjectId].slug}
        />
        <AnimatePresence>
          <motion.div
            key={`next-project-${projects[nextProjectId].id}`}
            initial="enter"
            animate="initial"
            exit="exit"
          >
            <Thumbnail
              direction="Next"
              image={projects[nextProjectId].image}
              handleClick={handleClick}
            />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            key={`prev-project-${projects[prevProjectId].id}`}
            initial="enter"
            animate="initial"
            exit="exit"
          >
            <Thumbnail
              direction="Previous"
              image={projects[prevProjectId].image}
              handleClick={handleClick}
            />
          </motion.div>
        </AnimatePresence>
        <Cursor activeProjectId={activeProjectId} projectCount={projectCount} />
      </Wrapper>
    </>
  )
}
