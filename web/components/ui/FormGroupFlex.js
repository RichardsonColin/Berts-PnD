import PropTypes from 'prop-types';
// constants
import { mediaQueries } from '@/src/constants';
// style
import styled from 'styled-components';

FormGroupFlex.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default function FormGroupFlex({ children, className }) {
  return (
    <StyledFormGroupFlex className={className}>{children}</StyledFormGroupFlex>
  );
}

// styles
const StyledFormGroupFlex = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    flex-grow: 1;
  }

  @media (min-width: ${mediaQueries.tablet}) {
    flex-direction: row;
  }
`;