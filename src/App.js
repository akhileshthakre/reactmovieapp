import React from 'react';
//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
//styles
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
      <GlobalStyle />
    </Router>
  );
}

export default App;
