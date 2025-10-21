import { useEffect, useState } from "react"
import { getProducts, type Products_Variants_types } from "../../actions/products"

interface Props {
    filters?: string[],
    page?: number,

}

export const useProducts = ({ filters = [], page = 1 }: Props) => {
    const [ dataProducts, setDataProducts ] = useState<Products_Variants_types[]>()
    const [ isLoading, setIsLoading ] = useState<boolean>(false)
    const [ error, setError ] = useState<string | null>(null)

    useEffect( () => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const data = await getProducts({ filters, page })

                if(data == undefined) setDataProducts([])
                
                setDataProducts(data)
                

            } catch (err: any) {
                setError( err?.message )
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    },[filters, page])

    return { dataProducts, isLoading, error }
}