import logo from './logo.svg';
import './App.css';
import PasserTest from './component/PasserTest';
import Login from './LoginComponent/Login';
import Template from './component/Template';

import {Routes , Route ,Switch, Outlet } from 'react-router-dom';
import Contact from './component/Contact';
import Localisation from './component/Localisation';
import GererProfil from './component/GererProfil';
import Logout from './LogoutComponent/Logout'; 
import Resultat from './component/Resultat';
function App() {
  return (
    <div className="App">
      

<Routes>
  <Route path='/' element={<Login />}></Route>
  
  <Route path='template' element={<Template />}>
    <Route path='passertest'element={<PasserTest />} /> 
    <Route path='score' element={<Resultat />} />
    <Route path='contact' element={<Contact />} />
    <Route path='localisation' element={<Localisation />} />
    <Route path='gererprofil' element={<GererProfil />} />
    
    
  </Route>
  <Route path='logout' exact element={<Logout />}></Route>
  
</Routes>
 
    
  
  
   
 
    </div>
  );
}

export default App;
