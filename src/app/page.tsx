import Sidebar from "@/components/Sidebar";

import { UserInfo, UserRole } from '../types/user'
import { Sellings } from '../types/sellings'

const sellings: Sellings = [
  {
    id: 1,
    product: [{ id: 1, name: "Bota Carterpiler", quantity: 1, value: 200 }, { id: 2, name: "Jaqueta Couro Masculina", quantity: 1, value: 500 }],
    date: "23/03/2025 - 09:30",
    totalValue: 700,
    seller: [{id: 1, name: "Gabriel Zanella"}],
    client: [{id: 1, name: "Joao Neto"}]
  },
  {
    id: 2,
    product: [{ id: 1, name: "Bota Carterpiler", quantity: 1, value: 200 }],
    date: "23/03/2025 - 10:00",
    totalValue: 200,
    seller: [{id: 1, name: "Gabriel Zanella"}],
    client: [{id: 2, name: "Maria Silva"}]
  },
]

const userInfo: UserInfo = {
    id: 1,
    name: "Gabriel",
    role: UserRole.VENDEDOR
}

const performanceVendas = [
  {
    id: 1,
    type: "Número de Vendas"
  },
  {
    id: 2,
    type: "Valor em Vendas"
  },
  {
    id: 3,
    type: "Lucro"
  },
  {
    id: 4,
    type: "Novos Clientes"
  },

]

export default function Home() {
  return (
    <div className="w-1/1 bg-gray-200">
      <main className="flex">
        <Sidebar />
        <div className="w-full h-full">
          <div className="w-full h-20 p-5 flex justify-between items-center">
              <h1 className="h-full flex items-center text-xl">Olá, {userInfo.name}</h1>
              <button className="w-40 bg-orange-400 rounded-sm h-8 text-white cursor-pointer">+ Adicionar Venda</button>
          </div>
          <div className="p-5">
            <h2 className="mb-3">Performance de Vendas</h2>
            <div className="grid grid-cols-4 gap-4">
              {performanceVendas.map((item) => (
                <div key={item.id} className="h-30 bg-white flex flex-col items-center justify-start p-2 rounded-sm">
                  <span>{item.type}</span>
                  <span className="h-full flex justify-center items-center">R$ 0,00</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full pt-4 p-5 h-full">
            <h2>Vendas de Hoje - {new Date().toLocaleDateString("pt-BR")}</h2>
            <div className="w-full bg-white h-full">
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">Produtos</th>
                    <th className="border border-gray-300 px-4 py-2">Valor Total</th>
                    <th className="border border-gray-300 px-4 py-2">Data e Hora</th>
                    <th className="border border-gray-300 px-4 py-2">Vendedor</th>
                    <th className="border border-gray-300 px-4 py-2">Cliente</th>
                  </tr>
                </thead>
                <tbody>
                  {sellings.map((selling) => (
                    <tr key={selling.id} className="text-center">
                      <td className="border border-gray-300 px-4 py-2">
                        {selling.product.map((product) => (product.name + " " + "(Qtd: " + product.quantity + ")")).join(", ")}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">R$ {selling.totalValue.toFixed(2)}</td>
                      <td className="border border-gray-300 px-4 py-2">{selling.date}</td>
                      <td className="border border-gray-300 px-4 py-2">
                        {selling.seller.map((seller) => seller.name)}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {selling.client.map((client) => client.name)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
      </main>
      <footer className="">
        
      </footer>
    </div>
  );
}
