import React from 'react';

import { Header, UserTable } from './components';

import { UsersProvider } from './context';

import './App.css';


export const App = () => (
  <UsersProvider>
    <div className='App'>
      <Header />
      <UserTable />
    </div>
  </UsersProvider>
);
