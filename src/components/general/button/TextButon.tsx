interface Props{
    text: string,
    onClick: () => void
}

export const TextButton = ({ text, onClick }: Props ) => {
    return (
        <button 
            onClick={() => onClick()} 
            className="w-fit px-4 py-2 mx-auto
                bg-zinc-800 rounded duration-100 cursor-pointer
                flex items-center justify-center
                text-stone-200 font-semibold
                hover:scale-105 hover:opacity-90
                active:scale-90 active:translate-y-1.5
            "
            title={ text } 
            aria-label={ text }  
        >
            {text}
        </button>
    )
}