import SmartConteiner from "./SmartConteiner";
import {Nav} from "./Nav"
import {FavoritesList} from "./FavoritesList";
import {Route} from 'react-router-dom'

function App() {
  return (<div>

      <Route path={"/"} component={Nav}  />  

        <FavoritesList/>


        <SmartConteiner/>
    </div>
  );
}

export default App;
