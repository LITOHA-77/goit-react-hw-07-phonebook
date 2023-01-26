import React from 'react';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../Redux/contactSlice';
import css from 'components/ContactList/ContactList.module.css'

const Contact = ({ name, number, id }) => {
  const [deleteContact, { isLoading: deleting }] = useDeleteContactMutation();
    
    return (
        <li className={css.item}>
           <p className={css.text}>{name}:<span className={css.number}>{number}</span></p>
            <button type="button" className={css.button} onClick={() => deleteContact(id)}>{deleting ? 'Deleting...' : 'Delete'}</button>
        </li>
    )
};
Contact.protoType = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
  };
  
  export default Contact;