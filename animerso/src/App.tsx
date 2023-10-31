import React from 'react';
import './App.css';
import Header from './header/headerComp';
import Card from './cards/cards';
//import Pagination from './Pages/Pagination';


const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Card />
      
    </div>
  );
};

export default App;
