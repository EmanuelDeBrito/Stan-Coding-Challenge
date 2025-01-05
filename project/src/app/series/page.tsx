import { getSeries } from "@/api/api"
import { Card } from "@/components/ui/card";
import { SecondaryHeader } from "@/components/ui/secondary-header";

const Page = async () => {
    const series = await getSeries();

    return(
        <div>
            <SecondaryHeader label="Popular Series" />

            <div className="max-w-4xl py-10 mx-auto">
                {series &&                 
                    <div className="grid grid-cols-2 gap-5 px-5 md:grid-cols-3 lg:grid-cols-4 lg:p-0">
                        {series.map((serie, key) => (
                            <Card key={key} title={serie.title} image={serie.images["Poster Art"].url} link={`/serie/${serie.title}`} />
                        ))}
                    </div>   
                } 
                {!series &&       
                    <div>Dont Found a Serie</div>                
                }
            </div>
        </div>
    )
}

export default Page