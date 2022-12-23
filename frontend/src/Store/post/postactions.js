
import axios from "axios"


export const getposts = () => async (dispatch) => {
    dispatch({type:"POST_LOADING",payload:[]})
try{
    let {data} = await axios.get('http://localhost:8080/post')
    data = data.reverse()
    dispatch({type:"GET_POST",payload:data})

}catch(err){
    dispatch({type:"POST_ERROR",payload:[]})
}
}

export const getsingleposts = (id) => async (dispatch) => {
    dispatch({type:"POST_LOADING",payload:[]})
try{
    let {data} = await axios.get(`http://localhost:8080/post/${id}`)
  
    dispatch({type:"GET_POST",payload:data})

}catch(err){
    dispatch({type:"POST_ERROR",payload:[]})
}
}

export const deletesinglepost = (id) => async (dispatch) => {
    dispatch({type:"POST_LOADING",payload:[]})
try{
    let {data} = await axios.delete(`http://localhost:8080/post/${id}`)
  console.log(data)
    dispatch(getposts())

}catch(err){
    dispatch({type:"POST_ERROR",payload:[]})
}
}

export const newpost = (input)=>async(dispatch)=>{
    dispatch({type:"POST_LOADING",payload:[]})
    console.log(input)
    try{
        let {data} = await axios.post('http://localhost:8080/post',input)
        // dispatch({type:"GET_POST",payload:data})
        dispatch(getposts())
    }catch(err){
        dispatch({type:"POST_ERROR",payload:[]})
    }
}
