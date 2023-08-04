import React from 'react';
import HomeScreen from './modules/home/screens/HomeScreen';
import { Provider } from 'react-redux';
import store from './config/redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HomeScreen />
      </div>
    </Provider>

  );
}

export default App;
