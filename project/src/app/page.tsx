import { Card } from "@/components/ui/card"
import { SecondaryHeader } from "@/components/ui/secondary-header"

const Page = () => {
    return(
        <div>
            <SecondaryHeader label="Popular Titles" />

            <div className="flex max-w-3xl py-10 mx-auto">
                <div className="flex items-center gap-5">
                    <Card title="Popular Series" image="/assets/placeholder.png" link="" serie filled />
                    <Card title="Popular Movies" image="/assets/placeholder.png" link="" movie filled />
                </div>
            </div>
        </div>
    )
}

export default Page