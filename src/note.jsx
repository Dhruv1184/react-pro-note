import React from 'react'
import './note.css'
class Note extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state =
        { 
           value: ''
       };  

    }

    handleChange(e){this.setState({value: e.target.value});}

    render(){
        return(
            <>
             <div className="container">
                <div className="input">
                    <h3>Input</h3>
                    <textarea className="input-text" onChange={this.handleChange}/>
                </div>
                <div className="output">
                    <h3 className='out'>Pro Note</h3>
                    <div className="output-text">{this.state.value}</div>
                 </div>                
            </div>
            </>
        )
    }
}

export default Note
