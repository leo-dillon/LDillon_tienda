import { useState } from "react"
import { getProduct, type Products_Variants_types } from "../../actions/products"

interface Props {
    slug: string
}

export const UseProduct = ({ slug }: Props ) => {
    const [ data    , setData    ] = useState<Products_Variants_types | []>()
    const [ loading , setLoading ] = useState<boolean>()
    const [ error   , setError   ] = useState<string>()

    getProduct({ slug })

    return { data, loading, error }
}