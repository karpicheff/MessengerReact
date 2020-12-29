import React from 'react';
import Message from './Message';

export default class MessageField extends React.Component {
   state = {
       messages: ["Привет!", "Как дела?"],
       senders: ["robot", "robot"]
   };

   componentDidUpdate() {
    const lastMsgIdx = this.state.senders.length - 1;
    if ( lastMsgIdx >= 0 && this.state.senders[lastMsgIdx] !== 'robot') {
      setTimeout(() =>
      this.setState(
        {
          msg: '',
          messages: [ ...this.state.messages, 'Не приставай ко мне, я робот!' ],
          senders: [...this.state.senders, 'robot'] }), 1000);
        }
    };


   handleClick = () => {
       this.setState({ messages: [ ...this.state.messages, this.state.msg ],
        senders: [...this.state.senders, 'human']});
   };

   handleChange = (event) => {this.setState({msg: event.target.value});}

   render() {
       var messageElements = [];
       for (var i = 0; i < this.state.messages.length; ++i)
       {
         messageElements.push(<Message text={ this.state.messages[i] } sender = { this.state.senders[i] }/>)
       }

       return <div>
           { messageElements }
           <textarea value={this.state.msg} onChange={ this.handleChange }></textarea><br/>
           <button onClick={ this.handleClick }>Отправить сообщение</button>
       </div>
   }
}
