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
  padding-top: 1rem;
  padding-bottom: 1rem;

  & > * {
    padding-top: 0;
    flex-grow: 1;
  }
  & > *:last-child {
    padding-bottom: 0;
  }

  @media (min-width: ${mediaQueries.tablet}) {
    flex-direction: row;
    padding-bottom: 0;
  }
`;
