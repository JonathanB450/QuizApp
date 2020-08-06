import React from 'react'
import {Link} from 'react-router-dom'
import SunEmoji from '../images/SunEmoji.png'
import SmileEmoji from '../images/SmileEmoji.png'
import SadEmoji from '../images/SadEmoji.png'
import '../styles/Question.css'

let answersArray = []

class Question extends React.Component{
    state = {}

    componentDidMount(){
        answersArray = []
        fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
            .then((response) => {
                return response.json()
            })
            .then(data => {
                this.setState({
                    data,
                    index: 0,
                    correctAnswers: 0,
                })
            })
    }
    checkAnswer = (e) => {
        if (e.target.id === this.state.data.results[this.state.index].correct_answer) {
            this.setState({
                correctAnswers: this.state.correctAnswers+1,
            })
        }
        this.setState({
            index: this.state.index+1,
        })

        answersArray.push(
            {
                question: this.state.data.results[this.state.index].question,
                answer: e.target.id == this.state.data.results[this.state.index].correct_answer ? 'Green' : 'Red'
            }
        )
    }
    render(){
        if (this.state.data == null) {
            return(
                <div id="Loader">...Cargando</div>
            )
        }
        else if(this.state.data != null && this.state.index !== this.state.data.results.length){
            return(
                <div id="Question_Page">
                    <div className="Home_Button">
                        <Link to="/">
                            <div id="Start_Button">
                                <p>Home</p>
                            </div>
                        </Link>
                    </div>
                    <div id="Question_Container">
                        <div id="Title">
                            <h1>{this.state.data.results[this.state.index].category}</h1>
                        </div>
                        <div id="Question">
                           <p>{this.state.data.results[this.state.index].question}</p> 
                        </div>
                        <div id="Index">
                           <p>{this.state.index+1} out of 10</p> 
                        </div>
                        <div id="Answers">
                            <input onClick={this.checkAnswer} type="button" id="True" value="True" />
                            <input onClick={this.checkAnswer} type="button" id="False" value="False" />
                        </div>
                </div>
                </div>
            )
        }
        else if(this.state.index === this.state.data.results.length){
            console.log(answersArray)
            let emoji
            if (this.state.correctAnswers == 10 || this.state.correctAnswers == 9) {
                emoji = SunEmoji
            }
            else if(this.state.correctAnswers <= 8 && this.state.correctAnswers >= 7){
                emoji = SmileEmoji
            }
            else{
                emoji = SadEmoji
            }
            
            return (
                <div id="Score">
                    <div className="Home_Button">
                        <Link to="/">
                            <div id="Start_Button">
                                <p>Home</p>
                            </div>
                        </Link>
                    </div>
                    <div id="Results">
                        <div id="Data">
                            <img src={emoji} alt=""/>
                            <h1>You scored</h1>
                            <h2>{`${this.state.correctAnswers}/${this.state.data.results.length}`}</h2>
                            <h2>Your Answers:</h2>
                            <ul>
                               {answersArray.map( i => 
                                    <li>
                                        <div className={i.answer}></div>
                                        <p>{i.question}</p>
                                    </li>
                                )} 
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Question