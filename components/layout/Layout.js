import PropTypes from 'prop-types';
// components
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Layout(props) {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main>{props.children}</Main>
      <Footer></Footer>
    </>
  );
}
