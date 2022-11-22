import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { FavoritePokemon } from '../pages';
import pokemonList from '../data';

describe('testando componente <FavoritePokemon />', () => {
  renderWithRouter(<FavoritePokemon />);
  const noPoke = screen.getByText(/no favorite pokémon found/i);
  test('se ao entrar na pagina consta no favorite pokémon found ', () => {
    expect(noPoke).toBeInTheDocument();
  });
  test('se salvar um pokemon deve aparecer nos favoritos', () => {
    renderWithRouter(<FavoritePokemon pokemonList={ pokemonList } />);
    const arrayPokemonList = pokemonList
      .map((pokemon) => screen.getByText(pokemon.name));
    expect(arrayPokemonList).toHaveLength(pokemonList.length);
  });
});
