import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../pages/Home'
import Question from '../components/Question'
import '../styles/Normalizer.css'
import '../styles/Global.css'

const App = () => {
    return(
        <div id="App_Container">
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/Question' component={Question}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App