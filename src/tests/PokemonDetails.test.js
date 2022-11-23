import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemonList from '../data';

describe('Testando o componete <PokemonDetails /.', () => {
  test('Teste o componente <PokemonDetails.js />', () => {
    renderWithRouter(<App />);

    const pokemonName = screen.getByTestId('pokemon-name').innerHTML;
    const pokeList = pokemonList.find((poke) => poke.name === pokemonName);
    const detailBtn = screen.getByRole('link', { name: /more details/i });
    const title = screen
      .getByRole('heading', { name: `${pokemonName} Details` });
    const summaryText = screen
      .getByRole('heading', { name: /summary/i });
    const location = screen
      .getByRole('heading', { name: `Game Locations of ${pokemonName}` });
    const imagem = screen.getAllByAltText(`${pokemonName} location`);
    const favorite = screen.getByText(/pokémon favoritado\?/i);

    userEvent.click(detailBtn);

    expect(title).toBeInTheDocument();
    expect(summaryText).toBeInTheDocument();
    expect(summaryText.nextElementSibling).toHaveTextContent(pokeList.summary);
    expect(location).toBeInTheDocument();
    expect(favorite).toBeInTheDocument();

    imagem.forEach((img, index) => {
      expect(img).toBeInTheDocument();
      expect(img.src).toBe(pokeList.foundAt[index].map);
    });
  });
});
