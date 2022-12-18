import React from 'react';
import { useState } from 'react';
import { Form } from './UserNameForm.styled';

export const UserNameForm = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name);
    setName('');
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <h1>SNAKE GAME</h1>
      <h2>Enter your name and you can start</h2>
      <label>
        Name &#8594;
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Player name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <button type="submit">Start game</button>
    </Form>
  );
};
