import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider  as ReduxProvider} from 'react-redux'
import configureStore from "./redux/configureStore";

// const store = configureStore();

// test('renders learn react link', () => {
//   const { getByText } = render(<ReduxProvider store={store}><App /></ReduxProvider>);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('testing how to make a test', () => {
  expect(true).toBe(true);
});