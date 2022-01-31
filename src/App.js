import React from 'react';

//routing
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//components
import Header from "./components/header";


//styles
import {GlobalStyle} from "./GlobalStyles";

//components
import Home from "./pages/home";
import Movie from './pages/movie';
import NotFound from "./pages/notFound";


const App = () => {
    return (
        <Router>
            <GlobalStyle/>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:movieId" element={<Movie/>}/>
                {/**Not found page**/}
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
        </Router>
    )
}
export default App;