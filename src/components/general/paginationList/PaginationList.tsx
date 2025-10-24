import { TextAncord } from "../ancord/TextAncord"

type links = {
    text: string
    to:   string
}

interface Props {
    pagLink: links[]
}

export const PaginationList = ({pagLink}: Props) => {
    return (
        <div className="absolute top-0 -left-4 flex items-center gap-4 pr-4 border-b-1 border-stone-500">
            {
                pagLink.map( ( pag, index ) => {
                    return (
                        <span key={index} className="opacity-70 hover:opacity-100 duration-200"> <TextAncord to={pag.to} text={pag.text} /> / </span>
                    )
                } )
            }
        </div>
    )
}

