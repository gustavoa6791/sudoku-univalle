import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Juego from '../components/Juego.jsx'


const App = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Juego} />
        </Switch>
    </BrowserRouter>


)

export default App;

