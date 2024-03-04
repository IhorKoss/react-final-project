import {FC, PropsWithChildren} from "react";
import {IMovie} from "../../interfaces";
import {StarsRating} from "../StarsRating/StarsRating";
import css from './Movies.module.css'
import dark from './MoviesDark.module.css'
import {useAppContext} from "../../hook";

interface IProps extends PropsWithChildren {
    movie:IMovie
}

const MovieFullDetails: FC<IProps> = ({movie}) => {
    const {original_title,poster_path,vote_average,adult,vote_count,tagline,overview,}=movie;
    const poster_href=`https://image.tmdb.org/t/p/w500${poster_path}`
    const {theme}=useAppContext()

    return (
        <div className={theme?css.MovieDetailsContainer:dark.MovieDetailsContainer}>
            <div className={css.MovieDetailsPosterContainer}><img src={poster_href} alt="" className={css.MovieDetailsPoster}/></div>
            <div className={theme?css.MovieDetailsData:dark.MovieDetailsData}>
                <h2>{original_title}</h2>
                <h4>"{tagline?tagline:'None'}"</h4>
                <div className={adult?css.MovieDetailsAdult:css.MovieDetailsChild}>{adult?'Only adults':'For everyone'}</div>
                <div className={theme?css.Rating:dark.Rating}>
                    <div>Rates: {vote_count}</div>
                    <StarsRating vote_average={vote_average}/>
                </div>
                <div className={theme?css.MovieDetailsOverview:dark.MovieDetailsOverview}>{overview}</div>
            </div>
        </div>
    );
};

export {MovieFullDetails};