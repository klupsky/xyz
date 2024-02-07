'use client'
import Image from 'next/image'
import { BackgroundProps } from './types'

export default function Background({ image }: BackgroundProps) {
  return (
    <>
      <Image src={image.src} alt={image.alt} fill sizes="100%" />
    </>
  )
}
