import { Card } from "@/components/ui/card"
import { SecondaryHeader } from "@/components/ui/secondary-header"

const Page = () => {
    return(
        <div>
            <SecondaryHeader label="Popular Titles" />

            <div className="flex max-w-4xl py-10 mx-auto">
                <div className="grid grid-cols-2 gap-8 w-full px-5 md:grid-cols-3 lg:grid-cols-4 lg:px-0">
                    <Card title="Popular Series" image="/assets/placeholder.png" link="/series" serie filled />
                    <Card title="Popular Movies" image="/assets/placeholder.png" link="/movies" movie filled />
                </div>
            </div>
        </div>
    )
}

export default Page