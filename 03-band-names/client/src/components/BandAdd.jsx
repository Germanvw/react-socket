import { useState } from 'react';

export const BandAdd = ({ addBand }) => {
  const [name, setName] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    addBand(name);
  };
  return (
    <>
      <h3>Add Band</h3>
      <form onSubmit={handleAdd}>
        <input
          type='text'
          placeholder='Band Name'
          className='form-control'
          value={name}
          onChange={({ target }) => setName(target?.value)}
        />
        <button className='btn btn-primary' type='submit'>
          Submit
        </button>
      </form>
    </>
  );
};
