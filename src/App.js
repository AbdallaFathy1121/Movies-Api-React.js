import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

//Components
import Header from './components/header/Header.js';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

// Styles
import { GlobalStyle } from './GlobalStyle';

// Context
import UserProvider from './Context.js';


function App() {
  return (
    <Router>
      <UserProvider>
        <Header />

        <Routes>
          <Route path="/:movieId" element={<Movie />} />
          <Route exact path="/" element={<Home />} />

          <Route exact path="/*" element={<NotFound />} />
        </Routes>

        <GlobalStyle />
      </UserProvider>
    </Router>
  );
}

export default App;
