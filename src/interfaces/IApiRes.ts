import {IMovie} from "./IMovie";

export interface IApiRes{
    page:number,
    results:IMovie[],
    total_pages:number,
    total_results:number
}