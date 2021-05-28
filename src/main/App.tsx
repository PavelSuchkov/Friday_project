import React from 'react';
import './App.css';
import {BrowserRouter, HashRouter, Route, Switch, Redirect} from "react-router-dom";
import {Login} from "./ui/pages/Login";
import {Profile} from "./ui/pages/Profile";
import {Registration} from "./ui/pages/Registration";
import {PasswordRecovery} from "./ui/pages/PasswordRecovery";
import {EnterNewPassword} from "./ui/pages/EnterNewPassword";
import {Error404} from "./ui/pages/error404/Error404";
import {NavBar} from "./ui/components/NavBar";
import {TestPage} from "./ui/pages/TestPage";

const App = () => {
    return (
            <div className="App">
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path={'/'} exact render={() => <Redirect to={'/login'}/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/registration' render={() => <Registration/>}/>
                        <Route path='/profile' render={() => <Profile/>}/>
                        <Route path='/recovery' render={() => <PasswordRecovery/>}/>
                        <Route path='/newPassword' render={() => <EnterNewPassword/>}/>
                        <Route path='/404' render={() => <Error404/>}/>
                        <Redirect from={'*'} to={'/404'}/>
                    </Switch>
                    <TestPage/>
                </div>
            </div>
    );
}

export default App;
