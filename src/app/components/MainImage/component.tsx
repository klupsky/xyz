'use client'
import Image from 'next/image';
import Index from '../Index/component';
import { BackgroundTitle, BackgroundTitleWrapper, Wrapper } from './styles';
import { TMainImageProps } from './types';

export default function MainImage({
  image,
  title,
  projectId,
  projectCount,
  activeProjectId,
}: TMainImageProps) {
  const { src, alt } = image

  return (
    <Wrapper>
      <BackgroundTitle>{title}</BackgroundTitle>

      {/* <ImageWrapper><Image/></ImageWrapper>
      // <FrontTitle>{title}</FrontTitle> */}
      <Index
        projectId={projectId}
        activeProjectId={activeProjectId}
        projectCount={projectCount}
      />
    </Wrapper>
  )
}
