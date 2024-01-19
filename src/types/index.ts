export type ICard = {
  id: number
  title: string
  description: string
  imgUrl: string
  tags: ITag[]
}

export type ITag = {
  id: number
  name: string
}

export type ICardsState = {
  cards: ICard[]
}
