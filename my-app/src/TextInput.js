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

    handleSubmit = () => {
      event.preventDefault()
      const data = this.state
      console.log("Final data is",  data)

      db.transaction(function(txn) {
     txn.executeSql(
       "SELECT name FROM sqlite_master WHERE type='table' AND name='table_messages'",
       [],
       function(tx, res) {
         console.log('item:', res.rows.length);
         if (res.rows.length == 0) {
           txn.executeSql('DROP TABLE IF EXISTS table_messages', []);
           txn.executeSql(
             'CREATE TABLE IF NOT EXISTS table_messages(data VARCHAR(255))',
             []
           );
         }
         else{
           txn.executeSql(
             'INSERT INTO TABLE table_messages(data VARCHAR(255))',
             []
           );
         }
       }
     );
   });
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
            <p><input type='text' placeholder='Enter your message here', name='message' onChange={this.handleInputChange}/></p>
            <p><button>Send Message</button></p>
            </form>
        </div>

      )
    }
}

export default
