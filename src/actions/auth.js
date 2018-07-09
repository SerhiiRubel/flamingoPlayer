import axios from 'axios';
import {AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS} from "../types/auth";

const fetchAuth = value => {
    return function(dispatch) {
        dispatch({type: AUTH_REQUEST});
        axios.post(`https://reqres.in/api/register`, value)
            .then( response => {
                console.log(response);
                localStorage.setItem('token', response.data.token);
                dispatch({
                    type: AUTH_SUCCESS,
                    payload: response.data.token
                });
            } )
            .catch( error => {
                dispatch({
                    type: AUTH_FAILURE,
                    payload: error
                })
            } )
    }
}

export default fetchAuth;