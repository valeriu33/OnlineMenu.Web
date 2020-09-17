class Order {
  id: number
  products: Product[]
  status: OrderStatus
}

enum OrderStatus {
  ReadyToPlay,
  InProgress,
  Done
}
