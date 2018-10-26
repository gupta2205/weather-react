import React, { Component } from 'react';
import {button} from 'react-bootstrap';


export default class SeachBar extends Component {

    constructor(props){
        super(props);
        this.state = {term: ""};
    }

    render() {
        return <div>
            <div className="">
                
                <form className='input-group'>

                    <input 
                    placeholder = 'get a 5 day forcast'
                    
                    />
                    <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </span>
                </form>

            </div>
        </div>;
    }
}
