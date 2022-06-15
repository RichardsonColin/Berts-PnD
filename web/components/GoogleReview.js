import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// components
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
// constants
import { COMPANY_REVIEW_LINK } from '@/src/constants';
import { mediaQueries } from '@/src/constants';

GoogleReview.propTypes = {
  className: PropTypes.string,
};

export default function GoogleReview({ className }) {
  return (
    <StyledContainer className={className}>
      <Heading level='2'>Experienced Great Service?</Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ante
        dolor, posuere vel orci ac, facilisis commodo metus. Proin dignissim
        eros et pellentesque pharetra.
      </p>
      <StyledLink target='_blank' href={COMPANY_REVIEW_LINK}>
        Leave a Google Review!
      </StyledLink>
    </StyledContainer>
  );
}

// styles
const CutCorner = css`
  position: absolute;
  width: 150px;
  height: 150px;
  background-color: var(--color-grey-10);
  transform: rotateZ(135deg);
  z-index: 5;
  overflow: hidden;
`;
const StyledContainer = styled(Container)`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 1px;
  background-color: var(--secondary);
  color: var(--color-grey-10);

  /* angled corners */
  &:before {
    ${CutCorner}
    content: '';
    bottom: -110px;
    left: -110px;
  }
  &:after {
    ${CutCorner}
    content: '';
    bottom: -110px;
    right: -110px;
  }

  @media (min-width: ${mediaQueries.tablet}) {
    /* angled corners */
    &:before {
      ${CutCorner}
      content: '';
      bottom: -90px;
      left: -90px;
    }
    &:after {
      ${CutCorner}
      content: '';
      bottom: -90px;
      right: -90px;
    }
  }
`;
const StyledLink = styled.a`
  ${StyledContainer} & {
    display: inline-block;
    padding: 0.75rem 1rem;
    border-radius: 2px;
    color: var(--secondary-dark);
    background-color: var(--primary);
    font-size: 1.1em;
    font-weight: 400;
    transition: 0.2s ease;

    &:hover {
      background-color: var(--primary-accent);
    }
  }
`;
