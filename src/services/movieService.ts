import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types/responseType";
import {IApiRes} from "../interfaces/IApiRes";
import {IMovie} from "../interfaces";

const movieService={
    getAll:(page:string ='1'):IRes<IApiRes>=>apiService.get(urls.movies.base, {params:{page}}),
    getById:(id:string):IRes<IMovie>=>apiService.get(urls.movies.byId(id)),
    search:(query:string, page:string ='1'):IRes<IApiRes>=>apiService.get(urls.movies.search, {params:{query,page}}),
    byGenre:(with_genres:string, page:string ='1'):IRes<IApiRes>=>apiService.get(urls.movies.base, {params:{page,with_genres}})
}

export {
    movieService
}