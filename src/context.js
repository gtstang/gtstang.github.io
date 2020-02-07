import React, { Component } from 'react';
import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from './actionTypes';

import axios from 'axios';

const DATA_URL = 'https://jsonplaceholder.typicode.com/users';

const Context = React.createContext();
const Consumer = Context.Consumer;

class Provider extends Component {
  state = {
    contacts: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  async componentDidMount() {
    /* fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        const contacts = json.map(user => {
          const { id, name, email, phone } = user;

          return { id, name, email, phone };
        });

        this.setState({ contacts: contacts });
      }); */

    //axios.get(DATA_URL).then(res => this.setState({ contacts: res.data }));

    const res = await axios.get(DATA_URL);
    this.setState({ contacts: res.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };

    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id !== action.payload.id ? contact : action.payload
        )
      };

    default:
      return state;
  }
};

export { Consumer, Provider };
