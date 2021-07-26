import { GET_COUNTRIES, COUNTRY_DETAIL, SEARCH_COUNTRY, SORT_A_TO_Z, SORT_Z_TO_A, SORT_POPULATION_ASC, SORT_POPULATION_DESC, FILTER_CONTINENT, FILTER_ACTIVITY, ALL_ACIVITIES } from '../Actions/index'
import { sortAlphabetically, sortPopulation } from '../Components/Utils/Utils'

const initialState = {
    countries: [],
    countryDetail: {},
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_COUNTRIES: {
            return {
                ...state,
                countries: action.payload
            }
        }
        case COUNTRY_DETAIL: {
            return {
                ...state,
                countryDetail: action.payload
            }
        }
        case SEARCH_COUNTRY: {
            return {
                ...state,
                countries: action.payload
            }
        }
        case SORT_A_TO_Z: {
            return {
                ...state,
                countries: state.countries.slice().sort(sortAlphabetically)//slice devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin
            }
        }
        case SORT_Z_TO_A: {
            return {
                ...state,
                countries: state.countries.slice().sort(sortAlphabetically).reverse()
            }
        }
        case SORT_POPULATION_ASC: {
            return {
                ...state,
                countries: state.countries.slice().sort(sortPopulation).reverse()
            }
        }
        case SORT_POPULATION_DESC: {
            return {
                ...state,
                countries: state.countries.slice().sort(sortPopulation)
            }
        }
        case FILTER_CONTINENT: {
            return {
                ...state,
                countries: state.countries.filter(c => c.region === action.payload)
            }
        }
        case FILTER_ACTIVITY: {
            return {
                ...state,
                countries: state.countries.filter(e => { 
                    return e.activities.some(e => e.name === action.payload)//some -->comprueba si al menos un elemento de la matriz supera la prueba implementada por la función proporcionada TRUE O FALSE
                })
            }
        }
        case ALL_ACIVITIES: {
            return {
                ...state,
                activities: action.payload
            }
        }
        default:
            return state
    }
}


export default rootReducer


