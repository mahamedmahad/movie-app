import React from 'react';

//components
import Header from "./components/header";


//styles
import {GlobalStyle} from "./GlobalStyles";
import Home from "./pages/home";

const App = () => {
    return (
        <div>

            <GlobalStyle/>
            <Header/>
            <Home/>
            {/***Hero**/}
            {/***Main Section**/}
            {/***Search Section**/}
        </div>
    )
}
export default App;