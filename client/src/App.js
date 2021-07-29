import React from 'react'
import {Container} from '@material-ui/core';

import useStyles from './styles';
import Navbar from './Components/Nav/Navbar';
import Home from './Components/Home/Home';
import Auth from './Components/Auth/Auth';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
        <Container maxwidth="lg">
            <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home} />

                </Switch>
                <Switch>
                    <Route path="/auth" exact component={Auth}/>
                </Switch>
        </Container>
        </BrowserRouter>
    )
}

export default App;
