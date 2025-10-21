import type { Products_Variants_types } from "../../actions/products"

interface Props {
    dataProducts: Products_Variants_types[] | []
}
export const brandsFound = ({ dataProducts }: Props) => {
    const brands: string[] = []
    if( dataProducts.length == 0 ) return brands
    dataProducts.forEach( (prod) => {
        if( !brands.includes(prod.brand) ){
            brands.push(prod.brand)
        }
    } )
    return brands
}