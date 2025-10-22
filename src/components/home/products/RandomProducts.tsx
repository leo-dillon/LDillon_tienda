import { useRandomProducts } from "../../../hooks/products/useRandomProducts"
import { Title_h2 } from "../../general/H/Title_h2"
import { ProductsList } from "../../tienda/ProductsList"

interface Props{
    text: string
}

export const RandomProducts = ({ text }: Props) => {
    const { dataProducts, isLoading, error } = useRandomProducts()
    return (
        <section>
            <div className="w-full max-w-[1000px] mx-auto flex flex-col flex-wrap jusitfy-center space-y-3">
                <Title_h2 text={text} /> 
                <div className="dark:text-stone-200 text-stone-800">
                    {
                        ( !isLoading && dataProducts )
                        ? <ProductsList products={dataProducts}/>
                        : ( error )
                            ? <p> Error al encontrar productos </p>
                            : <p> Cargando ...  </p>
                    }
                </div>
            </div>
        </section>
    )
}

