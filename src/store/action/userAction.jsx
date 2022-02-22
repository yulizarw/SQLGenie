import axios from '../../config/axios'


export const fetchLogin =(formInput) =>{
    console.log(formInput,'hello')
    return(dispatch) =>{
        dispatch({type:'SUCCESS_LOGIN', payload:formInput})
    }
}

export const setDropDownState = (input) => {
    
    return(dispatch) => {
        // dispatch({type:'DROPDOWN_STATE', payload:input})
        // console.log(input)

    }
}