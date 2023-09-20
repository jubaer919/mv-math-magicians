import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuoteDisplay from '../components/QuoteDisplay';

test('renders QuoteDisplay component', () => {
  const { getByText } = render(<QuoteDisplay />);
  const loadingElement = getByText(/Loading.../i);
  expect(loadingElement).toBeInTheDocument();
});

test('displays a quote', async () => {
  const { findByText } = render(<QuoteDisplay />);
  const quoteElement = await findByText(/.+/);
  expect(quoteElement).toBeInTheDocument();
});
