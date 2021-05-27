import React from 'react';
import logo from '../logo.svg';
import './App.css';
import {SuperInputText} from "./ui/components/common/c1-SuperInputText/SuperInputText";
import {SuperButton} from "./ui/components/common/c2-SuperButton/SuperButton";
import {SuperCheckbox} from "./ui/components/common/c3-SuperCheckbox/SuperCheckbox";

const App = () =>  {
    return (
        <div className="App">
            <SuperInputText/>
            <SuperButton/>
            <SuperCheckbox/>
            {/*hr / prov*/}
            {/*Header with navLinks*/}
            {/*Main*/}
        </div>
    );
}

export default App;
