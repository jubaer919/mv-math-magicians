import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MokNavbar = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
);

test('renders h1 element with "Math Magician"', () => {
  const { getByText } = render(<MokNavbar />);
  const h1Element = getByText(/Math Magician/i);
  expect(h1Element).toBeInTheDocument();
});

test('renders three Link elements', () => {
  const { container } = render(<MokNavbar />);
  const linkElements = container.querySelectorAll('a');
  expect(linkElements.length).toBe(3);
});
