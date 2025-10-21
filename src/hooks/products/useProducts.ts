import { useEffect, useState } from "react"
import { getProducts, type Products_Variants_types } from "../../actions/products"


export const useProducts = ({ filters = [] }: { filters?: string[] }) => {
    const [ dataProducts, setDataProducts ] = useState<Products_Variants_types[]>()
    const [ isLoading, setIsLoading ] = useState<boolean>(false)
    const [ error, setError ] = useState<string | null>(null)

    useEffect( () => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const data = await getProducts({ filters })

                if(data == undefined) setDataProducts([])
                
                setDataProducts(data)
                

            } catch (err: any) {
                setError( err?.message )
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    },[filters])

    return { dataProducts, isLoading, error }
}