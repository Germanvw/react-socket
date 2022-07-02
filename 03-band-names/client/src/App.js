import { useEffect, useState } from 'react';
import { BandAdd } from './components/BandAdd';
import { BandList } from './components/BandList';
import io from 'socket.io-client';

const connectSocket = () => {
  return io.connect('http://localhost:8080', { transports: ['websocket'] });
};

export const App = () => {
  const [socket] = useState(connectSocket());
  const [status, setStatus] = useState(false);

  const [bandList, setBandList] = useState([]);

  const addVote = (id) => {
    socket.emit('band-vote', id);
  };

  const deleteBand = (id) => {
    socket.emit('band-delete', id);
  };

  const changeName = (id, newName) => {
    socket.emit('band-change-name', { id, newName });
  };

  const addBand = (name) => {
    socket.emit('band-add', name);
  };

  useEffect(() => {
    socket.on('connect', () => {
      setStatus(true);
    });

    socket.on('disconnect', () => {
      setStatus(false);
    });
  }, [socket]);

  useEffect(() => {
    socket.on('band-list', (data) => {
      setBandList(data);
    });
  }, [socket]);

  return (
    <div className='container'>
      <div className='alert'>
        <p>
          Service status:
          {status ? (
            <span className='text-success'> Online</span>
          ) : (
            <span className='text-danger'> Offline</span>
          )}
        </p>
      </div>
      <h1>Brands</h1>
      <hr />
      <div className='row'>
        <div className='col-8'>
          <BandList
            list={bandList}
            addVote={addVote}
            deleteBand={deleteBand}
            changeName={changeName}
          />
        </div>
        <div className='col-4'>
          <BandAdd addBand={addBand} />
        </div>
      </div>
    </div>
  );
};
