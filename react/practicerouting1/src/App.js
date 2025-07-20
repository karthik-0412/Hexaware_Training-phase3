import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import Faq from './Faq';
import Login from './Login';
import Welcome from './Welcome';
import PayslipCalculator from './PayslipCalculator';
import ShowPayslip from './ShowPayslip';
import UCard from './UCard';
import { useState } from 'react';
import ShowU from './ShowU';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Anyq from './Anyq';
import ShowE from './ShowE';
import ECard from './ECard';
import ElectricItems from './ElectricItems';
import { BrowserRouter as Router } from 'react-router-dom';
import Protected from './Protected';

function App() {


 

  return (

    
    <div className='cont'>

      <table border="2">
        <tr>
          <Link to="/"><td>Home</td></Link>
          <Link to="/Faq"><td>Faq</td></Link>
          <Link to="/Contact"><td>Contact</td></Link>
          <Link to="/Login"><td>Login</td></Link>
          <Link to="/payslip"><td>Payslip</td></Link>
          <Link to="/showpayslip"><td>Show Payslip</td></Link>
          <Link to="/ucard"><td>UCard</td></Link>
          <Link to="/welcome"><td>Welcome</td></Link>
          <Link to="/anyq"><td>Any Query</td></Link>
          <Link to="/electricitems"><td>Electric Items</td></Link>

        </tr>
      </table>

      <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path= "/contact" element={<Contact/>}/>
        {/* <Route path="/faq" element={<Protected component={<Faq />} />} /> */}
        <Route path="/faq" element={<Protected Component={Faq} />} />
 
        <Route path= "/login" element={<Login/>}/>
        <Route path= "/welcome" element={<Welcome/>}/>
        <Route path= "/payslip" element={<PayslipCalculator/>}/>
        <Route path= "/showpayslip" element={<ShowPayslip/>}/>
        <Route path= "/ucard" element={<UCard/>}/>
        {/* <Route path= "/ecard" element={<ECard/>}/> */}
        <Route path= "/anyq" element={<Anyq/>}/>
        <Route path= "/ucard/:UserId/:Name/:Salary" element={<ShowU/>}/>
        {/* <Route path= "/ecard/:itemCode/:name/:price/:quantity/:city" element={<ShowE/>}/> */}
        <Route path= "/electricitems" element={<ElectricItems/>}/>
        <Route path="/ecard/:itemCode/:name/:price/:quantity/:city" element={<ShowE/>}/>

        {/* <Route path= "/ecard/:itemCode/:name/:price/:quantity/:city" element={<ECard/>}/>
        <Route path= "/showe" element={<ShowE/>}/>
        <Route path= "/showe/:itemCode/:name/:price/:quantity/:city" element={<ShowE/>}/>
        <Route path= "/electricitems" element={<ElectricItems/>}/>
        <Route path= "/electricitems/:itemCode/:name/:price/:quantity/:city" element={<ECard/>}/> */}

      </Routes>

    </div>
  );
}

export default App;
