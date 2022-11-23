import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('testando o componete <about />', () => {
  test('Teste se a página contém as informações sobre a Pokédex', () => {
    const { history } = renderWithRouter(<About />);
    history.push('/about');
    const { pathname } = history.location;
    const aboutPokedex = screen
      .getByRole('heading', { name: /about pokédex/i, level: 2,
      });
    const pUm = screen
      .getByText(
        /this application simulates a pokédex, a digital encyclopedia containing all pokémon/i,
      );
    const pDois = screen
      .getByText(
        /one can filter pokémon by type, and see more details for each one of them/i,
      );
    const img = screen
      .getByRole('img', { name: /pokédex/i,
      });

    expect(pathname).toBe('/about');
    expect(aboutPokedex).toBeInTheDocument();
    expect(pUm).toBeInTheDocument();
    expect(pDois).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
