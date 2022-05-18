import {render, screen} from '@testing-library/react';
import Output from './Display';


test('img with header testid in the document', () => {
    render(<Output />);
    expect(screen.getByTestId('box')).toBeInTheDocument();
  })