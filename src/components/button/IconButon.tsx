import { useDarkMode } from "../../utils/context/ThemesContext"

interface Props{
    text: string,
    img: string
    darkImg : string
    onClick: () => void
}

export const InconButton = ({ text, img, darkImg, onClick }: Props ) => {
    const { isDark } = useDarkMode()
    return (
        <button 
            onClick={() => onClick()} 
            className="px-2 py-2 duration-100 cursor-pointer
                flex items-center justify-center
                hover:scale-110
                active:scale-90 active:translate-y-1.5
            "    
        >
            <img src={ isDark ? darkImg : img } alt={text} title={text} />
        </button>
    )
}