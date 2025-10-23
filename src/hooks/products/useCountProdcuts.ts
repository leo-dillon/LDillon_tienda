import { useEffect, useState } from "react"
import { countProduct } from "../../actions/products"

type data = {
    pages: number[],
    products: number
}

interface Props {
    filters?: string[] 
}

export const useCountProducts = ({ filters = [] }: Props) => {
    const [ dataCountPage, setDataCountPage ] = useState<data>()
    const [ isLoading, setIsLoading ] = useState<boolean>(false)
    const [ error, setError ] = useState<string | null>(null)

    useEffect (() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const data = await countProduct({ filters })
                if( data == undefined ){
                    setDataCountPage({
                        pages: [],
                        products: 1 
                    })
                } 
                setDataCountPage({
                    pages: new Array(Math.ceil( data / 8 )).fill(0),
                    products: data
                })
            } catch (error: any) {
                setError(error?.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [filters] )

return { dataCountPage, isLoading, error}
}