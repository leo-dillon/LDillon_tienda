import { useNavigate, useParams } from "react-router-dom"
import { TextAncord } from "../general/ancord/TextAncord"
import { UseProduct } from "../../hooks/products/useProduct"
import { ProductData } from "../product/ProductData"

export const Product = () => {
    
    const { slug } = useParams()
    const navigate = useNavigate()


    if( slug == undefined ){
        navigate("/NotFound")
        return null
    }

    const { data, loading, error } = UseProduct({ slug })
    
    return (
        <section className="relative w-full max-w-[1400px] mx-auto pt-12 mt-6
            flex flex-col gap-6
            text-stone-800 
            dark:text-stone-200
        ">
            <div className="absolute top-0 -left-4 flex items-center gap-4 pr-4 border-b-1 border-stone-500">
                <span className="opacity-70 hover:opacity-100 duration-200"> <TextAncord to="/" text="Ir al Inicio"/> </span>
                <span> / </span>
                <span className="opacity-70 hover:opacity-100 duration-200"> <TextAncord to="/Tienda?page=1" text="Ir a la Tienda"/> </span>
            </div>
            {
                ( loading )
                ? <p>Cargnado</p>
                : ( data )
                    ? <ProductData data={data[0]} />
                    : <p>{error}</p>
            }
        </section>
    )
}

