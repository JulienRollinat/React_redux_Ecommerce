import axios from 'axios'

export function getAllProducts(){
    return axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((res)=>{
            return res;
        })
        .catch((err)=>{
            console.log('error', err);
        })
}