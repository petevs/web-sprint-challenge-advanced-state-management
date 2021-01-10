import axios from 'axios';

export const FETCHING_SMURFS_START = 'FETCHING_SMURFS_START'
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS'
export const FETCHING_SMURFS_ERROR = 'FETCHING_SMURFS_ERROR'

export const ADD_SMURF = 'ADD_SMURF'
export const ADD_SMURF_ERROR = 'ADD_SMURF_ERROR'

export const fetchSmurfs = () => (dispatch) => {

    dispatch({type: FETCHING_SMURFS_START});

    axios.get('http://localhost:3333/smurfs')
        .then(({data}) => {
            dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: data})
            // console.log(data)
        })
        .catch(err => {
            dispatch({type: FETCHING_SMURFS_ERROR, payload: err})
            console.log(err)
        })

}

export const addSmurf = (newSmurf) => (dispatch) => {
    
    
    axios.post('http://localhost:3333/smurfs', newSmurf)
        .then(({data}) => {
            dispatch({ type: ADD_SMURF, payload: data})
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
    
}
//Task List:    
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.