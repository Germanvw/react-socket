import { useContext } from 'react';
import { BandAdd } from '../components/BandAdd';
import { BandList } from '../components/BandList';
import { BrandChart } from '../components/BrandChart';
import { SocketContext } from '../context/socketContext';

export const HomePage = () => {
  const { online } = useContext(SocketContext);

  return (
    <div className='container'>
      <div className='alert'>
        <p>
          Service status:
          {online ? (
            <span className='text-success'> Online</span>
          ) : (
            <span className='text-danger'> Offline</span>
          )}
        </p>
      </div>
      <h1>Brands</h1>
      <hr />
      <div className='row'>
        <div className='col'>
          <BrandChart />
        </div>
      </div>
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
