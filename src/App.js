import {Routes, Route} from 'react-router-dom';
import Authentication from './routes/authentication-component/authentication.component';
import Home from "./routes/home-componet/home.component";
import Navigation from './routes/navigation-component/navigation.component';


const Shop = () => {

  return (
    <div>
    <h1>I am Shop Page</h1>
    </div>
  );
};

const App = () => {

  
  return (
    <Routes>
    <Route path='/' element={<Navigation/>}>
      <Route index={true} element={<Home/>} /> 
      <Route path ='shop' element ={<Shop/>}/>   
      <Route path ='auth' element ={<Authentication/>}/>   
    </Route>
    </Routes>
  );
};

export default App;
