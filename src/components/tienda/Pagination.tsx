import { useCountPages } from "../../hooks/products/useCountPages"
import { InconButton } from "../general/button/IconButon"

import arrow from "/icons/arrow-narrow-up.svg"
import darkArrow from "/icons/dark-arrow-narrow-up.svg"

interface Props {
    page: number,
    changePage: (x: number) => void
}


export const Pagination = ({ page, changePage }: Props) => {
    const { dataCountPage, isLoading, error } = useCountPages()

    const previousPage = () => {
        if( page > 1 ){
            const newpage = page - 1
            changePage( newpage )
        }
    }
    const nextPage = (maxPage: number) => {
        if( page < maxPage ){
            const newpage = page + 1
            changePage( newpage )
        }
    }
    return (
        <div className="w-fit mx-auto flex flex-row flex-nowrap">
            <div className={ `-rotate-90` }>
                <InconButton text="Volver atras" img={darkArrow} darkImg={arrow} onClick={previousPage}/>
            </div>
            <div className="flex flex-row flex-nowrap items-center flex-1">
                {
                    isLoading 
                     ? <p>cargando ...</p>
                     : dataCountPage 
                        ? dataCountPage.map( (data, index) => {
                            return (
                                <span 
                                    className="w-4 h-4 flex justify-center items-center cursor-pointer
                                        hover:scale-110
                                        active:scale-90 active:-translate-y-0.5
                                    " 
                                    key={index}
                                    onClick={() => changePage(index+1)}
                                > 
                                    {index + 1} 
                                </span>
                            )
                        } )
                        : error            
                     
                }
            </div>
            <div className={ `${(page == 1) ? "disabled:opacity-50" : ""} rotate-90` }>
                <InconButton<number> text="Volver atras" img={darkArrow} darkImg={arrow} onClick={() => nextPage((dataCountPage) ? dataCountPage.length : 1)}/>
            </div>
        </div>
    )
}