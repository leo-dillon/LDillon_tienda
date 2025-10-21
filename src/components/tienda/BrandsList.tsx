interface Props {
    brands: string[]
}

export const BrandsList = ({brands}: Props ) => {
    return (
        <ul className="mb-4">
            {
            brands.map( ( name ) => {
                return (
                    <li key={name} className="
                        flex w-full max-w-9/10 mx-auto duration-200 cursor-pointer opacity-80
                        active:opacity-50
                        hover:bg-stone-300 dark:hover:bg-stone-700 ">
                        <input name="brand" id={ name } value={ name } className=" cursor-pointer" type="checkbox" />
                        <label htmlFor={ name } className="
                            inline-block w-full py-1 pl-4 cursor-pointer
                            text-lg 
                        "> { name } </label>
                    </li>
                )
            } )
            }
        </ul>
    )
}