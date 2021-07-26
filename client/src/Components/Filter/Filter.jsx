import React, { useEffect, useState } from 'react'
import style from './Filter.module.css'
import { connect } from 'react-redux'
import { getCountries, filterContinent, filterActivity } from '../../Actions/index'

const Ordered = ({ getCountries, filterContinent, filterActivity }) => {
    const [activity, setActivity] = useState('')
    const [region, setRegion] = useState('')

    useEffect(() => {
        if (region) {
            if (region === 'all') getCountries()
            else if (region !== 'all') {
                filterContinent(region)
            }
        }
    }, [region])

    const inputActivityHandler = (e) => {
        e.preventDefault()
        setActivity(e.target.value)
    }
    
    const setInputHandler = (e) => {
        e.preventDefault()
        if(activity) {
            filterActivity(activity)
        } else if (!activity) {
            alert('❌ Enter a name of a activity')            
        }    
        setActivity('')
    }

    return (
        <div className={1}>
                {/* <label>Activity</label> */}
                <form onSubmit={setInputHandler}>
                    <input className={style.input} placeholder='Search for tourist activity...' type='text' value={activity} onChange={inputActivityHandler} />
                    {/* <button type='submit' > 🔎 </button> */}
                </form>
                <h5> Filter by Continent</h5>
                 <select className={style.filterContinent} onChange={(e) => setRegion(e.target.value)}>
                        <option value='all'>🌐 All Countries</option>
                        <option value='Americas'>Americas</option>
                        <option value='Europe'>Europe</option>
                        <option value='Africa'>Africa</option>
                        <option value='Oceania'>Oceania</option>
                        <option value='Asia'>Asia</option>
                </select>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCountries: () => dispatch(getCountries()),
        filterContinent: region => dispatch(filterContinent(region)),
        filterActivity: paylaod => dispatch(filterActivity(paylaod)),
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ordered);
