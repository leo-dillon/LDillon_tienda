import { useEffect, useState } from "react"
import { useProducts } from "../../hooks"
import { brandsFound } from "../../utils/products/brandsFound"
import { Filter } from "./Filter"
import { ProductsList } from "./ProductsList"
import { Pagination } from "./Pagination"

export const AllProducts = () => {
    const [ brands,     setBrands   ] = useState<string[]>()
    const [ filters,    setFilters  ] = useState<string[]>([])
    const [ page,       setPage     ] = useState<number>(1)
    const { dataProducts, isLoading, error } = useProducts({ filters, page })
    
    const resetfilter = () => {
        setFilters([])
    }

    const submit = ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        const fromData = new FormData(e.currentTarget)
        const formBrands = fromData.getAll('brand') as string[]
        setFilters(formBrands)
    }

    const changePage = (x: number) => {
        setPage(x)
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
            flex flex-col gap-6
            text-stone-800 
            dark:text-stone-200
        ">
            <div className="flex gap-6">
                <Filter brands={brands} submit={submit} filters={filters} resetfilter={resetfilter}/>
                {
                    isLoading
                    ? <p className="text-5xl"> Cargando!!!! </p>
                    : ( dataProducts ) 
                        ? <ProductsList products={dataProducts}/>
                        : error
                }
            </div>
            <Pagination page={page} changePage={changePage} />
        </section>
    )
}