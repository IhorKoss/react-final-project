import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types/responseType";
import {IMovie} from "../interfaces/IMovie";
import {IApiRes} from "../interfaces/IApiRes";

const movieService={
    getAll:(page:string ='1'):IRes<IApiRes>=>apiService.get(urls.movies.base, {params:{page}}),
    getById:(id:number):IRes<IApiRes>=>apiService.get(urls.movies.byId(id)),
    search:(query:string, page:string ='1'):IRes<IApiRes>=>apiService.get(urls.movies.search, {params:{query,page}}),
}

export {
    movieService
}