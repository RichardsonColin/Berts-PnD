import PropTypes from 'prop-types';
import styled from 'styled-components';
// constants
import { mediaQueries } from '@/src/constants';

Section.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default function Section({ id, className = '', children }) {
  return (
    <StyledSection id={id} className={className} mediaQueries={mediaQueries}>
      {children}
    </StyledSection>
  );
}

// styles
const StyledSection = styled.section`
  padding: 3.125rem 0.625rem;

  @media (min-width: ${({ mediaQueries }) => mediaQueries.laptop}) {
    padding: 6.25rem 0.625rem;
  }
`;
