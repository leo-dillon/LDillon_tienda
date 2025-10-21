import { Title_h1 } from "../H/Ttile_h1"
import { AllProducts } from "../section/products/AllProducts"

export const Tienda = () => {
    


    return (
        <div className="">
            <div className="flex justify-center mt-8 mb-12">
                <Title_h1 text="Nuestra selección de Celulares" />
            </div>
            <AllProducts />
        </div>
    )
}