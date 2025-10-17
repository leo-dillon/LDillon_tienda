import logo from "/image/logo/lightLogo.svg"
import darkLogo from "/image/logo/darkLogo.svg"

import { useDarkMode } from "../utils/context/ThemesContext"

export const Header = () => {
    const { toggleTheme, isDark } = useDarkMode()
    return (
        <header
            className="w-full
            flex flex-row justify-between items-center
        ">
            <picture className=" p-2 rounded
            dark:bg-transparent">
                <img src={( isDark ) ? logo: darkLogo} alt="Logo de Weather Now" />
            </picture>
        </header>
    )
}