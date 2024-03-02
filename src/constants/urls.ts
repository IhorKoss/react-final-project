const baseURL='https://api.themoviedb.org/3'

const discover='/discover'
const movie='/movie'
const search='/search'
const genre='/genre'
const list='/list'

const urls={
    movies:{
        base:`${discover}${movie}`,
        byId:(id:string):string=>`${movie}/${id}`,
        search:`${search}${movie}`
    },
    genres:{
        base:`${genre}${movie}${list}`,
    }
}

export {
    baseURL, urls
}