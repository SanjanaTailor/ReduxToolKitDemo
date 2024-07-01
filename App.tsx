import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Counter from './app/counter';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
