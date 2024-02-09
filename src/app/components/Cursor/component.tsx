import React, { useEffect } from 'react'
import { CircleCenter, CircleWrapper } from './styles'
import { TCursorProps } from './types'

const onMouseMove = (e: MouseEvent) => {
  const mouseY = e.clientY
  const mouseX = e.clientX
  document.body.style.setProperty('--x', `${mouseX}px`)
  document.body.style.setProperty('--y', `${mouseY}px`)
}

const Cursor = ({ projectCount, activeProjectId }: TCursorProps) => {
  const circleSize = 42
  const radius = circleSize / 2
  const innerRadius = (circleSize - 2) / 2
  const processFragments = 2 * Math.PI * innerRadius
  const initialFragmentPosition =
    processFragments - (processFragments * (activeProjectId + 1)) / projectCount

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <CircleCenter>
        <svg
          fill="none"
          width={circleSize}
          height={circleSize}
          viewBox={`0 0 ${circleSize} ${circleSize}`}
        >
          <circle fill="var(--c-white)" cx={radius} cy={radius} r={2} />
        </svg>
      </CircleCenter>
      <CircleWrapper>
        <svg
          fill="none"
          width={circleSize}
          height={circleSize}
          viewBox={`0 0 ${circleSize} ${circleSize}`}
        >
          <circle
            cx={radius}
            cy={radius}
            r={innerRadius}
            stroke="var(--c-white)"
            opacity="0.1"
          />
          <circle
            cx={radius}
            cy={radius}
            r={innerRadius}
            stroke="var(--c-white)"
            strokeDasharray={processFragments}
            strokeDashoffset={initialFragmentPosition}
            style={{ transition: 'all 0.3s ease-in-out' }}
          />
        </svg>
      </CircleWrapper>
    </>
  )
}

export default Cursor
