import React, { Component } from "react";
class Clicker extends Component {
    constructor(){  
        super();  
        this.state = {  
            count: 0
        };  
        this.clicker = this.clicker.bind(this);  
    }

    clicker() {  
        this.setState({  
            count: this.state.count + 1
        });  
    }

    render() {  
         return (  
           <div>  
             <h1>Clicker</h1>  
             <h2>{this.state.count}</h2>
             <button onClick={this.clicker}>+1</button>  
           </div>     
        )  
    }  
}
export default Clicker;