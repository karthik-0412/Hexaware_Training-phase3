import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Faq from './FAQ';
import Login from './Login';
import Welcome from './Welcome';
import UCard from './Ucard';

function Routes1() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/ucard/:UserId/:Name/:Salary" element={<UCard />} />
    </Routes>
  );
}

export default Routes1;
