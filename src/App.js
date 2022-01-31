import React from 'react';

//components
import Header from "./components/header";


//styles
import {GlobalStyle} from "./GlobalStyles";

const App = () => {
    return (
        <div>
            <GlobalStyle/>
            {/***header**/}
            <Header/>
            {/***Hero**/}
            {/***Main Section**/}
            {/***Search Section**/}
        </div>
    )
}
export default App;