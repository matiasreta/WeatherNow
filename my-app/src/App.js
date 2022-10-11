import SmartConteiner from "./SmartConteiner";
import {Nav} from "./Nav"
import {FavoritesList} from "./FavoritesList";
import {Route} from 'react-router-dom'
import { Statistics } from "./Statistics";

function App() {
  return (<div>

      <Route path={"/"} component={Nav}  />  

      <Route> <FavoritesList/> </Route>  

      <Route  render={()=> (<SmartConteiner/>)} /> 

      <Route path={"/statistics"}> <Statistics/> </Route>

    </div>
  );
}

export default App;
