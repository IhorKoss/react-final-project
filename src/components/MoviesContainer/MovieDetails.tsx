import {FC, PropsWithChildren, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {movieService} from "../../services";
import {IMovie} from "../../interfaces";
import {StarsRating} from "../StarsRating/StarsRating";
import {MovieFullDetails} from "./MovieFullDetails";

interface IProps extends PropsWithChildren {

}

const MovieDetails: FC<IProps> = () => {
    const {id}=useParams();
    const [movie, setMovie] = useState<IMovie>()

    useEffect(() => {
        movieService.getById(id).then(({data})=>setMovie(data))
    }, []);
    console.log(movie)
    // const poster_href=`https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
        <div>
            {movie&&<MovieFullDetails movie={movie}/>}
        </div>
    );
};

export {MovieDetails};