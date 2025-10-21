import { useEffect, useState } from "react"
import { useProducts } from "../../../hooks"
import { brandsFound } from "../../../utils/products/brandsFound"
import { Filter } from "./Filter"
import { ProductsList } from "../../list/ProductsList"

export const AllProducts = () => {
    const [ brands, setBrands ] = useState<string[]>()
    const [ filters, setFilters ] = useState<string[]>([])
    const { dataProducts, isLoading, error } = useProducts({ filters })
    
    const resetfilter = () => {
        setFilters([])
    }

    const submit = ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        const fromData = new FormData(e.currentTarget)
        const formBrands = fromData.getAll('brand') as string[]
        setFilters(formBrands)
    }

    
    useEffect( () => {
        let bra
        if( dataProducts ){
            bra = brandsFound({ dataProducts })
            setBrands(bra) 
        } 
    }, [dataProducts] )

    return (
        <section className="w-full max-w-[1400px] mx-auto
            flex flex-row gap-6
            text-stone-800 
            dark:text-stone-200
        ">
            <Filter brands={brands} submit={submit} filters={filters} resetfilter={resetfilter}/>
            {
                isLoading
                ? <p className="text-5xl"> Cargando!!!! </p>
                : ( dataProducts ) 
                    ? <ProductsList products={dataProducts}/>
                    : error
            }
        </section>
    )
}