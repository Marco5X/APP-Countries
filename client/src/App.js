import './App.css';
import { Route } from 'react-router'//
import LandingPage from './Components/LandinPage/LandinPage'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import CountryDetail from './Components/CountryDetail/CountryDetail';
import HomePage from './Components/HomePage/HomePage';
import  FormActivity from './Components/FormActivity/FormActivity'

function App() {
  return (
    <>
      <Route exact path='/' component={LandingPage} />
      <Route path='/countries' component={NavBar} />
      <Route exact path='/countries' component={HomePage} />
      <Route path ='/activities' component={FormActivity}/>
      <Route path='/countries/:id' render = {({ match }) => <CountryDetail id={match.params.id}/>}/>
      <Route path='/countries' component={Footer} />
    </>
  );
}

export default App;
