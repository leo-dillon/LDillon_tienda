import { Link } from "react-router-dom"
import { useDarkMode } from "../../utils/context/ThemesContext"

interface Props{
    text: string,
    img: string
    darkImg : string
    to: string
}

export const IconAncord = ({ text, img, darkImg, to }: Props ) => {
    const { isDark } = useDarkMode()
    return (
        <Link 
            to={to} 
            className="px-2 py-2 duration-100 cursor-pointer
                flex items-center justify-center
                hover:scale-110
                active:scale-90
            "    
        >
            <img className="w-6" src={ isDark ? darkImg : img } alt={text} title={text} />  
        </Link>
    )
}