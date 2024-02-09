import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const CleanPercentage = (percentage) => {
  const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0
  const isTooHigh = percentage > 100
  return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage
}

const Circle = ({ percentage, colour }) => {
  const r = 21
  const dotRadius = 2
  const circ = 2 * Math.PI * r
  const strokePct = ((100 - percentage) * circ) / 100

  return (
    <g>
      <circle
        r={r}
        cx={21}
        cy={21}
        fill="transparent"
        stroke={strokePct !== circ ? colour : ''}
        strokeWidth="1px"
        strokeDasharray={circ}
        strokeDashoffset={percentage ? strokePct : 0}
        opacity="0.9"
      ></circle>
      <circle r={dotRadius} cx={21} cy={21} fill="white"></circle>
    </g>
  )
}

const Pie = ({ percentage }) => {
  const pct = CleanPercentage(percentage)

  return (
    <svg width={43} height={43}>
      <g transform={`rotate(-90 ${'21 21'})`}>
        <Circle colour="black" percentage={pct} />
        <Circle colour="var(--c-white)" percentage={pct} />
      </g>
    </svg>
  )
}

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 21,
      y: mousePosition.y - 21,
    },
  }

  return (
    <motion.div
      variants={variants}
      animate="default"
      style={{ zIndex: 5, position: 'absolute' }}
    >
      <Pie percentage={50} />
    </motion.div>
  )
}

export default Cursor
