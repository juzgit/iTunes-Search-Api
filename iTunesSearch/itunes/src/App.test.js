import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Enter a search term and also select the type of media you want to search/i);
  expect(linkElement).toBeInTheDocument();
});
