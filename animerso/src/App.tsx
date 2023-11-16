import React from 'react';
import './App.css';
import Header from './header/headerComp';
import MovieComponent from './Pages/Pagination';



const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
      <MovieComponent />
    </div>
  );
};

export default App;
