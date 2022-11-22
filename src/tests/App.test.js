import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

describe('testando o componente <app />', () => {
  const { history } = renderWithRouter(<App />);
  const home = screen.getByRole('link', {
    name: /home/i,
  });

  const about = screen.getByRole('link', {
    name: /about/i,
  });

  const favoritePokemon = screen.getByRole('link', {
    name: /favorite pokémon/i,
  });

  test('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
    expect(home).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(favoritePokemon).toBeInTheDocument();
  });

  test('Teste se a aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home da barra de navegação;', () => {
    userEvent.click(home);
    history.push('/');
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
  test('Teste se a aplicação é redirecionada para a página de About, na URL /about, ao clicar no link About da barra de navegação;', () => {
    userEvent.click(about);
    history.push('/about');
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });
  test('Teste se a aplicação é redirecionada para a página de About, na URL /about, ao clicar no link About da barra de navegação;', () => {
    userEvent.click(favoritePokemon);
    history.push('/favorites');
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });
  test('deve testar um caminho não existente e a renderização do Not Found', () => {
    renderWithRouter(<NotFound />);
    const notFoundTitle = screen.getByRole('heading', {
      name: /page requested not found/i,
    });
    expect(notFoundTitle).toBeInTheDocument();
  });
});
