import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100%;
`

export const ImageWrapper = styled(motion.img)`
  overflow: hidden;
  position: relative;
  height: 100%;
  object-fit: cover;
  filter: blur(50px);
  width: 100%;
`
