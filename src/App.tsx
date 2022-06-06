import React from 'react';
// import logo from './logo.svg';
import FirstPage from './page/first';

import './App.css';

export default class App extends React.Component<any> {
  render(): JSX.Element{
    return (
      <div >
      <FirstPage/>
    </div>
    );
  }
}

