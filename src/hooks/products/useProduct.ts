import { useEffect, useState } from "react"
import { getProduct, type Products_Variants_types } from "../../actions/products"
import { mostrar } from "../../utils/mostrar"

interface Props {
    slug: string
}

export const UseProduct = ({ slug }: Props ) => {
    const [ data    , setData    ] = useState<Products_Variants_types[]>()
    const [ loading , setLoading ] = useState<boolean>()
    const [ error   , setError   ] = useState<string>()

    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const data = await getProduct({ slug })
                if( data == undefined ) setData([])
                setData(data)
            } catch (error: any) {
                setError(error.message)
                mostrar('UseProduct ---', error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()

    }, [slug])

    return { data, loading, error }
}