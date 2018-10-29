// import { TransitionGroup, CSSTransition } from 'react-transition-group'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React, { Component } from 'react';
import './Dot.css'

class Dot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            upvotes: 0
        }
        this.handleClick = this.handleClick.bind(this)
    };

    handleClick() {
        this.setState({ visible: ! this.state.visible });
    }

    componentDidMount() {
        this.setState({ upvotes: this.props.upvotes})
        console.log(`this.props.upvotes: ${this.props.upvotes}`)
    }
    
    upVote() {
        let newVal = this.state.upvotes + 1;
        this.setState({ upvotes: newVal })
    }

    render() {
        return (
            <div id="dot-container">
                <div>
                    <button id="dot" onClick={this.handleClick}>{this.state.visible ? 'X' : 'O'}</button>
                    <ReactCSSTransitionGroup 
                        transitionName="example"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}
                    >
                        { 
                            this.state.visible ? 
                            <div className='panel'> 
                                <div className="panelContent">
                                { /*
                                    <h1 id="title"> Recycled some plastic bottles </h1>
                                    <p id="time"> 9:28pm</p>
                                    <img id="img" src="https://cdn.images.express.co.uk/img/dynamic/130/590x/Recycle-851038.jpg"/>
                                    <p id="body">
                                        having fun recycling!
                                    </p>
                                */}
                                    <h1 id="title"> {this.props.title} </h1>
                                    <h2 id="category"> {this.props.category} </h2>
                                    {
                                        this.props.quantity > 0 && <p id="quantity"></p>
                                    }
                                    <p id="time"> {this.props.time} </p>
                                    <img id="img" src={this.props.img}/>
                                    <br/>
                                    <a onClick={this.upVote}>
                                        <i class="fas fa-arrow-up"> upvotes: {this.state.upvotes} </i>
                                    </a>
                                    <p id="body">
                                        {this.props.body}
                                        <br/>
                                        {this.props.quantity}
                                    </p>
                                </div>
                            </div> 
                            : null 
                        }
                            <h1 id="name"> {this.props.text} </h1>
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        );
    }
}

export default Dot;