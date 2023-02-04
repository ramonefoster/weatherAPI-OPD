import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import { Header } from "./components/Header";
import { GraphPage } from "./pages/graphPage";
import { Search } from "./components/Search";
import { WeatherPage } from "./pages/WeatherPage";
import { Documentation } from "./pages/Documentation";
import { WeatherMaps } from "./components/WeatherMaps";

function App() {
  return (
    <Router>      
        <div className="app">
          <Header/>
          <div className="container">
            <br></br>
            <Routes>      
              <Route path="/" exact element={<><Search/><WeatherPage/><br></br><WeatherMaps/></>}/>
              <Route path="/weather/:dates" exact element={<><Search/><GraphPage/></>}/>
              <Route path="/docs/" exact element={<><Documentation/></>}/>
            </Routes> 
          </div>          
        </div>             
    </Router>    
  );
}

export default App;
