import axios from 'axios';
export const GET_COUNTRIES = 'GET_COUNTRIES'
export const COUNTRY_DETAIL = 'COUNTRY_DETAIL'
export const SEARCH_COUNTRY = 'SEARCH_COUNTRY'
export const SORT_POPULATION_ASC = 'SORT_BY_POPULATION_ASC'
export const SORT_POPULATION_DESC = 'SORT_POPULATION_DESC'
export const SORT_A_TO_Z = 'SORT_A_TO_Z'
export const SORT_Z_TO_A = 'SORT_Z_TO_A'
export const FILTER_CONTINENT = 'FILTER_CONTINENT'
export const FILTER_ACTIVITY = 'FILTER_ACTIVITY'
export const ALL_ACIVITIES = 'ALL_ACIVITIES'

export const getCountries = () => {
    return (dispatch) => {
        axios.get('http://localhost:3001/countries')
        .then(response => {
            dispatch({type: GET_COUNTRIES, payload:response.data})
        })
    }
}

export const searchCountry = (name) => {
    return (dispatch ) => {
        axios.get(`http://localhost:3001/countries?name=${name}`)
        .then(response => {
            dispatch({type: SEARCH_COUNTRY, payload: response.data})
        })
        .catch(err => alert('the country was not found'))
    }
}

export const countryDetail = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/countries/${id}`)
        .then(response => {
            dispatch({type: COUNTRY_DETAIL, payload: response.data})
        })
        .catch(error => {
            if(error.response?.status !== 404) alert('something went wrong 😮')
            dispatch({ type: COUNTRY_DETAIL, payload: null })
        }) 
    }
}

export const sortPopulationAsc = () => {
    return {
        type: SORT_POPULATION_ASC
    }
}

export const sortPopulationDesc = () => {
    return {
        type: SORT_POPULATION_DESC
    }
}

export const sortAToZ = () => {
    return {
        type: SORT_A_TO_Z
    }
}

export const sortZToA = () => {
    return {
        type: SORT_Z_TO_A
    }
}
export const filterContinent = (payload) => {
    return {
        type: FILTER_CONTINENT,
        payload
    }
}

export const filterActivity = (payload) => {
    return{
        type: FILTER_ACTIVITY,
        payload
    }
}
export const allActivities = () => {////a revisar si va a servir
    return (dispatch) => {
        axios.get('http://localhost:3001/activities')
        .then(response => {
            dispatch({type: ALL_ACIVITIES, payload: response.data})
        })
    }
}

export const postAct = (activities) => {
    return (dispatch) => {
        axios.post("http://localhost:3001/activities", activities)
    };
}


