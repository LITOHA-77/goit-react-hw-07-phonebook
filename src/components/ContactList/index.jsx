import React from 'react';
import Contact from '../Contacts/index';
import css from './ContactList.module.css';
import { useFetchContactsQuery } from 'Redux/contactSlice';
import { useSelector } from 'react-redux';

const getVisibleEl = (contacts = [], filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
const ContactList = () => {
  const { data } = useFetchContactsQuery();
  const filteredContact = useSelector(state =>
    getVisibleEl(data, state.filter.value)
  );


  return (
    <div className={css.container}>
       <ul className={css.list}>
         {filteredContact.map(({ id, name, phone }) => {
       
           return <Contact key={id} name={name} number={phone} id={id} />;
          })}
      </ul>
    </div>
  );
};


export default ContactList;