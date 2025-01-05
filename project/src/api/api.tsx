import { Feed } from "@/types/feed";
import { Movie } from "@/types/movie";
import axios from "axios"

export const getSeries = async (): Promise<Movie[]> => {
    const req = await axios.get('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json');
    const data: Feed = req.data;
    let filter = data.entries.filter(serie => (serie.releaseYear >= 2010 && serie.programType === 'series'));
    let series: Movie[] = [];

    let i = 0;
    for(i = 0; i < 21; i++){
        series.push(filter[i]);
    }

    return series
}

export const getMovies = async (): Promise<Movie[]> => {
    const req = await axios.get('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json');
    const data: Feed = req.data;
    let filter = data.entries.filter(serie => (serie.releaseYear >= 2010 && serie.programType === 'movie'));
    let series: Movie[] = [];

    let i = 0;
    for(i = 0; i < 21; i++){
        series.push(filter[i]);
    }

    return series
}