import PropTypes from 'prop-types';
// components
import Header from './Header';
import Navigation from './Navigation';
import Main from './Main';
import Footer from './Footer';

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Layout(props) {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Main>{props.children}</Main>
      <Footer>
        <div></div>
      </Footer>
    </>
  );
}
