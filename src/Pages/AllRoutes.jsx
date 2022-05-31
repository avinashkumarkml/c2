import { Home } from './Dashboard';
import {RegOne} from './RegisterPageOne';
import {RegTwo} from './RegisterPageTwo';
import {Routes,Route} from "react-router-dom"
// import { Users } from './pages/Users';



function AllRouters() {
    return (
      <>
      
     <Routes>
     <Route path="/" element={<Home/>} />
      <Route path="/registration/one" element={<RegOne/>} />
      <Route path="/registration/two" element={<RegTwo/>} />
     
  
       
  
     </Routes> 
     
    
  
     
  
     </>
    );
  }
  
  export default AllRouters;