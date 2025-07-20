import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/login'); // Navigate to the Home page
    };
    
  return (<>
    <div>
      <h1>Contact Page</h1>
      <p>If you have any questions, feel free to reach out!</p>
    </div>
    <button onClick={handleNavigation}> Login</button>
  </>);
}
export default Contact;