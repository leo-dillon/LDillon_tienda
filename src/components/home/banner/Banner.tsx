import { Link } from "react-router-dom"

export const Banner = () => {
    const year = (new Date()).getFullYear()

    return (
        <article className="relative w-full px-4 py-48
            flex flex-col items-center justify-center gap-6
            text-stone-800
            dark:text-stone-100
        ">
            <div className="absolute inset-0 -z-10 bg-[url('/image/banners/banner.jpg')] bg-cover bg-center h-full"></div>
            <div className="absolute inset-0 -z-1 bg-black opacity-60"></div>
            <h2 className="text-5xl font-bold"> Los mejores celulares de { year } </h2>
            <p className="text-2xl font-bold opacity-80">Descubre las mejores ofertas y las ultimas novedades en celulares</p>
            <Link to="/tienda?page=1" className="bg-zinc-800 px-3 py-2 duration-200
                text-xl rounded
                hover:bg-zinc-700 hover:scale-105
                active:scale-90
            " > 
                Ir a la tienda 
            </Link>
        </article>  
    )
}