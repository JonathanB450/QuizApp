import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Home.css'

const Home = () => {
    return(
        <div id="Home_Container">
            <div id="Information">
                <h1>Welcome to the Trivia Challenge!</h1>
                <p>You will be presented with 10 True or False questions</p>
                <h3>Can you score 100%?</h3>
                <Link to='/Question'>
                    <div id="Start_Button">
                        <p>Start</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Home