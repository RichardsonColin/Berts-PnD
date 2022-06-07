import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import LinkButton from '@/components/ui/LinkButton';
// constants
import { COMPANY_REVIEW_LINK } from '@/src/constants';
import { mediaQueries } from '@/src/constants';

GoogleReview.propTypes = {
  className: PropTypes.string,
  // children: PropTypes.node.isRequired,
};

export default function GoogleReview({ className = '' }) {
  return (
    <div>
      <StyledLink target='_blank' href={COMPANY_REVIEW_LINK}>
        Leave Your Own Review!
      </StyledLink>
    </div>
  );
}

// styles
const StyledLink = styled.a`
  /* && { */
  width: auto;
  padding: 0.625rem;
  border: 2px solid var(--primary);
  font-size: 1.1em;
  color: var(--primary);
  box-shadow: 0 0 1px var(--color-grey-900);

  &:hover {
    background-color: var(--primary-light);
  }

  @media (min-width: ${mediaQueries.laptop}) {
  }
  /* } */
`;
