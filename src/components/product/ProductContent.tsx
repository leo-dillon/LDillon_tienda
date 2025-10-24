import { useState } from "react"
import type { Products_Variants_types } from "../../actions/products"
import { Title_h2 } from "../general/H/Title_h2"
import { ProductDescripton } from "./ProductDescripton"
import { ProductImgs } from "./ProductImgs"
import { ProductInfo } from "./ProductInfo"

interface Props {
    data: Products_Variants_types
}
export const ProductContent = ({ data }: Props) => {
    const [ variantSelect, setVarSelect ] = useState<number>(0)

    const changeVariantSelecter = (x: number ) => {
        setVarSelect(x)
    }

    return (
        <article className="w-full max-w-[1000px] mx-auto mt-8 flex flex-col gap-12">
            <div className="flex gap-8">
                <ProductImgs imgs={data.images} variantColor={data.variants[variantSelect].color} />
                <ProductInfo productData={data} variantSelect={variantSelect} changeVariant={changeVariantSelecter}/>
            </div>
            <div className="w-full space-y-4">
                <Title_h2 text="Descripción" />
                <ProductDescripton content={data.description}/>
            </div>
        </article>
  )
}

