import { useEffect, useState } from "react"
import { countProduct } from "../../actions/products"

export const useCountPages = () => {
    const [ dataCountPage, setDataCountPage ] = useState<number[]>()
    const [ isLoading, setIsLoading ] = useState<boolean>(false)
    const [ error, setError ] = useState<string | null>(null)

    useEffect (() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                let data = await countProduct()
                if( data == undefined ) data = 1
                setDataCountPage(new Array(data).fill(0))
            } catch (error: any) {
                setError(error?.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [] )

    return { dataCountPage, isLoading, error}
}