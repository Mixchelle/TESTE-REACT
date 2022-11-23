import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('teste componente <Pokemon />', () => {
  test('', () => {
    renderWithRouter(<App />);
    const poke = screen.getByText(/pikachu/i);
    const text = screen.getByText(/average weight: 6\.0 kg/i);
    const btn = screen.getByRole('link', { name: /more details/i });

    expect(poke).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });
});
