import { UserInfo, UserRole } from '../types/user'

const userInfo: UserInfo = {
    id: 1,
    name: "Gabriel",
    role: UserRole.VENDEDOR
}

export default function Header() {
    return(
        <div className="w-full h-20 p-5 flex justify-between items-center">
            <h1 className="h-full flex items-center text-xl">Olá, {userInfo.name}</h1>
            <button>Nova Venda</button>
        </div>
    )
}