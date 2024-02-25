import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types/responseType";
import {IMovie} from "../interfaces/IMovie";
import {IApiRes} from "../interfaces/IApiRes";

const movieService={
    getAll:():IRes<IApiRes>=>apiService.get(urls.movies.base),
    getById:(id:number):IRes<IMovie>=>apiService.get(urls.movies.byId(id))
}

export {
    movieService
}