const baseURL='https://api.themoviedb.org/3'

const discover='/discover'
const movie='/movie'
const search='/search'
const genre='/genre'
const list='/list'

const urls={
    movies:{
        base:`${discover}${movie}`,
        byId:(id:number):string=>`${movie}/${id}`
    },
    genres:{
        base:`${genre}${movie}${list}`,
        byId:(id:number):string=>`${genre}/${id}`
    }
}

export {
    baseURL, urls
}