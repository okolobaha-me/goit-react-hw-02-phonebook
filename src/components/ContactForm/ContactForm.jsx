import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

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
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.formLabel}>
          <span className={s.formTitle}>Name</span>
          <input
            className={s.fromInput}
            type="text"
            placeholder="Please enter contact name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>

        <label className={s.formLabel}>
          <span className={s.formTitle}>Phone number</span>
          <input
            className={s.fromInput}
            type="tel"
            placeholder="Please enter contact phone number"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            value={phone}
            onChange={this.handleChange}
          />
        </label>

        <button className={s.formButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
