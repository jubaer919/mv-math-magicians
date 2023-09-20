import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/Home';

test('renders h1 element', () => {
  const { getByText } = render(<Home />);
  const h1Element = getByText(/Welcome to our page/i);
  expect(h1Element).toBeInTheDocument();
});

test('renders two p elements', () => {
  const { container } = render(<Home />);
  const pElements = container.querySelectorAll('p');
  expect(pElements.length).toBe(2);
});
