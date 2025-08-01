export type Product = {
  id: number
  nome: string
  preco: number
  descricao: string
}

export const menu: Product[] = [
  {
    id: 1,
    nome: "Hambúrguer Artesanal",
    preco: 25,
    descricao: "Pão brioche, carne 180g, cheddar e bacon",
  },
  {
    id: 2,
    nome: "Pizza Marguerita",
    preco: 35,
    descricao: "Molho de tomate, muçarela, manjericão fresco",
  },
  {
    id: 3,
    nome: "Refrigerante 350ml",
    preco: 6,
    descricao: "Coca-Cola, Pepsi ou Guaraná",
  },
]