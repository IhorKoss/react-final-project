import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {StarsRating} from "../StarsContainer/StarsRating";
import css from './Movies.module.css'
import dark from './MoviesDark.module.css'
import no_img from '../ImagesContainer/imgnotavailable.png'
import {useAppSelector} from "../../hook";

interface IProps extends PropsWithChildren {
    movie:IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const {id,original_title,poster_path,vote_average,release_date}=movie;
    const poster_href=`https://image.tmdb.org/t/p/w500${poster_path}`
    const{theme}=useAppSelector(state => state.theme)
    const navigate = useNavigate()
    return (
        <div className={theme?css.MovieCard:dark.MovieCard}>
            <div onClick={()=>navigate(`/movies/${id.toString()}`)} className={css.PosterContainer}><img src={poster_path?poster_href:no_img} alt={original_title} className={css.Poster}/></div>
            <h4>{original_title}</h4>
            <div className={theme?css.MovieCardRelease:dark.MovieCardRelease}>Release: {release_date.replaceAll('-','.')}</div>
            <StarsRating vote_average={vote_average}/>
        </div>
    );
};

export {MoviesListCard};