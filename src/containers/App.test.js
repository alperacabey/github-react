import { render, screen } from '@testing-library/react'
import App from './App'

test('renders search text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Search for an organization/i);
  expect(linkElement).toBeInTheDocument();
});
