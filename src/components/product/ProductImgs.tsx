interface Props {
    imgs: string[]
    variantColor: string
}

export const ProductImgs = ({ imgs, variantColor }: Props) => {
    return (
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
                    imgs.map( ( img, index ) => {
                        return (
                            <li key={index}>
                                <img 
                                    className="w-12 rounded duration-200 
                                        hover:-translate-y-1 cursor-pointer
                                    "
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
                    src={imgs[0]} 
                    alt={`Imagen del producto`} 
                />
                <span 
                    className={`absolute top-1 left-1 w-8 h-8 rounded-full border-1 border-stone-600/50`}
                    style={{ backgroundColor: variantColor }}
                ></span>
            </div>
        </div>
    )
}

