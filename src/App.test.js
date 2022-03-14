import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Comparison button', () => {
  const { getByText } = render(
      <App />
  );

  expect(getByText('Comparison')).toBeInTheDocument();
});
