import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { SocketContext } from '../context/socketContext';

export const BandList = () => {
  const { socket } = useContext(SocketContext);

  const [bands, setBands] = useState([]);

  const handleName = (id, name) => {
    const newList = bands.map((band) =>
      band.id === id ? { ...band, name } : band
    );
    setBands(newList);
  };

  const handleOffFocus = (id, newName) => {
    socket.emit('band-change-name', { id, newName });
  };

  const addVote = (id) => {
    socket.emit('band-vote', id);
  };

  const deleteBand = (id) => {
    socket.emit('band-delete', id);
  };

  useEffect(() => {
    socket.on('band-list', (data) => {
      setBands(data);
    });

    return () => socket.off('band-list');
  }, [socket]);

  return (
    <>
      <table className='table table-stripped'>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Votes</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {bands.map(({ votes, name, id }) => (
            <tr key={id}>
              <td>
                <button className='btn btn-primary' onClick={() => addVote(id)}>
                  +1
                </button>
              </td>
              <td>
                <input
                  className='form-control'
                  value={name}
                  onChange={({ target }) => handleName(id, target.value)}
                  onBlur={() => handleOffFocus(id, name)}
                />
              </td>
              <td>
                <h3>{votes}</h3>
              </td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={() => deleteBand(id)}
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
