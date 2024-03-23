import {FC, PropsWithChildren, useEffect} from "react";
import {useParams} from "react-router-dom";

import {MovieFullDetails} from "./MovieFullDetails";
import {movieActions} from "../../store";
import {useAppDispatch, useAppSelector} from "../../hook";

interface IProps extends PropsWithChildren {

}

const MovieDetails: FC<IProps> = () => {
    const {id}=useParams();
    const{movieById}=useAppSelector(state=>state.movies)
    const dispatch=useAppDispatch()

    useEffect(() => {
        dispatch(movieActions.resetMovieById())
        dispatch(movieActions.getById({id}))
    }, []);

    return (
        <div>
            {movieById&&<MovieFullDetails movie={movieById}/>}
        </div>
    );
};

export {MovieDetails};