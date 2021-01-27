import { Route, Switch } from 'react-router-dom';
import style from './App.module.css';
import Favourite from './Components/Favourite/Favourite';
import Header from './Components/Header/Header.jsx'
import History from './Components/History/History';
import Search from './Components/Search/Search.jsx';
import {useState} from 'react'

function App() {
  const [histories, setHistories] = useState(['Wallpapers', 'Textures', 'Nature', 'Current', 'Architecture', 'Business', 'Film', 'Animals', 'Travel', 'Fashion', 'Food'])
  const [favourite, setFavourite] = useState([])

  const updateHistories = (newHistory) => {
    let temp = histories.concat();
    temp.unshift(newHistory)
    setHistories(temp)
  }

  const updateFavourite = (newFavourite) => {
    if(favourite.includes(newFavourite)) return;
    let temp = favourite.concat()
    temp.push(newFavourite)
    setFavourite(temp)
  }


  return (
    <div className={style.container}>
      <Header/>
      <Switch>
        <Route path='/' render={() => (<Search histories={histories} updateHistories={updateHistories} favourite={favourite} updateFavourite={updateFavourite}/>)}  exact={true}/>
        <Route path='/favourite' render={() => (<Favourite favs={favourite}/>)}/>
        <Route path='/history' render={() => (<History histories={histories} updateHistories={updateHistories} favourite={favourite} updateFavourite={updateFavourite}/>)}/>
      </Switch>
    </div>
  );
}

export default App;
