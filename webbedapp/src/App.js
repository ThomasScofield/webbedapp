
import './App.css';
import Calculate from './components/Calculate'
import ReferenceInfo from './components/ReferenceInfo'
import React, { Component } from "react";

class App extends Component {
  constructor(){  
    super();  
    this.state = {  
        wine: 'red'
    };  
}

  
  render() {  
    return (
      <html>
        <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" ></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>
        </head>
        <body>
            <nav id="nav" class="navbar navbar-expand navbar-dark bg-dark" >
                <div class="collapse navbar-collapse" id="navbar">
                    <ul class="navbar-nav">
                      <li>
                        <a class="nav-link" onClick={() => this.setState({wine: 'red'})}>
                            Red
                        </a>
                      </li>
                      <li>
                        <a class="nav-link" onClick={() => {this.setState({wine: 'white'})}}>
                            White
                        </a>
                      </li>
                    </ul>
                </div>
            </nav>
        
            <div id="content"> 
              <Calculate class={this.state.wine}/>
              <ReferenceInfo class={this.state.wine}/>
            </div>
        </body>
      </html>
    );
  }
}

  


export default App;
