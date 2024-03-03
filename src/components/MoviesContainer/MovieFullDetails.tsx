import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../interfaces";
import {StarsRating} from "../StarsRating/StarsRating";
import css from './Movies.module.css'
interface IProps extends PropsWithChildren {
    movie:IMovie
}

const MovieFullDetails: FC<IProps> = ({movie}) => {
    const {id,original_title,poster_path,vote_average,adult,release_date,original_language,vote_count,tagline,overview,}=movie;
    const poster_href=`https://image.tmdb.org/t/p/w500${poster_path}`

    return (
        <div className={css.MovieDetailsContainer}>
            <div className={css.MovieDetailsPosterContainer}><img src={poster_href} alt="" className={css.MovieDetailsPoster}/></div>
            <div className={css.MovieDetailsData}>
                <h2>{original_title}</h2>
                <h4>"{tagline}"</h4>
                <div className={css.Rating}>
                    <div>Rates:{vote_count}</div>
                    <StarsRating vote_average={vote_average}/>
                </div>
                <div className={css.MovieDetailsOverview}>{overview}</div>
            </div>
        </div>
    );
};

export {MovieFullDetails};