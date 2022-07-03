import { useContext } from 'react';
import { useState } from 'react';
import { SocketContext } from '../context/socketContext';

export const BandAdd = () => {
  const [name, setName] = useState('');
  const { socket } = useContext(SocketContext);

  const handleAdd = (e) => {
    e.preventDefault();

    if (name.trim().length > 0) {
      socket.emit('band-add', name);
      setName('');
    }
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
