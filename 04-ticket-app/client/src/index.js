import React from 'react';
import ReactDOM from 'react-dom/client';
import { TicketApp } from './TicketApp';
import './index.css';
import { AuthProvinder } from './context/authContext';
import { SocketProvinder } from './context/socketContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvinder>
    <SocketProvinder>
      <TicketApp />
    </SocketProvinder>
  </AuthProvinder>
);
