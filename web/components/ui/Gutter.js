import PropTypes from 'prop-types';
import styled from 'styled-components';

Gutter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default function Gutter({ className = '', children }) {
  return <StyledGutter className={className}>{children}</StyledGutter>;
}

const StyledGutter = styled.div`
  max-width: 1150px;
  margin: 0 auto;

  @media (min-width: 1400px) {
    max-width: 1300px;
  }
`;
