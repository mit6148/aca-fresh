import React from 'react';
import "../../css/timeline.css";
import Month from "../modules/Month.js"
import Monthline from "../modules/Monthline"

class Timeline extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            month: "",
            monthLength: 0,
            questionArray: [[1, 1, "This is a question for Jan 1?"], [1, 22, "This is a question for Jan 22?"], [2, 7, "“This is a question for Feb 7?”"]],
            responseArray: [[1, 1, [2018, "“Here’s my response to Jan 1 2018.”"]], [1, 1, [2014, "“Here’s my response to Jan 1 2014!!!!!!.”"]],[1, 22, [2017, "“Here’s my response to Jan 22 2017.”"]], [2, 7, [2018, "“Here’s my response to Feb 7 2018”"]]],
            userResponses: []
        }
    }

    componentDidMount() {
        this.formatQuestions();
        this.getPastResponses();
    }

    handleClick(inputMonth, inputLength) {
        this.setState({month: inputMonth})
        this.setState({monthLength: inputLength})
    }

    // GET past responses
    getPastResponses = () => {
        fetch('/api/responses?me=true')
            .then(res => res.json())
            .then(
                responses => {
                    console.log(responses);
                    this.setState({ userResponses: responses });
                    console.log("past responses retrieved!");
                    console.log(this.state.userResponses);
                    this.formatResponses();
                }
            );
    }

    formatQuestions = () => {
        let questionsArr = [], oneQuestion, i;
        console.log(this.props.questions);
        for (i=0; i<this.props.questions.length; i++) {
            let question = this.props.questions[i];
            oneQuestion = [question.month, question.day, question.content];
            questionsArr.push(oneQuestion);
        }
        this.state.questionArray = questionsArr;
    }

    formatResponses = () => {
        let responsesArr = [], oneResponse = [], i;
        for (i=0; i<this.state.userResponses.length; i++) {
            let response = this.state.userResponses[i];
            oneResponse = [response.month, response.day, [response.year, response.content]];
            responsesArr.push(oneResponse);
        }
        this.state.responseArray = responsesArr;
    }

    render(){
        return (
            <div className='page-container justify-content-center'>
                <div className="monthline">
                    <Monthline selectedMonth={this.state.month} monthLength={this.state.monthLength} questionArray={this.state.questionArray} responseArray={this.state.responseArray}/>
                </div>

                <div className="month-bar "> 
                    <div className="row no-gutters">
                        <div className="col-sm"  onClick={() => this.handleClick(1, 31)}>
                        <Month thisMonth="jan"/> 
                        </div>
                        <div className="col-sm"  onClick={(e) => this.handleClick(2, 29)}>
                        <Month  thisMonth="feb"/> 
                        </div>
                        <div className="col-sm"  onClick={(e) => this.handleClick(3, 31)}>
                        <Month  thisMonth="mar"/> 
                        </div>
                        <div className="col-sm"  onClick={(e) => this.handleClick(4, 30)}>
                        <Month  thisMonth="apr"/> 
                        </div>
                        <div className="col-sm"  onClick={(e) => this.handleClick(5, 31)}>
                        <Month  thisMonth="may"/> 
                        </div>
                        <div className="col-sm"  onClick={(e) => this.handleClick(6, 30)}>
                        <Month  thisMonth="jun"/> 
                        </div>
                        <div className="col-sm"  onClick={(e) => this.handleClick(7, 31)}>
                        <Month  thisMonth="jul"/> 
                        </div>
                        <div className="col-sm"  onClick={(e) => this.handleClick(8, 31)}>
                        <Month  thisMonth="aug"/> 
                        </div>
                        <div className="col-sm"  onClick={(e) => this.handleClick(9, 30)}>
                        <Month  thisMonth="sep"/> 
                        </div>
                        <div className="col-sm"  onClick={(e) => this.handleClick(10, 31)}>
                        <Month  thisMonth="oct"/>
                         </div>
                        <div className="col-sm"  onClick={(e) => this.handleClick(11, 30)}>
                        <Month  thisMonth="nov"/> 
                         </div>
                        <div className="col-sm"  onClick={(e) => this.handleClick(12, 31)}>
                        <Month  thisMonth="dec"/> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Timeline;