import logo from "/image/LDillon/logo/lightLogo.svg"
import darkLogo from "/image/LDillon/logo/darkLogo.svg"

import { Nav } from "../nav/Nav"
import { IconAncord } from "../ancord/IconAncord"

export const Header = () => {
    return (
        <header
            className="w-full px-8 py-4 bg-zinc-300 dark:bg-zinc-800
            flex flex-row justify-between items-center
        ">
            <div className="flex items-center gap-2">
                <IconAncord  text="Volver al inicio" img={ darkLogo } darkImg={ logo } to="/"/>
                <h1 className="
                    text-xl text-stone-800
                    dark:text-stone-300
                ">
                    Tienda - LDillon 
                </h1>
            </div>
            <Nav />
        </header>
    )
}