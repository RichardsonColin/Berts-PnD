import PropTypes from 'prop-types';
// constants
import { mediaQueries } from '@/utils/constants';
// style
import styled from 'styled-components';

FormTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default function FormTitle({ children, className }) {
  return (
    <StyledFormTitle className={className}>
      <Highlight>{children}</Highlight>
    </StyledFormTitle>
  );
}

// styles
const StyledFormTitle = styled.h3`
  margin: 0 0 1rem 1rem;
  font-size: 1.3em;
  font-weight: 500;
  text-transform: capitalize;
  text-align: left;

  @media (min-width: ${mediaQueries.tablet}) {
    font-size: 1.5em;
  }
`;
const Highlight = styled.span`
  ${StyledFormTitle} & {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 18px;
      width: 100%;
      height: 35%;
      background-color: var(--secondary-fade);
    }
  }
`;
