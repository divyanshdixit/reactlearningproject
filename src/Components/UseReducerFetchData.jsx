import React, {useEffect, useReducer} from 'react'
import axios from 'axios';

// fetching data from api
// show fetched data

// reducer

// case : FETCH_REQUEST
// FETCH_SUCCESS
// FETCH_FAIL

const initState = {
    loading:false,
    data:[],
    error:''
}

// reducer is function =>? return new update state


const UseReducerFetchData = () => {

    const postReducer = (state=initState, action) => {
        switch(action.type){
            case 'FETCH_REQUEST':
                return {
                    ...state,
                    loading:true
                }
            case 'FETCH_SUCCESS':
                console.log(state);
                return {
                    ...state,
                    loading:false,
                    data:action.payload
                }
            case 'FETCH_FAIL':
                return {
                    ...state,
                    loading:false,
                    error:action.payload
                }

        }
    }
    const [state, dispatch] = useReducer(postReducer, initState)

    useEffect(() => {
        dispatch({type:'FETCH_REQUEST'})
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log(res.data);
                const posts = res.data;
                dispatch({type:'FETCH_SUCCESS', payload:posts})
            })
            .catch((err) => {
                console.log(err)
                const errMsg = err.message;
                dispatch({type:'FETCH_FAIL', payload:errMsg})
            })
    }, [])

    return (
        <div>
            {
                state.loading ? (<h2> Loading... </h2>) : state.error ? (<h2> {state.error}</h2>) : (state.data.map((post) => (<p>{post.title} </p>))) 
            }
        </div>
    )
}

export default UseReducerFetchData
