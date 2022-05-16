import {render, screen} from '@testing-library/react';
import Header from './Header';

test('img with header testid in the document', () => {
  render(<Header />);
  expect(screen.getByTestId('header')).toBeInTheDocument();
})