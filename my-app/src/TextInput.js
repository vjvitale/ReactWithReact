import React, {Component} from 'react';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

class TextInput extends Component {

  constructor(props){
      super(props)
      this.state = {
        message: null
      }
  }

    handleSubmit = (event) => {
      event.preventDefault()
      const data = this.state
      console.log("Final data is",  data)
      );
}
    handleInputChange = (event) => {
      event.preventDefault()
      console.log(event)
      console.log(event.target.message)
      console.log(event.target.value)
      this.setState({
        [event.target.message]: event.target.value
      })
    }

    render(){
      const{message} = this.state
      return(
        <div>
        <h1>Forms and Inputs</h1>
        <p>Message is :{message}</p>
          <form onSubmit={this.handleSubmit}>
            <p><input type='text' placeholder='Enter your message here' name='message' onChange={this.handleInputChange}/></p>
            <p><button>Send Message</button></p>
            </form>
        </div>

      )
    }
}
//export default TextInput;
