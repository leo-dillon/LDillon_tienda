import { useEffect, useState } from "react"
import { getLastProducts, type Products_Variants_types } from "../../actions/products"

export const useLastProducts = () => {
    const [ dataProducts, setDataProducts ] = useState<Products_Variants_types[]>()
    const [ isLoading, setIsLoading ] = useState<boolean>(false)
    const [ error, setError ] = useState<string | null>(null)

    useEffect( () => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const data = await getLastProducts()

                if(data == undefined) setDataProducts([])
                
                setDataProducts(data)
                

            } catch (err: any) {
                setError( err?.message )
                 setDataProducts([])
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    },[])

    return { dataProducts, isLoading, error }
}