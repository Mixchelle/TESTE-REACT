import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

describe('testando o componente <NotFound />', () => {
  test('', () => {
    renderWithRouter(<NotFound />);
    const hDois = screen.getByRole('heading', {
      name: /page requested not found/i, level: 2,
    });
    const img = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
    });
    expect(hDois).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
