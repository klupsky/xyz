export type TImage = {
  src: string
  alt: string
}

export type TProject = {
  id: number
  image: TImage
  title: string
  artist: string
  client: string
  date: string
  cta: string
}

export type TSliderData = {
  title: string
  projects: TProject[]
}
