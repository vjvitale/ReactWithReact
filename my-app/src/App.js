import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from './TextInput.js';



function App() {
  return (
    <div className="App">
      <div className="App-Post">
        <Post body="I like Eggs"/>
        <EmoteSheep count="6"/>
        <Message count="6"/>
      </div>
      <AddPost/>
    </div>
  );
}

class Post extends React.Component{

  render(){
    return <p>{this.props.body}</p>
  }
}

function EmoteSheep(props){
  return(
    <p><span role="img" aria-label="sheep">🐑</span> {props.count} </p>
    )
}

function Message(props){
  return(
    <p>This is just a random message for you bro{props.count}</p>
  )
}



class AddPost extends Component{
  constructor(){
    super();
    this.state = {showPopup: false};
  }

  poppy(){
    this.setState({
      showPopup : !this.state.showPopup
    })
  }


  render(){
    return(
      <div>
        {this.state.showPopup ?
          <div className = "Popup">
            <TextInput/>
            <button onclick ={this.poppy.bind(this)}>Close</button>
          </div>
          : <button onclick ={this.setState({showPopup: !this.state.showPopup})}>Create Post</button>
        }

      </div>
      )
  }


}


export default App;
