import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  const givenWord = 'Hello, World!';

  it('should renders given word', () => {
    render(<App />);

    screen.getByText(givenWord);
  });
});
