import { useState } from "react"
import type { Products_Variants_types } from "../../actions/products"
import { Title_h2 } from "../general/H/Title_h2"
import { prices } from "../../utils/prices"
import { ProductDescripton } from "./ProductDescripton"
import { RandomProducts } from "../home/products/RandomProducts"

interface Props {
    data: Products_Variants_types
}
export const ProductData = ({ data }: Props) => {
    const [ varSelect, setVarSelect ] = useState<number>(0)
    console.log(data)
    return (
        <article className="w-full max-w-[1000px] mx-auto mt-8 flex flex-col gap-12">
            <div className="flex gap-8">
                <div className="w-full flex items-start gap-4">
                    <ul className="
                        max-h-[300px] pr-2 overflow-y-scroll 
                        [&::-webkit-scrollbar]:w-2
                        [&::-webkit-scrollbar-track]:rounded-full
                        [&::-webkit-scrollbar-track]:bg-gray-100
                        [&::-webkit-scrollbar-thumb]:rounded-full
                        [&::-webkit-scrollbar-thumb]:bg-gray-300
                        dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
                        flex flex-col gap-3">
                        {
                            data.images.map( ( img, index ) => {
                                return (
                                    <li>
                                        <img 
                                            className="w-12 rounded duration-200 
                                                hover:-translate-y-1 cursor-pointer
                                            "
                                            key={index}
                                            src={img} 
                                            alt={`Imagen número ${index}`} 
                                            title={`Imagen número ${index}`} 
                                        />
                                    </li>
                                )
                            } )
                        }
                    </ul>
                    <div className="relative">
                        <img 
                            className="w-full max-w-[500px] max-h-[400px] rounded"
                            src={data.images[0]} 
                            alt={`Imagen del producto`} 
                        />
                        <span 
                            className={`absolute top-1 left-1 w-8 h-8 rounded-full border-1 border-stone-600/50`}
                            style={{ backgroundColor: data.variants[varSelect].color }}
                        ></span>
                    </div>
                </div>
                <div className="w-full space-y-4">
                    <p className="text-xl opacity-60"> { data.brand } </p>
                    <span className="inline-block font-bold"><Title_h2 text={data.name} /></span>
                    <p className="text-3xl"> { prices({ price: data.variants[varSelect].price }) } $ </p>
                    <hr className="opacity-30"/>
                    <ul>
                        <small className="text-md">Caracteristicas generales: </small>
                        {
                            data.features.map( ( text, index ) => {
                                return (
                                    <li className="ml-4 text-sm font-thin opacity-70 list-disc" key={index}>
                                        { text }
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <hr className="opacity-30"/>
                    <ul className="flex flex-row gap-3">
                        {
                            data.variants.map( ( vari, index ) => {
                                return(
                                    <span 
                                        key={vari.id} 
                                        className={`w-4 h-4 rounded-full cursor-pointer hover:scale-120 duration-200`}
                                        style={{ backgroundColor: vari.color }}
                                        onClick={() => {setVarSelect( index )}}
                                    ></span>
                                )
                            } )
                        }
                    </ul>
                    
                </div>
            </div>
            <div className="w-full space-y-4">
                <Title_h2 text="Descripción" />
                <ProductDescripton content={data.description}/>
            </div>
            <RandomProducts text="Tambien te puede interezar    "/>
        </article>
  )
}

