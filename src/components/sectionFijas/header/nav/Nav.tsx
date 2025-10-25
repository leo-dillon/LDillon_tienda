import { InconButton } from "../../../general/button/IconButon"
import { IconAncord } from "../../../general/ancord/IconAncord"

import { useDarkMode } from "../../../../utils/context/ThemesContext"

import moon from "/icons/icon-moon.svg"
import sun from "/icons/icon-sun.svg"
import store from "/icons/store.svg"
import darkStore from "/icons/dark-store.svg"
import user from "/icons/user.svg"
import darkUser from "/icons/dark-user.svg"
import search from "/icons/search.svg"
import darkSearch from "/icons/dark-search.svg"

interface Props {
    changeIsOpen: (txt: string) => void
}

export const Nav = ( {changeIsOpen}: Props ) => {
    const { toggleTheme } = useDarkMode()
    return (
        <nav className="flex">
            <InconButton text="Cambiar tema" img={moon} darkImg={sun} onClick={toggleTheme} />
            <IconAncord text="Iniciar Sesión" img={darkUser} darkImg={user} to="#"/>
            <InconButton text="Busqueda por nombre" img={ darkSearch } darkImg={ search } onClick={() => {changeIsOpen('search')}} />
            <div className="relative">
                <InconButton text="Ir a Carrito" img={darkStore} darkImg={store} onClick={() => {changeIsOpen("store")}} />
                <span 
                    className=" flex items-center justify-center
                        w-5 h-5 rounded-full bg-black border-1 border-stone-900
                        absolute top-0 -right-1 
                        text-sm text-stone-200
                    ">
                    0        
                </span>
            </div>
        </nav>
    )
}