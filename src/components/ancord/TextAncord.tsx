import { Link } from "react-router-dom"

interface Props {
    text: string,
    to: string
}

export const TextAncord = ({text, to}: Props) => {
    return (
        <Link to={to} className="cursor-pointer
            text-stone-800
            dark:text-stone-200
            hover:underline
        ">
            { text }
        </Link>
    )
}