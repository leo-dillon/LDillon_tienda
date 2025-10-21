import type { Products_Variants_types } from "../../actions/products"
import { ProductItem } from "./ProductItem"

interface Props {
    products: Products_Variants_types[]
}

export const ProductsList = ({products}: Props) => {
    const cantidad: number = ( products ) ? products.length : 0
    return (
        <>  

            <ul className="relative w-full pt-12
                grid grid-cols-2 xl:grid-cols-4 gap-4
            ">
                <small className="absolute top-0 left-0 text-stone-600 dark:text-stone-400"> Productos encontrados: { cantidad }</small>
                {
                    ( products.length > 0 )
                    ? 
                        products.map( prod => {
                            return(
                               <ProductItem product={prod} key={prod.id} />
                            )
                        })
                    : <p>No encontramos productos con está marca</p>
                }
            </ul>
        </>
    )
}