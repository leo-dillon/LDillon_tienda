interface Props {
  isOpen: boolean
}
export const StoreModal = ( {isOpen}: Props ) => {


  return (
    <div className={`w-full max-w-[400px] bg-stone-800 z-40 duration-500 
      ${isOpen ? "opacity-100" : "opacity-0"}
      `}
      onClick={(e) => e.stopPropagation()}
    >
      <p>ASDASDASD</p>
      <p> {isOpen.toString()} </p>
    </div>
  )
}

