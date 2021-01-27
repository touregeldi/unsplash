import { Route, Switch } from 'react-router-dom';
import style from './App.module.css';
import Favourite from './Components/Favourite/Favourite';
import Header from './Components/Header/Header.jsx'
import History from './Components/History/History';
import Search from './Components/Search/Search.jsx';

function App() {
  let fav = [];

  const favToParent = (stateFromChild) =>{
    fav.push(stateFromChild)
  }

  console.log(fav);

  return (
    <div className={style.container}>
      <Header/>
      <Switch>
        <Route path='/' render={(props) => (<Search favToParent={favToParent}/>)} exact={true}/>
        <Route path='/favourite' render={props => (<Favourite favs={fav}/>)}/>
        <Route path='/history' component={History}/>
      </Switch>
    </div>
  );
}

export default App;
