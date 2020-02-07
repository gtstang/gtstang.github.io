import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Consumer } from '../../context';
import { DELETE_CONTACT } from '../../actionTypes';

const DATA_URL = 'https://jsonplaceholder.typicode.com/users';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  render() {
    const { id, name, email, phone } = this.props.contact;

    return (
      <Consumer>
        {value => {
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i
                  onClick={this.onShowClick}
                  className={
                    this.state.showContactInfo
                      ? 'fas fa-sort-up'
                      : 'fas fa-sort-down'
                  }
                  style={{ cursor: 'pointer', marginLeft: '5px' }}
                ></i>
                <i
                  className="fas fa-times"
                  style={{ cursor: 'pointer', color: 'red', float: 'right' }}
                  onClick={() => this.onDeleteClick(value.dispatch, id)}
                ></i>

                <Link to={`/contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: 'pointer',
                      color: 'black',
                      float: 'right',
                      marginRight: '1em'
                    }}
                  ></i>
                </Link>
              </h4>

              {this.state.showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">
                    <i className="fas fa-envelope mr-2"></i>
                    {email}
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-phone-alt mr-2"></i>
                    {phone}
                  </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }

  onDeleteClick = async (handler, id, e) => {
    const res = await axios.delete(`${DATA_URL}/${id}`);

    if (res.status === 200) {
      handler({ type: DELETE_CONTACT, payload: id });
    }
    //handler({ type: DELETE_CONTACT, payload: id });
  };

  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
