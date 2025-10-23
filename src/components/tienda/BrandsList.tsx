export const BrandsList = ( ) => {
    const totalBrands: string[] = [ "Samsung", "Apple", "Xiaomi", "Honor", "Realme", "Huawei"]
    return (
        <ul className="mb-4">
            {
            totalBrands.map( ( name ) => {
                return (
                    <li key={name} className={
                        `flex w-full max-w-9/10 mx-auto duration-200 cursor-pointer opacity-80
                        active:opacity-50
                        hover:bg-stone-300 dark:hover:bg-stone-700`}>
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