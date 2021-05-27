import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Login} from "./ui/pages/Login";
import {Profile} from "./ui/pages/Profile";
import {Registration} from "./ui/pages/Registration";
import {PasswordRecovery} from "./ui/pages/PasswordRecovery";
import {EnterNewPassword} from "./ui/pages/EnterNewPassword";
import {Error404} from "./ui/pages/Error404";
import {NavBar} from "./ui/components/NavBar";
import {TestPage} from "./ui/pages/TestPage";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/registration' render={() => <Registration/>}/>
                    <Route path='/profile' render={() => <Profile/>}/>
                    <Route path='/recovery' render={() => <PasswordRecovery/>}/>
                    <Route path='/recovery' render={() => <EnterNewPassword/>}/>
                    <Route path='/404' render={() => <Error404/>}/>
                    <TestPage/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
{/*hr / prov*/
}
{/*Header with navLinks*/
}
{/*Main*/
}