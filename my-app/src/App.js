import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="App-Post">
        <Post body="I like Eggs"/>
        <EmoteSheep count="6"/>
      </div>

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


export default App;
