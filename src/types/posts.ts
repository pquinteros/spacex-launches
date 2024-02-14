export type Post = {
  slug: string,
  data: Data
}

interface Data {
  title: string,
  image: ImageMetadata,
  tags: string[]
}