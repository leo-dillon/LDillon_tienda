interface Props {
    text: string
}
export const Title_h2 = ( {text}: Props ) => {
    return (
        <h2>
            { text }
        </h2>
    )
}