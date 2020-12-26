import React from 'react';
import ReactDOM from 'react-dom';

let messages = ['Привет', 'Как дела?'];

const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => {
   return props.messages.map(message => <MessageComponent text={ message } />);
};

const addMessage = () => {
  console.log('На кнопку нажали');
  messages.push("Нормально");
  ReactDOM.render(
    <div>
     <MessageField messages={ messages } />
     <Button text = { "Кнопка" } />
    </div>,
     document.getElementById('root'),
  );
}

const Button = (props) => <button onClick={addMessage}>
  {props.text}
</button>;

ReactDOM.render(
  <div>
   <MessageField messages={ messages } />
   <Button text = { "Кнопка" } />
   </div>,
   document.getElementById('root'),
);
