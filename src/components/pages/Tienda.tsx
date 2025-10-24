import { Title_h1 } from "../general/H/Ttile_h1"
import { PaginationList } from "../general/paginationList/PaginationList"
import { AllProducts } from "../tienda/AllProducts"

export const Tienda = () => {
     const paginationInfo = [
        {
            to: "/",
            text: "Ir al Inicio"
        }
    ]

    return (
        <section className="relative w-full max-w-[1400px] mx-auto pt-12 mt-6
            flex flex-col gap-6
            text-stone-800 
            dark:text-stone-200
        ">
            <PaginationList pagLink={paginationInfo}/>
            <div className="flex justify-center mt-8 mb-12">
                <Title_h1 text="Nuestra selección de Celulares" />
            </div>
            <AllProducts />
        </section>
    )
}