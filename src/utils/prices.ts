interface Props {
    price: number
}

export const prices = ({price}: Props) => {
    let newPrice = ''
    const num = price.toString().split('.')
    const entero  = num[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    let decimal = num[1]

    if( decimal ){
        if( parseInt(decimal) < 10 ){
            decimal = decimal + '0'
        } else if( parseInt(decimal) > 100 ) {
            decimal = decimal[0] + decimal[1]
        }
    } else {
        decimal = "00"
    }

    newPrice = entero + ',' + decimal
    return newPrice
}