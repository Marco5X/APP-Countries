import React, { useEffect, useState } from 'react'
import style from './Ordered.module.css'
import { connect } from 'react-redux'
import { getCountries, sortAToZ, sortZToA, sortPopulationAsc, sortPopulationDesc } from '../../Actions/index'

const Ordered = ({ getCountries, sortAToZ, sortZToA, sortPopulationAsc, sortPopulationDesc }) => {
    const [order, setOrder] = useState('')

    useEffect(() => {
        if (order === 'all') getCountries()
        else if (order === 'a-z') sortAToZ()
        else if (order === 'z-a') sortZToA()
        else if (order === 'populationAsc') sortPopulationAsc()
        else if (order === 'populationDesc') sortPopulationDesc()
    }, [order])

    return (
        <div>
                <h5>Order by</h5>
                <select className={style.selectOrder} onChange={(e) => setOrder(e.target.value)}>
                    <option value='all'>🌐 All Countries</option>
                    <option value='a-z'>A...z</option>
                    <option value='z-a'>Z...a</option>
                    <option value='populationAsc'>👆🏼 Population</option>
                    <option value='populationDesc'>👇🏼 Population</option>
                </select>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCountries: () => dispatch(getCountries()),
        sortAToZ: () => dispatch(sortAToZ()),
        sortZToA: () => dispatch(sortZToA()),
        sortPopulationAsc: () => dispatch(sortPopulationAsc()),
        sortPopulationDesc: () => dispatch(sortPopulationDesc())
    }
}
const mapStateToProps = (state) => {
    return {
        countries: state.countries
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ordered);

// import React from 'react';
// import  { useState, useEffect } from 'react'
// import { getCountries }from '../../Actions/index';
// import {useDispatch, useSelector} from 'react-redux'


// function Ordered (){
//     const [countries, setCountries] = useState([]);
//     const dispatch = useDispatch();
//     const allCountries = useSelector(state => state.countries)

// function alphabeticallyAsc (){       
//     const state1 = allCountries
//     state1.sort((a, b) => {
//         if(a.name < b.name) return -1;
//         if(a.name > b.name) return 1;
//         return 0
//     })
//     setCountries([...state1])
// }

// function alphabeticallyDesc (){  
//     const state2 = allCountries
//     state2.sort((a, b) => {
//         if(a.name < b.name) return 1;
//         if(a.name > b.name) return -1;
//         return 0
//     })
//     setCountries([...state2])
// }

// function pupulationAsc () {
//     const state3 = allCountries
//     state3.sort((a, b) => {
//         if(a.population < b.population) return 1;
//         if(a.population > b.population) return -1;
//         return 0
//     })
//     setCountries([...state3])
// }
// function populationDesc () {      
//     const state4 = allCountries
//     state4.sort((a, b) => {
//         if(a.population < b.population) return -1;
//         if(a.population > b.population) return 1;
//         return 0
//     })
//     setCountries([...state4])
// }

//     useEffect(()=>{
//         dispatch(getCountries())
//       }, [dispatch])

//      useEffect(()=>{
//          setCountries(allCountries)
//       }, [allCountries])

//         return (    
//             <div>   
//                 <div>        
//                     <button onClick={alphabeticallyAsc} >A...z</button>
//                     <button onClick={alphabeticallyDesc} >Z...a</button>
//                     <button onClick={pupulationAsc} >👆🏼 Population </button>
//                     <button onClick={populationDesc} >👇🏼 Population </button>  
//                 </div>

//             </div>
//         )
// }

// export default Ordered ;

