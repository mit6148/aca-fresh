import React from "react";
import "../../css/home.css";
import "../../css/app.css";
import StarContent from "./StarContent"

export default class Star extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            showEntry: false,
        }
    }

    handleClick1 = (event) => {
        this.setState({
            showEntry: true
        });
        this.props.toggleRenderState(false);
    }

    handleClick2 = (event) => {
        this.setState({
            showEntry: false
        });
        this.props.toggleRenderState(true);
    }

    render(){
        // create StarContent panel, to be shown when star is clicked
        const starEntry = this.state.showEntry ? (<StarContent username={this.props.username} content={this.props.content} handleClick={this.handleClick2} toggleUpvote={() => this.props.toggleUpvote(this.props.responseID)} upvoted={this.props.upvoted} upvotes={this.props.upvotes} />) : (null);

        return(
            <div className="star-container">
                <div className="star"
                    style={{top: this.props.top, left: this.props.left,
                        height: this.props.size, width: this.props.size}}
                    onClick={this.handleClick1}
                />
                {starEntry}
            </div>
        )
    }
}
