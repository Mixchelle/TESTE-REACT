import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemonList from '../data';

describe('Teste o componente <Pokedex />', () => {
  test('', () => {
    renderWithRouter(<App />);
    const pokemonName = screen
      .getByTestId('pokemon-name').innerHTML;
    const testId = screen.getByTestId('pokemon-type');
    const pokemonImg = screen.getByRole('img');
    const pokeList = pokemonList
      .find((poke) => poke.name === pokemonName);
    const detailBtn = screen
      .getByRole('link', { name: /more details/i });
    expect(pokemonImg.src).toBe(pokeList.image);
    expect(pokemonImg.alt).toBe(`${pokemonName} sprite`);

    userEvent.click(detailBtn);
    const favorite = screen
      .getByText(/pokémon favoritado\?/i);

    userEvent.click(favorite);
    const star = screen
      .getByRole('img', { name: `${pokemonName} is marked as favorite` });
    expect(star.src).toBe('http://localhost/star-icon.svg');
    expect(star.alt).toBe(`${pokemonName} is marked as favorite`);
    expect(testId).toHaveTextContent(pokeList.type);
    expect(detailBtn.href).toBe(`http://localhost/pokemon/${pokeList.id}`);
  });
});
