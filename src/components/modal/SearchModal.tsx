import darkSearch from "/icons/dark-search.svg"

interface Props {
    isOpen: boolean
}

export const SearchModal = ({ isOpen }: Props) => {
    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget as HTMLFormElement)
        const text = formData.get('search')
        console.log(text)
    }

    return (
        <div className={`w-full max-w-[400px] pl-4 py-4 pb-2 pr-8 bg-stone-800 z-40 transition-transform duration-500 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
            onClick={(e) => e.stopPropagation()}
        >
            <form className="flex" action="GET" onSubmit={(e) => submit(e)}>
                <button
                    className="px-3 bg-stone-300 cursor-pointer rounded-l-xl group" 
                >
                    <img 
                        className="group-hover:scale-110 group-active:translate-y-1 duration-150"
                        src={darkSearch} alt="Imagen de busqueda" title="Buscar"
                    />
                </button>
                <input 
                    type="text" 
                    name="search"
                    id="search"
                    placeholder="iPhone 14 Pro Max"
                    className=" w-full p-2 bg-stone-300 rounded-r-xl"
                />
            </form>
        </div>
    )
}

