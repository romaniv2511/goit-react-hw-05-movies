import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';

import { Header, NavList, Link, Main } from './SharedLayout.styles';

export const SharedLayout = () => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <nav>
          <NavList>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </NavList>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Main>
          <Outlet />
        </Main>
      </Suspense>
    </>
  );
};
