import React from 'react';
import ReactDOM from 'react-dom';
import Fetch from './components/fetch/Fetch';
import Disco from './components/disco/Disco';
import './index.css';

const App = () => {

  return (
    <div>
        <Fetch />
        <Disco />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
