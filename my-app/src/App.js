import React, {Component} from 'react';
import './App.css';
//import TextInput from './TextInput.js';



function App() {
  return (
    <div className="App">
      <div className="App-Post">
        <Post body="I like Eggs"/>
        <EmoteSheep count="6"/>
        <MultiMessage/>
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

class MessageBoi extends React.Component {
  render(){
    return <p> This is a message for you</p>;

  }
}

class MultiMessage extends React.Component {
  render() {
        let rows = [];
        for(let i=0; i<6; i++){
          rows.push(<MessageBoi key={i}/>)
        }
      return <p>{rows}</p>;
  }
}


//class AddPost extends Component{
//  constructor(){
//    super();
 //   this.state = {showPopup: false};
 // }

  //poppy(){
    //this.setState({
      //showPopup : !this.state.showPopup
 //   })

// class AddPost extends Component{
//   constructor(){
//     super();
//     this.state = {showPopup: false};
//   }
//
//   poppy(){
//     this.setState({
//       showPopup : !this.state.showPopup
//     })
//   }
//
//
//   render(){
//     return(
//       <div>
//         {this.state.showPopup ?
//           <div className = "Popup">
//             <TextInput/>
//             <button onclick ={this.poppy.bind(this)}>Close</button>
//           </div>
//           : <button onclick ={this.setState({showPopup: !this.state.showPopup})}>Create Post</button>
//         }
//
//       </div>
//       )
//   }
//
//
// }
export default App;
