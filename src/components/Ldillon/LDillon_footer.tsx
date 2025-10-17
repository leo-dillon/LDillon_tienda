import Ldillon from "/image/LDillon/LDillon.png"
import avatar from "/image/LDillon/avatar.png"
import { useState } from "react"

export const LDillon_footer = () => {
    const [ isAvatar, setIsAvatar ] = useState<boolean>(true)

    const toggleAvatar = () => {
        setIsAvatar((prev) => !prev)
    }

    return (
        <div className="flex flex-col gap-3
            sm:flex-row
        ">
            <img src={ isAvatar ? avatar : Ldillon } alt="Imagen de Leonardo Dillon" 
                className="w-20 rounded-2xl cursor-pointer
                hover:opacity-90
                active:animate-pulse "    
                onClick={ () => toggleAvatar() }
            />
            <div className="flex flex-col justify-center gap-1">
                <h2 
                    className="text-lg font-semibold dark:text-stone-200 text-stone-800
                "> Leonardo Nahuel Dillon </h2>
                <a 
                    title="#"
                    href="#" 
                    className="cursor-pointer
                        text-sm font-semibold text-stone-800 
                        dark:text-stone-200
                        hover:underline "
                > 
                    Portafolio 
                </a>
            </div>
        </div>
    )
}