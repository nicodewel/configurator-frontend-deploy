import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
test('renders', () => {
  render(<BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>);
});
