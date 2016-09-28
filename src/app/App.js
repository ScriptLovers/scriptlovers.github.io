import { Provider } from 'react-redux';
import Terminal  from '../terminal/Terminal';

const App = ({ store }) =>
  <Provider store={store}>
    <Terminal />
  </Provider>;

App.propTypes = {
  store : React.PropTypes.object.isRequired
};

export default App;
