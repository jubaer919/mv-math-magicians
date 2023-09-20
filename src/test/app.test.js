import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

const MokApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

test('renders the App component', () => {
  const { getByText } = render(<MokApp />);
  expect(getByText('Welcome to our page')).toBeInTheDocument();
});

test('renders three routes', () => {
  const { container } = render(<MokApp />);
  const linkElements = container.querySelectorAll('a');
  expect(linkElements.length).toBe(3);
});
