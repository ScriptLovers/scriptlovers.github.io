import { render } from 'react-dom';
import App  from './app/App';
import configureStore  from './utils/configureStore';

const store = configureStore();

// Render initial state
render(
  <App store={store} />,
  document.getElementById('root')
);
