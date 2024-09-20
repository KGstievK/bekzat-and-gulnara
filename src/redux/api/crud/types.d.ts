namespace TODO {
  interface ProductType {
   profil: User
  }
  type GetResponse = ProductType[]
  type GetRequest = void
  
  type PostResponse = ProductType[]
  type PostRequest = ProductType
}
