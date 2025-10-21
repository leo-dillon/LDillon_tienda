import { Banner } from "../home/banner/Banner"
import { NewSlatter } from "../home/banner/NewSlatter"
import { FeatureGrid } from "../home/FeatureGrid"

export const Home = () => {
    return(
        <div className="flex flex-col gap-6">
            <Banner />

            <FeatureGrid />

            <NewSlatter img={0}/>
        </div>
    )
}