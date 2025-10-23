import { useEffect, useState } from "react"
import { useProducts } from "../../hooks"
import { Filter } from "./Filter"
import { ProductsList } from "./ProductsList"
import { Pagination } from "./Pagination"
import { useSearchParams } from "react-router-dom"
import { useCountProducts } from "../../hooks/products/useCountProdcuts"

export const AllProducts = () => {
    const [searchParams, setSearchParams] = useSearchParams();


    const [ filters,    setFilters  ] = useState<string[]>([])
    const [ page,       setPage     ] = useState<number>(1)
    const { dataProducts, isLoading, error } = useProducts({ filters, page })
    const { dataCountPage } = useCountProducts({ filters })

    let cantidad: number = ( dataCountPage?.products ) ? dataCountPage?.products : 0

    
    const resetfilter = () => {
        changeFilters([])
    }

    const submit = ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        const fromData = new FormData(e.currentTarget)
        const formBrands = fromData.getAll('brand') as string[]
        changeFilters(formBrands)
    }

    const changePage = (x: number) => {
        setPage(x)
        setSearchParams({ page: x.toString(), brands: filters.join('+')  })
    }

    const changeFilters = ( filt: string[] ) => {
        setFilters(filt)
        setPage(1)
        setSearchParams({ page: "1", brands: filt.join('+') })
    }
    
    return (
        <section className="w-full max-w-[1400px] mx-auto
            flex flex-col gap-6
            text-stone-800 
            dark:text-stone-200
        ">
            <div className="flex gap-6">
                <Filter submit={submit} filters={filters} resetfilter={resetfilter}/>
                {
                    isLoading
                    ? <p className="text-5xl"> Cargando!!!! </p>
                    : ( dataProducts ) 
                        ? <ProductsList products={dataProducts} cantidad={dataCountPage?.products || 0}/>
                        : error
                }
            </div>
            <Pagination page={page} changePage={changePage} filters={filters}/>
        </section>
    )
}