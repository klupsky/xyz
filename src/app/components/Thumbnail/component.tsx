'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Wrapper } from './styles';
import { TThumbnailProps } from './types';

export default function Thumbnail({
  image,
  direction,
  handleClick,
}: TThumbnailProps) {
  const { src, alt } = image

  return (
    <>
      <Wrapper
        aria-label={direction}
        direction={direction}
        onClick={() => handleClick(direction)}
        // whileHover={{ scale: 1.05 }}
        // whileFocus={{ scale: 1.05 }}
      >
        <Image
          src={`/${src}.jpg`}
          alt={alt}
          sizes="50vw"
          fill={true}
          priority
        />
      </Wrapper>
    </>
  )
}
