import {render, screen} from '@testing-library/react';
import Title from './Title';


test('h1 testid in the document', () => {
    render(<Title />);
    expect(screen.getByTestId('h1')).toBeInTheDocument();
  })