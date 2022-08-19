import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// components
import Container from '@/components/ui/Container';
import Heading from '@/components/ui/Heading';
// constants
import { COMPANY_REVIEW_LINK } from '@/utils/constants';
import { mediaQueries } from '@/utils/constants';

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
  width: 70px;
  height: 70px;
  background-color: var(--color-grey-10);
  transform: rotateZ(135deg);
  z-index: 1;
  overflow: hidden;

  @media (min-width: ${mediaQueries.mobileL}) {
    width: 100px;
    height: 100px;
  }
  @media (min-width: ${mediaQueries.tablet}) {
    width: 150px;
    height: 150px;
  }
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
    bottom: -42px;
    left: -42px;
  }
  &:after {
    ${CutCorner}
    content: '';
    bottom: -42px;
    right: -42px;
  }

  /* min-widths */
  @media (min-width: ${mediaQueries.mobileL}) {
    &:before {
      ${CutCorner}
      content: '';
      bottom: -52px;
      left: -52px;
    }
    &:after {
      ${CutCorner}
      content: '';
      bottom: -52px;
      right: -52px;
    }
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
    color: var(--color-grey-10);
    background-color: var(--primary);
    font-size: 1.1em;
    font-weight: 400;
    text-shadow: 1px 1px var(--color-grey-900);
    transition: 0.2s ease;

    &:hover {
      background-color: var(--primary-accent);
    }
  }
`;
