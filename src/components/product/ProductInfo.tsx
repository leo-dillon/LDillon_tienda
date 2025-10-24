import type { Products_Variants_types } from "../../actions/products"

import plus from "/icons/plus.svg"
import darkPlus from "/icons/dark-plus.svg"
import minus from "/icons/minus.svg"
import darkMinus from "/icons/dark-minus.svg"

import { prices } from "../../utils/prices"
import { InconButton } from "../general/button/IconButon"
import { Title_h2 } from "../general/H/Title_h2"
import { useEffect, useState } from "react"
import { TextButton } from "../general/button/TextButon"
import { mostrar } from "../../utils/mostrar"

interface Props {
    productData: Products_Variants_types,
    variantSelect: number,
    changeVariant: (x: number) => void
}

export const ProductInfo = ({ productData, variantSelect, changeVariant }: Props) => {
    const [ count, setCount ] = useState<number>(0)

    const changeCount = ( x: number ) => {
        const newCount = count + x
        if( newCount > productData.variants[variantSelect].stock ){
            return
        }
        if( newCount < 0) {
            return
        }
        setCount( (prev) => prev + x )
    }

    const addCart = () => {
        if( count <= 0 ){
            alert("Debes seleccionar un producto para agregar")
        }
        mostrar("addCart --- ", "pending cachin")
    }

    const buyNow = () => {
        if( count <= 0 ){
            alert("Debes seleccionar un producto para agregar")
        }
        mostrar( "buyNow ---", "CACHIN" )
    }

    useEffect( ()=> {
        setCount(0)
    },[variantSelect])

    return (
        <div className="w-full space-y-4">
            <p className="text-xl opacity-60"> {productData.brand} </p>
            <span className="inline-block font-bold"><Title_h2 text={productData.name} /></span>
            <p className="text-3xl"> {prices({ price: productData.variants[variantSelect].price })} $ </p>
            <hr className="opacity-30" />
            <ul>
                <small className="text-md">Caracteristicas generales: </small>
                {
                    productData.features.map((text, index) => {
                        return (
                            <li className="ml-4 text-sm font-thin opacity-70 list-disc" key={index}>
                                {text}
                            </li>
                        )
                    })
                }
            </ul>
            <hr className="opacity-30" />
            <ul className="flex flex-row gap-3">
                {
                    productData.variants.map((vari, index) => {
                        return (
                            <span
                                key={vari.id}
                                className={`w-4 h-4 rounded-full cursor-pointer hover:scale-120 duration-200`}
                                style={{ backgroundColor: vari.color }}
                                onClick={() => { changeVariant(index) }}
                            ></span>
                        )
                    })
                }
            </ul>
            <div>
                <p className="text-md">Stock actual: <span className="opacity-70"> { productData.variants[variantSelect].stock } </span> </p>
                <div className="flex items-center gap-4">
                    <InconButton text="Quitar 1" img={darkMinus} darkImg={minus} onClick={() => changeCount(-1)} />
                    <span> { count } </span>
                    <InconButton text="Sumar 1" img={darkPlus} darkImg={plus} onClick={() => changeCount(1)} />
                </div>
                <div className="w-fit flex justify-start items-center gap-4">
                    <TextButton text="Agregar al carrito" onClick={() => addCart()}/>
                    <TextButton text="Comprar Ahora" onClick={() => buyNow()}/>
                </div>
            </div>

        </div>
    )
}

