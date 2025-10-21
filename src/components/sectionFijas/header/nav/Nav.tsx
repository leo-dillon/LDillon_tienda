import { InconButton } from "../../../general/button/IconButon"
import { useDarkMode } from "../../../../utils/context/ThemesContext"

import moon from "/icons/icon-moon.svg"
import sun from "/icons/icon-sun.svg"

export const Nav = () => {
    const { toggleTheme } = useDarkMode()
    return (
        <nav>
            <InconButton text="Cambiar tema" img={moon} darkImg={sun} onClick={toggleTheme} />
        </nav>
    )
}