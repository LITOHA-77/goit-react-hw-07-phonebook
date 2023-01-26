import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from 'Redux/contactSlice'
import css from './ContactForm.module.css';

const Form = () => {
  const [createContact] = useCreateContactMutation();
  const { data } = useFetchContactsQuery();

  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.number.value,
    };

    const eventNameValue = e.target[0].value;
    const arrayContactNormalaise = data.map(e => e.name.toLowerCase().trim());

    const filterName = arrayContactNormalaise.find(
      e => e === eventNameValue.toLowerCase().trim()
    );

    filterName
      ? alert(`${eventNameValue} is already in Contacts`)
      : createContact(contact);

    e.currentTarget.reset();
  };

  
    return (<div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        
          <h3>Name</h3>
          <label>
          <input
            
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
           </label>
          <h3>Number</h3>
           <label>
          <input
            
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            />
            </label>

          <button type="submit" className={css.button}>
            Add contact
          </button>
        
      </form>
    </div>
    );
  }


export default Form;