import { getProductsByName, type Products_Variants_types } from "../../actions/products"

import { useState } from "react"

export const useProductByName = ( text: string ) => {
    const [ data, setData ] = useState<Products_Variants_types[]>()
    const [ isLoading, setIsLoading ] = useState<boolean>()
    const [ error, setError ] = useState<string>()

    try {
        setIsLoading(true)
        const fetchData = async () => {
            const data = await getProductsByName(text)
        }
        fetchData()
    } catch (error) {
        
    }
}