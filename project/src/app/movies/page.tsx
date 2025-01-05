import { getMovies, getSeries } from "@/api/api"
import { Card } from "@/components/ui/card";
import { SecondaryHeader } from "@/components/ui/secondary-header";

const Page = async () => {
    const movies = await getSeries();

    return(
        <div>
            <SecondaryHeader label="Popular Movies" />

            <div className="max-w-4xl py-10 mx-auto">
                {movies &&                 
                    <div className="grid grid-cols-2 gap-5 px-5 md:grid-cols-3 lg:grid-cols-4 lg:p-0">
                        {movies.map((movie, key) => (
                            <Card key={key} title={movie.title} image={movie.images["Poster Art"].url} link={`/serie/${movie.title}`} />
                        ))}
                    </div>   
                } 
                {!movies &&       
                    <div>Dont Found a Movie</div>                
                }
            </div>
        </div>
    )
}

export default Page