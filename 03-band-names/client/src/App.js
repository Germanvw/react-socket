import { useState } from 'react';
import { BandAdd } from './components/BandAdd';
import { BandList } from './components/BandList';

export const App = () => {
  const [status, setStatus] = useState(false);
  return (
    <div className='container'>
      <div className='alert'>
        <p>
          Service status:{' '}
          <span className={`text-${status ? 'success' : 'danger'}`}>
            {' '}
            {status ? 'Online' : 'Offline'}
          </span>
        </p>
      </div>
      <h1>Brands</h1>
      <hr />
      <div className='row'>
        <div className='col-8'>
          <BandList />
        </div>
        <div className='col-4'>
          <BandAdd />
        </div>
      </div>
    </div>
  );
};
