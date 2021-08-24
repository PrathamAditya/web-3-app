import ReactDOM from "react-dom";
import React from "react";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return (
      <div className = "container">
        <input type="submit" className="btn btn-primary" value="Alert" onClick={() => {alert("pressed");}}/>
      </div>
    )
  }
}
const app = document.getElementById('app');
if(app)
{
  ReactDOM.render(<App/>,app);
}
