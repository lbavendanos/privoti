export interface Image {
  id?: string
  url?: string
  altText?: string
  width?: number
  height?: number
}

export interface Images {
  edges?: { node?: Image }[]
}
