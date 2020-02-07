import React, { Component } from 'react';

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  static defaultProps = {
    name: 'Fred Smith',
    email: 'fred@yahoo.com',
    phone: '555-555-5555'
  };

  render() {
    const { name, email, phone } = this.props;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>

        <div className="card-body">
          <form onSubmit={this.submit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Name..."
                defaultValue={name}
                name="name"
                ref={this.nameInput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Email..."
                defaultValue={email}
                name="email"
                ref={this.emailInput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                className="form-control form-control-lg"
                placeholder="Enter Phone Number..."
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                defaultValue={phone}
                name="phone"
                ref={this.phoneInput}
              />
            </div>

            <input
              type="submit"
              value="Add"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }

  submit = e => {
    e.preventDefault();

    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };

    console.log(contact);
  };
}

export default AddContact;
