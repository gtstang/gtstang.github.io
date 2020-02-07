import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';
import { ADD_CONTACT } from '../../actionTypes';
import TextInputGroup from '../../layout/TextInputGroup';

const DATA_URL = 'https://jsonplaceholder.typicode.com/users';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  changed = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>

              <div className="card-body">
                <form onSubmit={e => this.submit(dispatch, e)}>
                  <TextInputGroup
                    name="name"
                    label="Name"
                    placeholder="Enter Name..."
                    value={name}
                    changed={this.changed}
                    error={errors.name}
                  />
                  <TextInputGroup
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Enter Email..."
                    value={email}
                    changed={this.changed}
                    error={errors.email}
                  />
                  <TextInputGroup
                    name="phone"
                    label="Phone"
                    placeholder="Enter Phone..."
                    value={phone}
                    changed={this.changed}
                    error={errors.phone}
                  />

                  <input
                    type="submit"
                    value="Add"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }

  submit = async (handler, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    //check for errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }

    const newContact = {
      name,
      email,
      phone
    };

    const res = await axios.post(DATA_URL, newContact);
    if (res.status === 201) {
      handler({ type: ADD_CONTACT, payload: res.data });
    }

    this.setState({ name: '', email: '', phone: '', errors: {} });

    //redirct
    this.props.history.push('/');
  };
}

export default AddContact;
