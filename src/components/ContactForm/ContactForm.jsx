import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    phone: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, phone } = this.state;

    this.props.onSubmit(name, phone);
    this.setState({ name: '', phone: '' });
  };

  render() {
    const { name, phone } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Please enter contact name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Phone number
          <input
            type="tel"
            placeholder="Please enter contact phone number"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            value={phone}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
