import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component{
    constructor(){
        super();
        this.state = {minutes:0,seconds:0}
    }
    componentDidMount(){
        setInterval(()=>{
          return this.setState((state, props)=>{
            
            return{
                second:state.second==59?0:state.second+1,
                minute:state.second==59?state.minute+1:state.minute
            }
          });
        },1000)
    }
    render(){
        return(
            <h1>{this.state.minute}:{this.state.second}</h1>
        );
    }
}
ReactDOM.render(<App />,document.getElementById('root'));