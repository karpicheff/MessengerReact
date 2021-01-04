import React from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './Message';
import '../styles/styles.css';

export default class MessageField extends React.Component {
    constructor(props) {
      super(props);
      // создадим ref в поле `textInput` для хранения DOM-элемента
      this.textInput = React.createRef();
    }
    state = {
       messages: [{ sender: "robot", text: "Привет!"}, {sender: "robot", text: "Как дела?"}],
     };

     componentDidUpdate(prevProps, prevState) {
       const lastMsgIdx = this.state.messages.length - 1;
       if (prevState.messages.length < this.state.messages.length && lastMsgIdx >= 0 && this.state.messages[lastMsgIdx].sender !== 'robot') {
         setTimeout(() =>
         this.setState(
           {
             input: '',
             messages: [ ...this.state.messages, {sender: 'robot', text:'Не приставай ко мне, я робот!'} ],
           }), 1000);
         }
       };
       // Ставим фокус на <input> при монтировании компонента
     componentDidMount() {
         this.textInput.current.focus();
       };



   handleClick = (message) => {
       this.sendMessage(message);
   };

   handleChange = (event) => {this.setState({input: event.target.value});}

   handleKeyUp = (event, message) => {
       if (event.keyCode === 13) { // Enter
           this.sendMessage(message)
       }
   };

   sendMessage = (message) => {
    this.setState({ messages: [ ...this.state.messages, {text: message, sender: 'human'} ] });
    this.state.input = '';
};

   render() {
        const messageElements = this.state.messages.map((msg, index) => (
           <Message key={ index } text={ msg.text } sender = { msg.sender } />));

       return [
        <div id='main' className='message-field'>
           { messageElements }
        </div>,
        <div style={ { width: '100%', display: 'flex' } }>
          <TextField
            name="input"
            ref={ this.textInput }
            fullWidth={ true }
            hintText="Введите сообщение"
            style={ { fontSize: '22px' } }
            onChange={ this.handleChange }
            value={ this.state.input }
            onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
          />
          <FloatingActionButton onClick={ () => this.handleClick(this.state.input) }>
          <SendIcon />
          </FloatingActionButton>
        </div>
      ]
   }
}
