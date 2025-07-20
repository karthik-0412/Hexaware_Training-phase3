import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/signin'); // Navigate to the Home page
    };
    const handleNavigation1 = () => {
        navigate('/signup'); // Navigate to the Home page
    };
    const handleNavigation2 = () => {
        navigate('/dashboard'); // Navigate to the Home page
    };
    const handleNavigation3 = () => {
        navigate('/addbook'); // Navigate to the Home page
    };

    const handleNavigation4 = () => {
        navigate('/removebook'); // Navigate to the Home page
    };
    const handleNavigation5 = () => {
        navigate('/issuebook'); // Navigate to the Home page
    };
const handleNavigation6 = () => {
        navigate('/returnbook'); // Navigate to the Home page
    };

  return (
    <div>
      <h2>🏠 Welcome to the Library</h2>
      <h3>📋 Menu</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><button onClick={handleNavigation}>Sign In</button></li>
        <li><button onClick={handleNavigation1}>Sign Up</button></li>
        <li><button onClick={handleNavigation2}>Dashboard</button></li>
        <li><button onClick={handleNavigation3}>Add Book</button></li>
        <li><button onClick={handleNavigation4}>Remove Book</button></li>
        <li><button onClick={handleNavigation5}>Issue Book</button></li>
        <li><button onClick={handleNavigation6}>Return Book</button></li>
      </ul>
    </div>
  );
};

export default Home;