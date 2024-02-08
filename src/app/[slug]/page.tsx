import data from '@/app/lib/data'
import { TProjectProps } from './types'

export default function Project({ params }: TProjectProps) {
  const project = data.projects.find((project) => project.slug === params.slug)
  const projectImage = project ? project.image : null
  const { src, alt } = projectImage

  return (
    <>
      <main>project</main>
  )
}
