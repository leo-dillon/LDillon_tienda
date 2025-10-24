import { useNavigate, useParams } from "react-router-dom"
import { UseProduct } from "../../hooks/products/useProduct"
import { ProductContent } from "../product/ProductContent"
import { PaginationList } from "../general/paginationList/PaginationList"
import { RandomProducts } from "../home/products/RandomProducts"

export const Product = () => {
    
    const { slug } = useParams()
    const navigate = useNavigate()


    if( slug == undefined ){
        navigate("/NotFound")
        return null
    }

    const { data, loading, error } = UseProduct({ slug })
    const paginationInfo = [
        {
            to:     "/" ,
            text:   "Ir al Inicio"
        },
        {
            to:     "/Tienda?page=1" ,
            text:   "Ir a la Tienda"
        }
    ]

    return (
        <section className="relative w-full max-w-[1400px] mx-auto pt-12 mt-6
            flex flex-col gap-6
            text-stone-800 
            dark:text-stone-200
        ">
            <PaginationList pagLink={paginationInfo}/>
            {
                ( loading )
                ? <p>Cargnado</p>
                : ( data )
                    ? <ProductContent data={data[0]} />
                    : <p>{error}</p>
            }
            <RandomProducts text="Tambien te puede interezar"/>
        </section>
    )
}

