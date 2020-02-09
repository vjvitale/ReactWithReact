import React, {Component} from 'react';
import './App.css';
//import TextInput from './TextInput.js';



function App() {
  return (
    <div className="App">
      <MultiMessage/>
      <MessageBox/>
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
          var x = parseInt(Math.random()*10);
          if(i%2){
            rows.push(<div className="App-Post"> <Post body="I like Eggs"/> <EmoteSheep count={x}/> </div>)
          }else{
            rows.push(<div className="App-Post"> <MessageBoi/> <EmoteSheep count={x}/> </div>)
          }
        }
      return <div>{rows}</div>;
  }
}

class MessageBox extends React.Component {
  render() {
    return(
      <div className="App-Post">
        <form>
          <p></p>
          <p></p>
          <p><input type='text' placeholder='Enter your message here' name='message'/></p>
          <p><button>Send Message</button></p>
          </form>
      </div>

    )
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
