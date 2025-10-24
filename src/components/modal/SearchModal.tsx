interface Props {
  isOpen: boolean
}

export const SearchModal = ({ isOpen }: Props) => {
  return (
    <div className={`w-full max-w-[400px] bg-stone-800 z-40 transition-transform duration-500 ease-in-out
      ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
      onClick={(e) => e.stopPropagation()}
    >
      <p>ASDASDASD</p>
    </div>
  )
}

