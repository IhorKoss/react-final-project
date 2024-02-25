import axios from "axios";
import {baseURL} from "../constants";

const token='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjQyYTM4ZGUxOTgyMjA5ZTc0NWYzNzU5ODY5ZGIzMSIsInN1YiI6IjY1ZDhmMWNkNTY0ZWM3MDE0OWY4MzgwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3QgNHOeZ2me1krhPzhS53rfxcqTlfixH1eaDzBAJK_w'
const apiService=axios.create({baseURL})
apiService.interceptors.request.use(request=>{
    request.headers['Authorization']=`Bearer ${token}`
    return request
})
export {apiService}