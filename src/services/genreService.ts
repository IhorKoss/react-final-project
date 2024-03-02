import {IRes} from "../types";
import {IApiRes} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";
import {IApiGenreRes} from "../interfaces/IApiGenreRes";

const genreService={
    getAll:():IRes<IApiGenreRes>=>apiService.get(urls.genres.base)
}

export {
    genreService
}