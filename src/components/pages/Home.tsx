import { Banner } from "../banner/Banner"
import { NewSlatter } from "../banner/NewSlatter"
import { FeatureGrid } from "../section/FeatureGrid"

export const Home = () => {
    return(
        <div className="flex flex-col gap-6">
        <Banner />

        <FeatureGrid />

        <NewSlatter img={0}/>
        </div>
    )
}