interface Props {
    text: string
}
export const Title_h2 = ( {text}: Props ) => {
    return (
        <h2 className="text-3xl text-stone-200 underline underline-offset-2 decoration-stone-400">
            { text }
        </h2>
    )
}