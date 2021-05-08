import axios from "axios";

export function covidApi(){
    return(dispatch)=>{
        return axios.get('https://covidnigeria.herokuapp.com/api')
               .then(response => {dispatch(getData(response.data.states) ) })
            }
}

export function getData(data){
    return{
        type:'callData',
        data:data
    }
}