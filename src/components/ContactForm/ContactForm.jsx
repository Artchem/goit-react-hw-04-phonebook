import { useState } from 'react';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    // console.log(evt.target.name);
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const resetForm = () => {
    // this.setState({ name: '', number: '' });
    setName('');
    setNumber('');
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ name, number });
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[A-Za-zА-Яа-я]{1}[A-Za-zА-Яа-я-\'\s]*[A-Za-zА-Яа-я]{1}$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="">
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

// import { Formik, ErrorMessage } from 'formik';
// import { object, string } from 'yup';
// import {
//   Btn,
//   Label,
//   Input,
//   FormStyled,
// } from 'components/ContactForm/ContactForm.styled';

// const initialValues = { name: '', number: '' };

// const namePattern =
//   /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
// const numberPattern =
//   /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

// const schema = object().shape({
//   name: string()
//     .max(20)
//     .matches(namePattern, {
//       message:
//         "Invalid name. Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",
//     })
//     .required(),
//   number: string()
//     .min(3)
//     .matches(numberPattern, {
//       message:
//         'Invalid number. Phone number must be digits and can contain spaces, dashes, parentheses and can start with +.',
//     })
//     .required(),
// });

// export const ContactForm = ({ onSubmit }) => {
//   const handleSubmit = (values, { resetForm }) => {
//     onSubmit(values);
//     // console.log(values);
//     resetForm();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={schema}
//       onSubmit={handleSubmit}
//     >
//       <FormStyled>
//         <h2>Phonebook</h2>
//         <Label htmlFor="">
//           Name
//           <Input type="text" name="name" />
//           <ErrorMessage name="name" component="div" />
//         </Label>
//         <Label htmlFor="">
//           Number
//           <Input type="tel" name="number" />
//           <ErrorMessage name="number" component="div" />
//         </Label>
//         <Btn type="submit">Add contact</Btn>
//       </FormStyled>
//     </Formik>
//   );
// };
