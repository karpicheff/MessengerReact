import React from 'react';
import { List, ListItem } from 'material-ui/List';

export default class ChatList extends React.Component {
   render() {
       return (
           <List>
              <ListItem primaryText="Chat 1"  />
              <ListItem primaryText="Chat 2"  />
              <ListItem primaryText="Chat 3" /> 
           </List>
       )
   }
}
