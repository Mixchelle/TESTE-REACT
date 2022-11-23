import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componete <pokedex />', () => {
  test('Teste se a página contém um heading h2 com o texto Encountered Pokémon;', () => {
    renderWithRouter(<App />);
    const texto = screen.getByRole('heading', {
      name: /encountered pokémon/i, level: 2,
    });
    expect(texto).toBeInTheDocument();
  });
  test('Teste se a Pokédex tem os botões de filtro:', () => {
    renderWithRouter(<App />);

    const typeBtn = screen.getAllByTestId('pokemon-type-button');
    const allBtn = screen.getByRole('button', { name: /all/i });

    expect(allBtn).toBeEnabled();
    expect(allBtn).not
      .toHaveProperty('data-testid', 'pokemon-type-button');
    userEvent.click(allBtn);

    const allTypes = ['Electric', 'Fire', 'Bug',
      'Poison', 'Psychic', 'Normal', 'Dragon'];

    allTypes.forEach((type, index) => (
      expect(typeBtn[index]).toHaveTextContent(type)));
  });
});
