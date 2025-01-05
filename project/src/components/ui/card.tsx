import Link from "next/link"

type Props = {
    title: string,
    image: string,
    filled?: boolean,
    movie?: boolean,
    serie?: boolean,
    link: string
}

export const Card = ({ title, image, filled, movie, serie, link }: Props) => {
    return(
        <Link href={link}>
            <div>
                <div className={`flex justify-center items-center w-[180px] h-[250px] bg-center bg-no-repeat ${filled ? 'bg-black/85' : 'bg-none'}`} style={{ backgroundImage: 'url('+ image +')' }}>
                    {movie &&
                        <div className="text-4xl text-white font-bold uppercase">Movies</div>                
                    }

                    {serie &&
                        <div className="text-4xl text-white font-bold uppercase">Series</div>                
                    }
                </div>

                <div className="mt-1 text-black">{title}</div>
            </div>    
        </Link>
    )
}