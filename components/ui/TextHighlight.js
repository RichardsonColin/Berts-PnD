import PropTypes from 'prop-types';
import styled from 'styled-components';

TextHighlight.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default function TextHighlight({ color, className = '', children }) {
  return (
    <StyledTextHighlight color={color} className={className}>
      {children}
    </StyledTextHighlight>
  );
}

// styles
const StyledTextHighlight = styled.span`
  && {
    color: ${({ color }) => color};
  }
`;
