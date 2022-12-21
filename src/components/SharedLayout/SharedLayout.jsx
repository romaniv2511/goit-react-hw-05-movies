import { GlobalStyle } from '../GlobalStyle';
import { Outlet } from 'react-router-dom';
import { Header, NavList, Link } from './SharedLayout.styles';

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
      <main>
        <Outlet />
      </main>
    </>
  );
};
