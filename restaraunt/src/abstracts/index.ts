export interface SectionTitle {
  accentWord: string,
  phrase: string,
}

export interface Dish {
  name: string,
  img: string,
  price: number,
  isRecommended?: boolean,
  description?: string,
}

export interface Review {
  customerName: string,
  img: string,
  text: string,
  id: number,
}

export interface Image {
  title: string,
  url: string,
}
