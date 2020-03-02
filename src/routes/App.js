import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppJuego from '../containers/AppJuego.jsx'


const App = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={AppJuego} />
        </Switch>
    </BrowserRouter>


)

export default App;

