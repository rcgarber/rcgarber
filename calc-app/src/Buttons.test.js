import {render, screen} from '@testing-library/react';
import Buttons from './Buttons'; 

test('img with buttons testid in the document', () => {
  render(<Buttons />);
  expect(screen.getByTestId('buttons')).toBeInTheDocument();
})