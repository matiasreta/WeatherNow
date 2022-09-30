import SmartConteiner from "./SmartConteiner";
import {Nav} from "./Nav"
import {FavoritesList} from "./FavoritesList";
function App() {
  return (
    <div>
      <div>
        <Nav/>
      </div>
      <div>
        <FavoritesList/>
      </div>
      <div>
        <SmartConteiner/>
      </div>
    </div>
  );
}

export default App;
