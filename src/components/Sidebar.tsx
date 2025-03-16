import { faBagShopping, faChartLine, faHome, faLayerGroup, faStore, faUsers, faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link";

const menuItems = [
    {name: "Tela Inicial", icon: faHome, href: "/homepage"},
    {name: "Produtos", icon: faLayerGroup, href: "/products"},
    {name: "Vendas", icon: faBagShopping, href: "/sales"},
    {name: "Clientes", icon: faUsers, href: "/clients"},
    {name: "Loja", icon: faStore, href: "/store"},
    {name: "Relatórios", icon: faChartLine, href: "/dashboards"}
]

export default function Sidebar() {
    return (
        <div className="h-screen w-1/10 border-r-1 border-white flex flex-col">
            <span className="h-1/3 w-full text-center mt-5">Lojify</span>
            <nav className="h-full w-full">
                <ul className="h-full w-full">
                    {menuItems.map((item) => (
                        <li className="h-12 w-full text-center">
                            <Link className="flex items-center justify-between pl-3 pr-3 text-base" href={item.href}>{<FontAwesomeIcon className="w-5 h-auto" icon={item.icon}/>} {item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <Link className="h-12 mb-5 text-center" href="/settings">{<FontAwesomeIcon icon={faGear}/>} Configurações</Link>
        </div>
    );
}