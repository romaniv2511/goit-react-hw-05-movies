import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import { Loader } from 'components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
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
        <ToastContainer />
      </Header>
      <Suspense fallback={<Loader />}>
        <Main>
          <Outlet />
        </Main>
      </Suspense>
    </>
  );
};
