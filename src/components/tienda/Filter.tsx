import { TextButton } from "../general/button/TextButon"
import { BrandsList } from "./BrandsList"

interface Props {
    brands: string[] | undefined,
    submit: (e: React.FormEvent<HTMLFormElement>) => void,
    filters: string[],
    resetfilter: () => void
}
export const Filter = ({ brands, submit, filters, resetfilter }: Props) => {
    return (
        <div className="
            w-full max-w-[300px] px-2 h-fit
            border-1 border-stone-300 dark:border-stone-700 rounded-xl 
        ">
            <h3 className="text-2xl font-semibold flex justify-center py-3">Filtros</h3>
            <form action="" className="border-t-1 border-stone-300 dark:border-stone-700 py-2" onSubmit={(e) => submit(e)}>
                <p className="text-xl font-semibold mb-4 ml-2"> { filters.length > 0 ? "Marcas Seleccionadas": "Marcas" } : </p>
                { 
                    brands 
                        ? <BrandsList brands={brands} />
                        : ""
                }   
                <button 
                    type="submit"
                    className="w-full py-2 cursor-pointer duration-200
                    bg-stone-200 rounded-xl
                    dark:bg-stone-900
                    text-xl font-semibold
                    hover:opacity-80
                    "
                > 
                    Buscar 
                </button>
                { 
                    (filters.length > 0)
                    ? 
                    <div className="mt-2 flex justify-start">
                        <TextButton text="Eliminar filtros" onClick={resetfilter} />
                    </div>
                    : "" 
                }
            </form>
        </div>
    )
}