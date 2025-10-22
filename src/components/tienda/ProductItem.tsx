import { Link } from "react-router-dom"
import type { Products_Variants_types } from "../../actions/products"
import { prices } from "../../utils/prices"
import { useState } from "react"

interface Props {
    product: Products_Variants_types
}

export const ProductItem = ({ product }: Props) => {
    const [ color, setColor ] = useState<string>(product.variants[0].color)
    
    return(
        <li key={product.id}
            className="
            relative w-full max-w-[280px] px-3 py-2 duration-200
            bg-stone-600/20 rounded-xl
            hover:bg-stone-600/40
            flex flex-col gap-3
        ">
            <img className="w-full rounded-2xl" src={product.images[0]} alt="" />
            <h2 className="text-xl text-center font-semibold"> {product.name} </h2>
            <div className="flex flex-row justify-between">
                <p className="opacity-80"> $ { prices({ price: product.variants[0].price })  } </p>
                <div className="flex flex-row gap-2">
                    {
                    product.variants.map( ( vari ) => {
                        return(
                            <span 
                                key={vari.id} 
                                className={`w-4 h-4 rounded-full cursor-pointer hover:scale-120 duration-200`}
                                style={{ backgroundColor: vari.color }}
                                onClick={() => {setColor(vari.color)}}
                            ></span>
                        )
                    } )
                    }
                </div>
            </div>
            <Link to={"/producto/" + product.id} className="w-full bg-stone-700 py-2 text-center rounded" > Saber Más </Link>
            <span 
                className={`absolute top-1 left-1 w-8 h-8 rounded-full cursor-pointer border-1 border-stone-600/50`}
                style={{ backgroundColor: color }}
            ></span>
        </li>
    )
}