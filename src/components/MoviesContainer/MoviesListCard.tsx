import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../interfaces";
import {StarsRating} from "../StarsRating/StarsRating";

interface IProps extends PropsWithChildren {
    movie:IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const {id,original_title,poster_path,vote_average}=movie;
    const poster_href=`https://image.tmdb.org/t/p/w500${poster_path}`
    return (
        <div>
            <div><img src={poster_href} alt=""/></div>
            <div>{original_title}</div>
            <div>{vote_average}</div>
            <StarsRating vote_average={vote_average}/>

        </div>
    );
};

export {MoviesListCard};