import SmartConteiner from "./SmartConteiner";
import {Nav} from "./Nav"
import {FavoritesList} from "./FavoritesList";
import {Route} from 'react-router-dom'
import { Stadistics } from "./Stadistics";

function App() {
  return (<div>

      <Route path={"/"} component={Nav}  />  

      <Route> <FavoritesList/> </Route>  

      <Route  render={()=> (<SmartConteiner/>)} /> 

      <Route> <Stadistics/> </Route>

    </div>
  );
}

export default App;
