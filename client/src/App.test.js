import { render, screen } from '@testing-library/react';
import App from './App';

test('correctly renders override header level', () => {
  const { getByRole } = render(<h3/>)

  expect(getByRole('heading', { level: 3 })).toBeInTheDocument()
});
