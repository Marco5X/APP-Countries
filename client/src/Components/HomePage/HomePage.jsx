import React from 'react';
import style from './HomePage.module.css';
import Countries from '../Countries/Countries';
import Ordered from '../Oredered/Ordered';
import SearchBar from '../SearchBar/SearchBar'
import Filter from '../Filter/Filter';


const HomePage = () => {
  return (
    <> 
    <div className={style.homeContainer}>
      <SearchBar />
      <Filter />
      <Ordered />    
    </div>   
      <Countries />
    </>
  )
}

export default HomePage;

