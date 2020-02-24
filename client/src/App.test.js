import React from 'react';
import App from './App';
import {render} from '@testing-library/react';

it('renders without crashing', () => {
  render(<App />);
});

test("dark mode is toggling", () => {

});

test("is rendering data", () => {
  const container = render(<App />)
  container.getByText(/test/i)
});