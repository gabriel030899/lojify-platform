import { faBagShopping, faChartLine, faHome, faLayerGroup, faStore, faUsers, faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link";

const menuItems = [
    {id: 1, name: "Tela Inicial", icon: faHome, href: "/homepage"},
    {id: 2, name: "Produtos", icon: faLayerGroup, href: "/products"},
    {id: 3, name: "Vendas", icon: faBagShopping, href: "/sales"},
    {id: 4, name: "Clientes", icon: faUsers, href: "/clients"},
    {id: 5, name: "Loja", icon: faStore, href: "/store"},
    {id: 6, name: "Relatórios", icon: faChartLine, href: "/dashboards"}
]

const menuItemsConfig = [
    {id: 1, name: "Vendedores", icon: faHome, href: "/vendedores"},
    {id: 2, name: "Configurações da Loja", icon: faLayerGroup, href: "/configuracao-loja"},
]


export default function Sidebar() {
    return (
        <div className="h-screen w-1/9 flex flex-col justify-between bg-white shadow-2xs border-r-2 rounded-r-xl border-transparent">
            <span className="w-full text-center mt-5">Lojify</span>
            <div className="w-full flex flex-col">
                <span className="w-full text-center mb-5">MENU</span>
                <nav className="h-full w-full">
                    <ul className="h-full w-full">
                        {menuItems.map((item) => (
                            <li key={item.id} className="h-12 w-full text-center">
                                <Link className="flex items-center justify-start pl-3 pr-3 text-base" href={item.href}>{<FontAwesomeIcon className="w-5 h-auto mr-3" icon={item.icon}/>} {item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="w-full flex flex-col">
                <span className="w-full text-center mb-5">FERRAMENTAS</span>
                <nav className="h-full w-full">
                    <ul className="h-full w-full">
                        {menuItemsConfig.map((item) => (
                            <li key={item.id} className="h-12 w-full text-center">
                                <Link className="flex items-center justify-start pl-3 pr-3 text-base" href={item.href}>{<FontAwesomeIcon className="w-5 h-auto mr-3" icon={item.icon}/>} {item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            
            <Link className="h-12 mb-5 text-center" href="/settings">{<FontAwesomeIcon icon={faGear}/>} Configurações</Link>
        </div>
    );
}