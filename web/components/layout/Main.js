import styled from 'styled-components';
import PropTypes from 'prop-types';

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Main({ children }) {
  return <StyledMain id='main'>{children}</StyledMain>;
}

const StyledMain = styled.main``;
