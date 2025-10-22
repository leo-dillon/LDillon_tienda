import { useDarkMode } from "../../utils/context/ThemesContext"

import truck from "/icons/truck.svg"
import darkTruck from "/icons/darkTruck.svg"
import coin from "/icons/coin.svg"
import darkCoin from "/icons/darkCoin.svg"
import movile from "/icons/movile.svg"
import darkMovile from "/icons/darkMovile.svg"

export const FeatureGrid = () => {
    const { isDark } = useDarkMode()

    return (
        <section>
            <div className="w-full max-w-[1000px] mx-auto flex flex-row flex-wrap justify-between items-center">
                <div className=" px-4 py-8 border-1 border-amber-100 rounded-2xl
                    flex flex-row items-center gap-4
                ">
                    <img src={ isDark ? truck : darkTruck } alt="Envios Gratis a todo el país" className="w-14 opacity-80"/>
                    <div className="flex flex-col gap-2 text-stone-800 dark:text-stone-200">
                        <h3 className="font-semibold">Envios Gratis</h3>
                        <p className="w-full max-w-[200px] opacity-90">En todos nuestros productos y a todo el país</p>
                    </div>
                </div>
                <div className=" px-4 py-8 border-1 border-amber-100 rounded-2xl
                    flex flex-row items-center gap-4
                ">
                    <img src={ isDark ? coin : darkCoin } alt="Envios Gratis a todo el país" className="w-14 opacity-80"/>
                    <div className="flex flex-col gap-2 text-stone-800 dark:text-stone-200">
                        <h3 className="font-semibold">Devoluciones</h3>
                        <p className="w-full max-w-[200px] opacity-90">Garantia de 30 días en todos nuestros productos</p>
                    </div>
                </div>
                <div className=" px-4 py-8 border-1 border-amber-100 rounded-2xl
                    flex flex-row items-center gap-4
                ">
                    <img src={ isDark ? movile : darkMovile } alt="Envios Gratis a todo el país" className="w-14 opacity-80"/>
                    <div className="flex flex-col gap-2 text-stone-800 dark:text-stone-200">
                        <h3 className="font-semibold">Soporte Técnico 24/7</h3>
                        <p className="w-full max-w-[200px] opacity-90">Tenemos líneas telefonicas operando las 24hs</p>
                    </div>
                </div>
            </div>
        </section>
    )
}