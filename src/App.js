import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './Pages/HomePage';

// import UserContainer from './components/userContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <HomePage />
    </div>
    </Provider>
  );
}

export default App;