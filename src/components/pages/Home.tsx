import { Banner } from "../home/banner/Banner"
import { NewSlatter } from "../home/banner/NewSlatter"
import { FeatureGrid } from "../home/FeatureGrid"
import { LastProducts } from "../home/products/LastProducts"
import { RandomProducts } from "../home/products/RandomProducts"

export const Home = () => {
    return(
        <div className="flex flex-col gap-24">
            <Banner         />
            <FeatureGrid    />
            <LastProducts   />
            <RandomProducts text="Productos Destacados"/>
            <RandomProducts text="Buscabas esto..."/>
            <NewSlatter     />
        </div>
    )
}