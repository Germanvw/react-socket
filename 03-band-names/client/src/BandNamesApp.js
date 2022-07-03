import { SocketProvinder } from './context/socketContext';
import { HomePage } from './pages/HomePage';

export const BandNamesApp = () => {
  return (
    <SocketProvinder>
      <HomePage />
    </SocketProvinder>
  );
};
