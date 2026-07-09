import { render, screen } from '@testing-library/react';
import Home from './pages/Home';

jest.mock('react-router-dom', () => ({
  Link: ({ children, to, ...props }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}), { virtual: true });

test('renders portfolio home page', () => {
  render(<Home />);
  expect(screen.getByRole('heading', { name: /bhavyatha shetty/i })).toBeInTheDocument();
});
