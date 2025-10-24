import { SearchModal } from "./SearchModal"
import { StoreModal } from "./StoreModal"

type ModalType = {
  text: string,
  isOpen: boolean
}

interface Props {
    isOpen: ModalType
    changeIsOpen: (txt: string) => void
}


export const Modal = ({isOpen, changeIsOpen}: Props ) => {
    const content = () => {
        switch (isOpen.text) {
            case "store":
                return <StoreModal isOpen={isOpen.isOpen} />
                break
            case "search":
                return <SearchModal isOpen={isOpen.isOpen} />
                break
            default:
                break;
        }
    }

    return (
        <div 
            className={`
                fixed top-0 w-screen h-screen bg-stone-900/20 duration-200
                ${
                    isOpen.isOpen 
                    ? "left-0 flex justify-end z-10" 
                    : "left-full"}
            `}
            onClick={ (e) => { changeIsOpen(""); e.stopPropagation()} }
        >
            { content() }
        </div>
    )
}

